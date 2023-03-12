import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../header/header';

const Roadmap = () => {
  const [roadmaps] = useState({
    backend: 'assets/Roadmap2-Backend.png',
    android: 'assets/androidd.png',
    ios: 'assets/ios.png',
    devops: 'assets/Devops.png',
    java: 'assets/JavaGame.png',
    server: 'assets/serverss.png',
  });
  const params = useLocation();
  useEffect(() => console.log(params.search.substring(1)), [params]);

  return (
    <div className='contanier'>
      <Header />
      <div id='imageDiv' className='contanier col-10 mx-auto'>
        <img className='' src={roadmaps[params.search.substring(1)]} alt='' />
      </div>
    </div>
  );
};

export default Roadmap;
