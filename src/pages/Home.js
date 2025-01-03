import React, { useEffect } from 'react';
import { Hero, HeroShop } from '../components/Hero';

const Home = ({ me }) => {
  // console.log('me', me);

  return (
    // <div className='w-full h-full px-10 sm:px-20 md:px-40'>
    <div className='w-full h-full flex flex-col'>
      <Hero me={me} />
      <HeroShop />
    </div>
  );
};

export default Home;
