import React from 'react';
import HeroSlider, { Slide, NextArrow, PreviousArrow } from 'hero-slider';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg'
import img3 from './img/3.jpg';
import img4 from './img/4.jpg'

//const img5 = 'img/5.jpg';

const App = () => {
  return (
      <div className='container'>
          
      </div>
  );
};

export default App;
/*
 <HeroSlider
      className='slider'
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>console.log('onBeforeChange', previousSlide, nextSlide)}
      onChange={nextSlide => console.log('onChange', nextSlide)}
      onAfterChange={nextSlide => console.log('onAfterChange', nextSlide)}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.33)'}}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '100vh',
      }}
    > 

  

    </HeroSlider>
    */