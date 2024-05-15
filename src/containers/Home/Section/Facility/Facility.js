import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import specialtyImg from '../../../../assets/gan-mat.png';

function Facility() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        // arrows: false,
    };
    return (
        <div className="section-specialty">
            <div className="specialty-content">
                <div className="specialty-body">
                    <Slider {...settings}>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ sở y tế 1</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ sở y tế 2</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ sở y tế 3</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ sở y tế 4</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ sở y tế 5</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ sở y tế 6</div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Facility;
