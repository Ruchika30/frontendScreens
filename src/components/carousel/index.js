import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { banner } from '../../assets/icons'


const CarouselComponent =() =>{
    return (
        <Carousel 
            showThumbs={false} 
            stopOnHover={true}
            dynamicHeight={true}>
            <div>
                 <img src={banner} />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                    <img src={banner} />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                    <img src={banner} />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );


}
       

export default CarouselComponent
