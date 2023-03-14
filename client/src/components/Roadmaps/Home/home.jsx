import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
const Roadmaps = () => {
  const navigate = useNavigate();
  function FrontRoadMap() {
    navigate('/roadmap?server');
  }

  function BackendRoadMap() {
    navigate('/roadmap?backend');
  }
  function AndroidRoadMap() {
    navigate('/roadmap?android');
  }

  function IosRoadMap() {
    navigate('/roadmap?ios');
  }

  function DevopsRoadMap() {
    navigate('/roadmap?devops');
  }
  function JavaGame() {
    navigate('/roadmap?java');
  }

  return (
    <div className='px-4 max-w-6xl text-center mx-auto' id='roadmaps'>
      <section className='w-full'>
        <div className=''></div>
      </section>

      <div className='row '>
        <h1>Road maps </h1>
        <div className='container' id='RoadMapDiv'>
          <button
            className='w-90 text-white !border-2 border-black bg-purple-500     mx-2 my-2'
            id='btnRoad'
            onClick={JavaGame}
          >
            {' '}
            Java Game Programming{' '}
          </button>
          <button
            className='w-90 text-white !border-2 border-black bg-purple-500   mx-2 my-2'
            id='btnRoad'
            onClick={FrontRoadMap}
          >
            {/* Front-end Development */}
            Server Management
          </button>
          <button
            className='w-90 text-white !border-2 border-black bg-purple-500   mx-2 my-2'
            id='btnRoad'
            onClick={BackendRoadMap}
          >
            Back-end Development{' '}
          </button>
          <button
            className='w-90 text-white !border-2 border-black bg-purple-500   mx-2 my-2'
            id='btnRoad'
            onClick={AndroidRoadMap}
          >
            Android Development
          </button>
          <button
            className='w-90 text-white !border-2 border-black bg-purple-500    mx-2 my-2'
            id='btnRoad'
            onClick={IosRoadMap}
          >
            {' '}
            Ios Development{' '}
          </button>
          <button
            className='w-90  text-white !border-2 border-black bg-purple-500   mx-2 my-2'
            id='btnRoad'
            onClick={DevopsRoadMap}
          >
            {' '}
            DevOps{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
