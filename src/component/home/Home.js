import React from 'react'
import './styles/Home.scss';
import background from '../../assests/images/backgroundimage.png'
import Aboutus from '../aboutus/Aboutus';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';

import person1 from '../../assests/images/person1.png';
import person2 from '../../assests/images/person2.png';
import person3 from '../../assests/images/person3.png';



function Home() {


    const datas = [
        {
            id: 1,
            image: person1
        },
        {
            id: 1,
            image: person2
        },
        {
            id: 1,
            image: person3
        }
    ]

    return (
        <>
            <div className='main-home-section' id="Home">
                <div className='inside-section'>
                    <div className='home-left'>
                        left
                    </div>
                    <div className='home-right'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}

                            className='main-swiper-box'
                        >


                            {datas?.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <div className='swipper-box-cards'>
                                            <img src={item?.image} alt="no image" className='person-images' />
                                            <div className='empty-boxes'>

                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )
                            })}
                        </Swiper>

                        <div className='first-box'>
                            kalai
                        </div>
                        <div className='second-box'>
                            kalai
                        </div>
                        <div className='third-box'>
                            kalai
                        </div>
                    </div>
                </div>
            </div>
            <Aboutus />
        </>

    )
}

export default Home