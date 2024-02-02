import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './home.css';

function Home() {
  return (
    <div className='homeDiv'>
        <Header  />
        <div className='homeInfo'>
          <h1 className='info-title'>Welcome to  NC Marketplace</h1>
          <p className='info-desc'>Northcoders is creating an online marketplace where we can find new homes for all of the unused items we have lying around, rather than letting them go to waste or just throwing them out.
          </p>
        </div>
    </div>
  );
}

export default Home;
