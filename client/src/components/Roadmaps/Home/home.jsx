import React, { useEffect, useMemo } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './home.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Roadmaps = () => {
  const blockVariants = useMemo(
    () => ({
      show: { y: 10, opacity: 1, transition: { duration: 1 } },
      hidden: { y: 0, opacity: 0, transition: { duration: 1 } },
    }),
    []
  );
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);
  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }),
    []
  );

  const navigate = useNavigate();
  let [t, i18n] = useTranslation();
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


      <div className='row'>
        {/* <h1>{t("Road maps")} </h1>
        <div className='container' id='RoadMapDiv'>
          <button
            className='w-90     mx-2 my-2'
          /> */}
        <div className='row '>
            {/* <h1>Roadmaps </h1> */}
            <h1>{t("Road maps")} </h1>
            <motion.div
              ref={ref}
              animate={controls}
              variants={container}
              initial='hidden'
              className='container'
              id='RoadMapDiv'
            >
              <motion.button
                variants={blockVariants}
                className='w-90 text-white !border-2 border-black bg-purple-500     mx-2 my-2'

                id='btnRoad'
                onClick={JavaGame}
              >
                {' '}
                Java Game Programming{' '}
              </motion.button>
              <motion.button
                variants={blockVariants}
                className='w-90 text-white !border-2 border-black bg-purple-500   mx-2 my-2'
                id='btnRoad'
                onClick={FrontRoadMap}
              >
                {/* Front-end Development */}
                Server Management
              </motion.button>
              <motion.button
                variants={blockVariants}
                className='w-90 text-white !border-2 border-black bg-purple-500   mx-2 my-2'
                id='btnRoad'
                onClick={BackendRoadMap}
              >
                Back-end Development{' '}
              </motion.button>
              <motion.button
                variants={blockVariants}
                className='w-90 text-white !border-2 border-black bg-purple-500   mx-2 my-2'
                id='btnRoad'
                onClick={AndroidRoadMap}
              >
                Android Development
              </motion.button>
              <motion.button
                variants={blockVariants}
                className='w-90 text-white !border-2 border-black bg-purple-500    mx-2 my-2'
                id='btnRoad'
                onClick={IosRoadMap}
              >
                {' '}
                Ios Development{' '}
              </motion.button>
              <motion.button
                variants={blockVariants}
                className='w-90  text-white !border-2 border-black bg-purple-500   mx-2 my-2'
                id='btnRoad'
                onClick={DevopsRoadMap}
              >
                {' '}
                DevOps{' '}
              </motion.button>
            </motion.div>
          </div>

        
        </div>
        </div>
     
      );
}

      export default Roadmaps;
