import { useState } from 'react';
import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Form/Form';

const App = () => {
  const [{ step, frameSize, itemWidth, animationDuration }, setCarouselParam] =
    useState({
      step: 3,
      frameSize: 3,
      itemWidth: 130,
      animationDuration: 1000,
    });

  const [infinite, setInfinite] = useState(false);
  const handleFromChange = (newValues: {
    step?: number;
    frameSize?: number;
    itemWidth?: number;
    animationDuration?: number;
    infinite?: boolean;
  }) => {
    setCarouselParam(prevValue => ({
      ...prevValue,
      ...newValues,
    }));

    if (newValues.hasOwnProperty('infinite')) {
      setInfinite(newValues.infinite!);
    }
  };

  const images = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/7.png',
    './img/8.png',
    './img/9.png',
    './img/10.png',
  ];

  return (
    <div className="App">
      {/* eslint-disable-next-line */}
      <h1 data-cy="title">Carousel with {images.length} images</h1>

      <Carousel
        images={images}
        step={step}
        frameSize={frameSize}
        itemWidth={itemWidth}
        animationDuration={animationDuration}
        infinite={infinite}
      />

      <Form
        onChange={handleFromChange}
        step={step}
        frameSize={frameSize}
        itemWidth={itemWidth}
        animationDuration={animationDuration}
        infinite={infinite}
      />
    </div>
  );
};

export default App;
