import React, { useEffect} from 'react'
import './styles/Projects.scss';
import CommonHeader from './../../CommonHeader/CommonHeader';
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


         <div className='main-slider-section'>
                    {ProjectDatas?.map((item,index) => {
                                return (
                                    // <div className='cards mt-2 mb-4' key={index} >
                                    //     <div className='project-title'>
                                    //         {item?.name}
                                    //     </div>
                                    //     <div className='text-center mb-1 mt-4 desc' >
                                    //         {item?.des}
                                    //     </div>
                                       
                                    //     <div className="card-emty-box">

                                    //     </div>
                                    //     <div className="card-emty-box1">

                                    //     </div>
                                    // </div>
                                    <div  className="box-wrapper" key={index}>
  <figure className="shape-box shape-box_half">
    <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt />
    <div className="brk-abs-overlay z-index-0 bg-black opacity-60" />
    <figcaption>
      <div className="show-cont">
        <h3 className="card-no">{index<9?<>0{index+1}</>:<>{index+1}</>}</h3>
        <h4 className="card-main-title">{item?.name}</h4>
      </div>
      <p className="card-content"> {item?.des}</p>
      {/* <a href="#" className="read-more-btn">Read More</a> */}
    </figcaption>
    <span className="after" />
  </figure>
</div>

                                )
                            })}
                      
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects