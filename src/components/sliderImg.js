import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.min.css';
import { Image } from 'antd';
const SliderImg = ({ arrImage }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        fade: true,
        // customPaging: (i) => <button  style={{ width: '20px', height: '20px' }}></button>
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    arrImage.map((image, index) => {
                        return (
                            <img key={index} src={image} className='w-screen' />
                            // <Image key={index} src={image} preview={false} width="3000px"></Image>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default SliderImg;