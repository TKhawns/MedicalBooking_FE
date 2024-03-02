import React from 'react';
import './Section.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import specialtyImg from '../../../assets/gan-mat.png';

function Specialty() {
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
                <div className="specialty-header">
                    <span className="popular">Chuyên khoa phổ biến</span>
                    <button className="more-button">Xem thêm</button>
                </div>
                <div className="specialty-body">
                    <Slider {...settings}>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ xương khớp 1</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ xương khớp 2</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ xương khớp 3</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ xương khớp 4</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ xương khớp 5</div>
                        </div>
                        <div className="img-custom">
                            <img className="slide1" src={specialtyImg} alt="" />
                            <div className="slide-title">Cơ xương khớp 6</div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Specialty;
