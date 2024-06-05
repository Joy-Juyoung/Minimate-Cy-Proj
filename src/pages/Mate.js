import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FindNewMate,
  MateList,
  MateSideBar,
  MyRequests,
} from '../components/Mate';

const TabButton = ({ isActive, onClick, children }) => (
  <button
    className={`mateButton w-full border border-black px-4 py-2 mb-6 
    rounded-lg transition-colors duration-300
              ${
                isActive
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100 text-black'
              }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Mate = ({ me }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('findNewMate');
  const requests = useSelector((state) => state.friend.request);
  const { user, users } = useSelector((state) => state.user);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'findNewMate':
        return (
          <FindNewMate me={me} requests={requests} users={users} user={user} />
        );
      case 'mateList':
        return (
          <MateList me={me} requests={requests} users={users} user={user} />
        );
      case 'myRequests':
        return <MyRequests me={me} requests={requests} />;
      default:
        return null;
    }
  };

  return (
    <div className='mateContainer pb-28 sm:pb-12 pt-12 px-10 sm:px-20 md:px-40'>
      <h1 className='text-3xl text-center font-semibold mb-6'>My Mate</h1>
      <div className='w-full flex justify-between gap-2 text-[0.8rem]'>
        <TabButton
          isActive={activeTab === 'findNewMate'}
          onClick={() => setActiveTab('findNewMate')}
        >
          Find New Mate
        </TabButton>
        <TabButton
          isActive={activeTab === 'mateList'}
          onClick={() => setActiveTab('mateList')}
        >
          Mate List
        </TabButton>
        <TabButton
          isActive={activeTab === 'myRequests'}
          onClick={() => setActiveTab('myRequests')}
        >
          My Requests
        </TabButton>
      </div>
      <div className='rounded-lg h-[60vh] py-4 px-2 shadow-lg overflow-y-auto'>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Mate;