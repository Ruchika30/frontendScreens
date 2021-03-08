import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { careerLibrary } from '../../assets/icons';

const CarouselComponent = () => (
  <Carousel
    autoPlay={false}
    showThumbs={false}
    interval={1500}
    infiniteLoop
    stopOnHover
    dynamicHeight={false}
  >
    <div>
      <img src={careerLibrary} alt="banner" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    {/* <div>
      <img src={careerLibrary} alt="banner" />
    </div>
    <div>
      <img src={careerLibrary} alt="banner" />
    </div> */}
  </Carousel>
);

export default CarouselComponent;
