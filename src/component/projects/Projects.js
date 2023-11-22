import React from 'react'
import './styles/Projects.scss';
import CommonHeader from './../../CommonHeader/CommonHeader';
import Slider from "react-slick";
import { ProjectDatas } from '../../commoncontent/ProjectData';
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className='projects-main-section'>
            <div className='inside-project-section'>

                <div className='empty-circle1'>

                </div>

                <div className='empty-circle4'>

                </div>

                <div className='empty-circle2'>

                </div>
                <div className='empty-circle3'>

                </div>
                <div>
                    <CommonHeader title={"Projects"} />
                </div>
                <div className='container'>

                    <div className='main-slider-section'>
                        <Slider {...settings}>
                            {ProjectDatas?.map((item, index) => {
                                return (
                                    <div className='card'>
                                        <div>
                                            {item?.name}
                                        </div>
                                        <div>
                                            {item?.des}
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects