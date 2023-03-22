import React from 'react';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../partials/Footer';
import Roadmaps from '../Roadmaps/Home/home';


const Home = () => {
 
  return (
    
    <div className='flex flex-col min-h-screen overflow-hidden'>
       
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className='grow'>
        {/*  Page illustration */}
        <motion.div
          key={'logo'}
          className='relative max-w-6xl mx-auto h-0 pointer-events-none'
          aria-hidden='true'
          initial={{
            right: -100,
            opacity: 0,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          animate={{
            right: 0,
            opacity: 1,
          }}
        >
          <PageIllustration />
        </motion.div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Roadmaps />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Home;
