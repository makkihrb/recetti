import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipe, fetchRecipes } from '../utils';
import Loading from '../components/Loading';
import Header from '../components/Header';
import { AiFillPushpin } from 'react-icons/ai';
import { BsPatchCheck } from 'react-icons/bs';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard'


const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [youtubeVideo, setYoutubeVideo] = useState(null); // Added state for YouTube video

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);

      const data = await fetchRecipe(id);

      setRecipe(data);

      const recommend = await fetchRecipes({ query: recipe?.label, limit: 5 });

      setRecipes(recommend);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  const getYoutubeVideo = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&q=${query}+recipe&maxResults=1&type=video`
      );

      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        setYoutubeVideo(videoUrl);
      }
    } catch (error) {
      console.error('Error fetching YouTube video:', error.message);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  useEffect(() => {
    if (recipe?.label) {
      getYoutubeVideo(recipe.label);
    }
  }, [recipe]);

  if (loading) {
    return (
      <div className='w-full h-[100vh] flex items-center justify-center'>
        <Loading />
      </div>
    );
  }
  return (
    <div className='w-full'>
      <Header title={recipe?.label} image={recipe?.image} />

      <div className='w-full px-4 lg:px-20 pt-5 '>
        <div className='flex gap-10 items-center justify-center px-4'>
          {/* ... (Other information) */}
        </div>

        <div className='w-full flex flex-col md:flex-row gap-8 py-20 pxx-4 md:px-10'>
          {/* LEFT SIDE */}
          <div className='w-full md:w-2/4 md:border-r border-slate-800 pr-1'>
            <div className='flex flex-col gap-5'>
            <p className='text-white text-2xl underline decoration-red-500'>Ingredients</p>
              {recipe?.ingredientLines?.map((ingredient, index) => (
                <p key={index} className='text-neutral-100 flex gap-2'>
                  <AiFillPushpin className='text-red-800 text-xl' /> {ingredient}
                </p>
              ))}
            </div>

            <div className='flex flex-col gap-3 mt-20'>
              <p className='text-white text-2xl underline decoration-red-500'>Health Labels</p>
              <div className='flex flex-wrap gap-4'>
                {recipe?.healthLabels.map((item, index) => (
                  <p className='text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full ' key={index}>
                    <BsPatchCheck color='red' /> {item}
                  </p>
                ))}
              </div>
            </div>

            {youtubeVideo && (
              <div className='flex flex-col gap-3 mt-20'>
                <p className='text-white text-2xl underline decoration-red-500'>Related Video</p>
                <div className='flex flex-wrap gap-4'>
                <iframe
                  width='560'
                  height='315'
                  src={youtubeVideo}
                  title='Recipe Video'
                  frameBorder='0'
                  allowFullScreen
                ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
<div className='w-full md:w-2/4 2xl:pl-10 mt-20 md:mt-0'>
  {/* Recipe Image */}
  {
    recipe?.image && (
      <div className='mt-6'>
        <p className='text-white text-2xl underline decoration-red-500'>Recipe Image</p>
        <img src={recipe.image} alt='Recipe' className='mt-2 rounded-lg shadow-xl' style={{ maxWidth: '10000px', maxHeight: '400px'  }} />
        <br/>
      </div>
    )
  }

  {
    recipes?.length > 0 && (
      <>
        <p className='text-white text-2xl'>Also Try This</p>

        <div className='flex flex-wrap gap-6 px-1 pt-3'>
          {/* Render recipe cards */}
          {
            recipes?.map((item, index) => (
              <RecipeCard recipe={item} index={index} />
            ))
          }
        </div>
      </>
    )
  }
</div>

        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
