import React, { useState, useEffect } from 'react'
import './styles/Aboutus.scss';
import aboutimg from '../../assests/images/about-img.png';
import CommonHeader from '../../CommonHeader/CommonHeader';
import { PersonalContent, Qualifications, Skills, TabContent } from '../../commoncontent/AboutusData';
import educationdetails from '../../assests/images/education.png';

import AOS from 'aos';


function Aboutus({ colorName }) {


    useEffect(() => {
        AOS.init();
    }, [])


    const [selectName, setSelectName] = useState("Personal Info");

    const handleAboutusTab = (data) => {
        setSelectName(data)
    }
    return (
        <>
            <div className='aboutus' id="AboutUs">

                {/* <div>
                    <img src={backgroudimage} alt="no image" className='background-image' />
                </div>
                <div>
                    <img src={backgroudimage} alt="no image" className='background-image1' />
                </div> */}

                <div className='empty-circle1'>

                </div>

                <div className='empty-circle4'>

                </div>

                <div className='empty-circle2'>

                </div>

                <div className='empty-circle3'>

                </div>
                <div className='rose-box animate__animated animate__heartBeat animate__infinite animate__delay-3s 3s infinite animate__slower 2s'>

                </div>

                <div className='color-box'>

                </div>

                <CommonHeader title={"About Me"} colorName={colorName} />

                <div className='aboutus-inside-section'>

                    <div className='aboutus-left'>
                        <img src={aboutimg} alt="no image" className='img-about' />
                    </div>
                    <div className='aboutus-right'>
                        <div className='aboutus-right-inside'>
                            <div className='aboutus-tab-section'>
                                {TabContent?.map((item, index) => {
                                    return (
                                        <div key={index} className={item?.name === selectName ? "activeTab" : "inactiveTab"} onClick={() => handleAboutusTab(item?.name)}>
                                            {item?.name}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='mt-4 inside-about-section-lefts'>
                                {selectName == "Personal Info" && <div>
                                    <div className='decsription'  >
                                        {PersonalContent?.desc}
                                    </div>
                                    <div className='mainabout-skill mt-4'>
                                        <div className='main-left' >
                                            <div>
                                                <i class="fa-regular fa-user left-icons"></i>
                                            </div>
                                            <div className='main-about-texts'  >
                                                {PersonalContent?.name}
                                            </div>
                                        </div>
                                        <div className='main-right' >
                                            <div>
                                                <i class="fa-solid fa-phone-volume left-icons"></i>
                                            </div>
                                            <div className='main-about-texts'   >
                                                {PersonalContent?.phoneno}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mainabout-skill mt-4' >
                                        <div className='main-left'>
                                            <div>
                                                <i class="fa-regular fa-envelope left-icons "></i>
                                            </div>
                                            <div className='main-about-texts'   >
                                                {PersonalContent?.emailid}
                                            </div>
                                        </div>
                                        <div className='main-right' >
                                            <div>
                                                <i class="fa-regular fa-calendar left-icons"></i>
                                            </div>
                                            <div className='main-about-texts' >
                                                {PersonalContent?.dob}
                                            </div>
                                        </div>
                                    </div>


                                    <div className='mainabout-skill mt-4' >
                                        <div className='main-left'>
                                            <div>
                                                <i class="fa-solid fa-user-graduate  left-icons"></i>
                                            </div>
                                            <div className='main-about-texts'   >
                                                {PersonalContent?.deggre}
                                            </div>
                                        </div>
                                        <div className='main-right'>
                                            <div>
                                                <i class="fa-solid fa-location-dot left-icons"></i>
                                            </div>
                                            <div className='main-about-texts' >
                                                {PersonalContent?.address}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div className='language-names'>
                                            Resume :
                                        </div>
                                        <div onClick={() => window.open('https://kalairesume.netlify.app/')} className='mt-3 mb-3 resume-texts'>
                                            <div>
                                                <i class="fa-solid fa-file"></i>
                                            </div>
                                            <div className='text-dashed'>
                                                https://kalairesume.netlify.app/
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2' >
                                        <div className='language-names'>
                                            {PersonalContent?.languageName} :
                                        </div>
                                        <div className='row main-languauges'>
                                            {PersonalContent?.languages?.map((item, index) => {
                                                return (
                                                    <div key={index} className='language-texts'

                                                    >
                                                        {item?.name}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>}
                                {selectName == "Qualifications" && <div>
                                    <div className='bolt-awesome mb-4 mt-2'
                                      >
                                        {PersonalContent?.MyAwesomeJourney}
                                    </div>
                                    <div className='qualification-section '>
                                        {Qualifications?.map((item, index) => {
                                            return (
                                                <div className='qulification-box mb-3 mt-3' key={index}>
                                                    <div className='box' >
                                                <img src={educationdetails} alt="no image" className='education'/>

                                                    </div>
                                                    <div className='list-educations'>
                                                        <div className='matername' >
                                                            {item?.name}
                                                        </div>
                                                      
                                                        <div className='clgname mt-2 mb-2' >
                                                            {item?.clgName}
                                                        </div>
                                                        <div className='clgnames d-flex gap-2'>
                                                            <span>{item?.calicon}</span>  {item?.year}
                                                        </div>
                                                        <div className='clgname mt-2 mb-2' >
                                                            {item?.place}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>}
                                {selectName == "Skills" && <div>
                                    <div className='bolt-awesome mb-4 mt-2'>
                                        {PersonalContent?.tools}
                                    </div>
                                    <div className='row gap-3 skill-main-box'>
                                        {Skills?.map((item, index) => {
                                            return (
                                                <div className='skill-box mb-3 mt-2' key={index}>
                                                    {item?.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>}
                            </div>

                            {/* <div className='mt-4'>
                                {selectName == "Personal Info" && <div className='mt-4'>

                                    <div className='about-boxs mt-5'>
                                        <div className='about-box-left'>
                                            <div className='whentext'>
                                                When
                                            </div>
                                            <div className='happy-texts mt-2'>
                                                I HAPPY
                                            </div>
                                            <div className='mt-2 mb-5'>
                                                <img src={happy} alt="no image" className='sadimg' />
                                            </div>
                                        </div>
                                        <div className='about-box-right'>
                                            <div className='whentext'>
                                                When
                                            </div>
                                            <div className='happy-texts mt-2'>
                                                I SAD
                                            </div>
                                            <div className='mt-2 mb-5'>
                                                <img src={sad} alt="no image" className='sadimg' />
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div> */}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Aboutus