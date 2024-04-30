// Hero 컴포넌트
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Minnime from '../../assets/minimi2.png';
import Buttons from '../Buttons';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  const navagate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const openPopup = () => {
    const popupUrl = 'https://minimate-cy.netlify.app/minihome';
    const popupFeatures = 'width=1100,height=600';

    window.open(popupUrl, '_blank', popupFeatures);
  };

  const miniInfo = [
    { name: 'Today visitors', qty: '7' },
    { name: 'New posts', qty: '2' },
    { name: 'New Requests', qty: '0' },
  ];

  return (
    <div className='relative'>
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          background: 'linear-gradient(to left bottom, #f5f5f5, #f5f5f5)',
          clipPath: 'polygon(0% 100%, 0% 100%, 100% 85%, 100% 100%)',
          // clipPath: 'polygon(0% 100%, 0% 100%, 50% 85%, 100% 100%)',
        }}
      ></div>
      <div
        className='relative w-full flex flex-col items-center justify-center pt-10 pb-40 px-10 2xl:px-40'
        style={{ height: !user ? '70vh' : '80vh', zIndex: 1 }}
      >
        <div className='w-full flex flex-col items-center '>
          <div className='font-acme font-bold text-3xl md:text-5xl sm:text-4xl md:mb-2 '>
            Create your own Mini Home
          </div>

          <div className='w-1/2 text-center text-sm md:text-md mt-2 md:mt-3 hidden sm:flex'>
            Discover your perfect match, and personalize your own mini room
            haven with a unique name and a brand-new skin!
          </div>
        </div>

        {!user ? (
          <div className='w-full flex items-center justify-center my-8'>
            <Buttons
              onClick={() => navagate('/register')}
              title='GET START'
              iconRight={<FaArrowRight />}
              iconStyles='text-xl font-semibold '
              containerStyles='flex items-center gap-2 p-3 md:p-4 text-md  border border-2 font-semibold  
            rounded-xl bg-hightColor border-hightColor text-white shadow-md hover:bg-white hover:text-hightColor'
            />
          </div>
        ) : (
          <>
            <div className='w-full flex items-center justify-center my-8'>
              <Buttons
                onClick={openPopup}
                title='Go to Minihome'
                iconLeft={<AiOutlineHome />}
                iconStyles='text-xl font-semibold '
                containerStyles='flex items-center gap-2 p-3 md:p-4 text-md  border border-2 font-semibold  
              rounded-xl bg-hightColor border-hightColor text-white shadow-md hover:bg-white hover:text-hightColor'
              />
            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center '>
              <div className='flex items-center justify-center '>
                <img
                  src={Minnime}
                  alt='Minime'
                  className='w-[80%] sm:w-[7rem] md:w-[9rem] drop-shadow-xl'
                />
              </div>
              <div className='flex w-1/2 sm:w-1/3 md:w-1/4 flex-col justify-between text-sm mt-10 md:mt-0 mb-10 md:mb-0 bg-white py-6 px-4 rounded-2xl'>
                {miniInfo?.map((info, index) => {
                  return (
                    <div key={index} className='flex justify-between my-1'>
                      <div className=''>{info.name}</div>
                      <div className='font-semibold'>{info.qty}</div>
                    </div>
                  );
                })}
                <div className='flex justify-between mt-6'>
                  <div>My cheese</div>
                  <div className='font-semibold'>🧀180</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
