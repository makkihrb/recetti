# Recetti - Food and Recipe Finder

Recetti is a web application built using React JS and Tailwind CSS that allows users to search and find recipes, along with details like labels, ingredients, health labels, and instructional videos.

## Features

- Search and find recipes based on different criteria.
- View recipe details, including labels, ingredients, health labels, and instructions.
- Watch instructional videos for recipes using YouTube API integration.
- User-friendly and responsive interface built with React JS and styled with Tailwind CSS.
- Data fetched from EDAMAM API for recipe information.
- Fast and Lightweight design

## Getting Started

Follow these steps to get Recetti up and running:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/makkihrb/recetti.git
   ```

2. Navigate to the project directory:
   ```bash
   cd recetti
   ```

3. Install the project dependencies using npm:
   ```bash
   npm install
   ```

4. Create a `.env` file (or EDIT it ) in the root of the project and add your API keys:

   ```
   REACT_APP_EDAMAM_APP_ID=your_edamam_app_id
   REACT_APP_EDAMAM_APP_KEY=your_edamam_app_key
   REACT_APP_YT_KEY=your_youtube_api_key
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your web browser and go to `http://localhost:3000` to use Recetti.

## APIs Used

- [EDAMAM API](https://developer.edamam.com/edamam-docs-recipe-api) for fetching recipe data.
- [YouTube API](https://developers.google.com/youtube/v3) for fetching instructional and recipe preparation videos.

## Technologies Used

- React JS
- Tailwind CSS
- Axios

## Contact

For any questions or feedback, feel free to contact me:

- GitHub: [makkihrb](https://github.com/makkihrb)
- Email: [mekki.harboub@gmail.com](mailto:mekki.harboub@gmail.com)
- LinkedIn: [Mekki Harboub](https://www.linkedin.com/in/makkiharboub/)

## License

This project is licensed under the [MIT License](LICENSE).

## Please don't forget to replace `your_edamam_app_id`, `your_edamam_app_key`, and `your_youtube_api_key` with your actual API keys.#
