import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#000' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Visit my
        <a className='text-white' href='https://github.com/makkihrb'>
        &nbsp;Github
        </a>
      </div>
    </MDBFooter>
  );
}
