import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { tmpBanner } from '../../assets/icons';

const CarouselComponent = () => (
  <Carousel
    autoPlay
    showThumbs={false}
    interval={1500}
    infiniteLoop
    stopOnHover
    dynamicHeight={false}
  >
    <div>
      <img src={tmpBanner} alt="banner" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img src={tmpBanner} alt="banner" />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
      <img src={tmpBanner} alt="banner" />
      {/* <p className="legend">Legend 3</p> */}
    </div>
  </Carousel>
);

export default CarouselComponent;
