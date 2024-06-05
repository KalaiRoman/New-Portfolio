import React, { useEffect, useState } from 'react'
import './styles/Projects.scss';
import CommonHeader from './../../CommonHeader/CommonHeader';
import Slider from "react-slick";
import { ProjectDatas } from '../../commoncontent/ProjectData';
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import AOS from 'aos';

function Projects({colorName}) {
    useEffect(() => {
        AOS.init();
    }, [])
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
                    slidesToShow: 2,
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

    const NavigatePath = (data) => {
        window.open(data);
    }


    const tabs=["Ractjs","Nextjs","Nodejs","ReacNative"]
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
                    <CommonHeader title={"Projects"} colorName={colorName}/>
                </div>
                <div className='container'>


{/* <div className='tab-section-projects'>
    {tabs?.map((item,index)=>{
        return(
            <div className='tab-box'>
                {item}
            </div>
        )
    })}
</div> */}
                    <div className='main-slider-section'>
                    {ProjectDatas?.map((item) => {
                                return (
                                    <div className='cards mt-2 mb-4' >
                                        <div className='project-title'>
                                            {item?.name}
                                        </div>
                                        <div className='text-center mb-1 mt-4 desc' >
                                            {item?.des}
                                        </div>
                                        {/* <div className='mt-2' >
                                            <button className='button-project' onClick={() => NavigatePath(item?.url)}>
                                                {item?.button}
                                            </button>
                                        </div> */}
                                        <div className="card-emty-box">

                                        </div>
                                        <div className="card-emty-box1">

                                        </div>
                                    </div>
                                )
                            })}
                        {/* </Slider>  */}
                        {/* <Slider {...settings}>
                            {ProjectDatas?.map((item) => {
                                return (
                                    <div className='cards mt-2 mb-4' data-aos="fade-left"
                                        data-aos-duration="3000">
                                        <div className='project-title' data-aos="fade-up"
                                            data-aos-duration="3000">
                                            {item?.name}
                                        </div>
                                        <div className='text-center mb-5 mt-2 desc' data-aos="fade-right"
                                            data-aos-duration="3000">
                                            {item?.des}
                                        </div>
                                        <div className='mt-4' data-aos="fade-down"
                                            data-aos-duration="3000">
                                            <button className='button-project' onClick={() => NavigatePath(item?.url)}>
                                                {item?.button}
                                            </button>
                                        </div>
                                        <div className="card-emty-box">

                                        </div>
                                        <div className="card-emty-box1">

                                        </div>
                                    </div>
                                )
                            })}
                        </Slider> */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects