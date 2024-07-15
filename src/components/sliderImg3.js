import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.min.css';
import { Image } from 'antd';
const SliderImg3 = ({arrImage3}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:800,
        ltr: true,
        arrows:false
 
  };
    
    return (
        <div>
            <Slider {...settings}>
            {
                arrImage3.map((image,index)=>{
                    return (
                        <Image key={index} src={image} preview={false}  ></Image>
                    )
                })
            }
            </Slider>
        </div>
    );
};

export default SliderImg3;