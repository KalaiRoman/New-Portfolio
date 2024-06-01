import React, { useEffect, useState } from 'react'
import './WorkingTools.scss';
import CommonHeader from './../../CommonHeader/CommonHeader';
import { ToolOffer, Tools } from '../../commoncontent/WorkingTools';
import AOS from 'aos';

function WorkingTools({ colorName }) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='main-tool-section'>
            <div className='inside-tool-section'>

                <div className='firstbox'>

                </div>
                <div className='secondbox'>

                </div>
                <div className='thirdbox'>

                </div>
                <div className='fourthbox'>

                </div>
                <div className='fifthbox'>

                </div>
                <div>
                    <CommonHeader title={"Working Tools"} colorName={colorName} />
                </div>
                <div className='mt-5  tool-row-section'>
                    {Tools?.map((item) => {
                        return (
                            <div className='box-tootles mb-3 mt-2' >
                                <div>
                                    <img src={item?.image} alt={"no image"} className='tool-img' />

                                </div>
                                <div className='tool-name'>
                                    {item?.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <div className='mt-3'>
                    <CommonHeader title={"What I Offer"} colorName={colorName} />
                </div> */}
                {/* <div className='row offer-card-tools mt-3'>
                    {ToolOffer?.map((item,) => {
                        return (
                            <div className='offer-card' data-aos="fade-up"
                                data-aos-duration="3000">
                                <div className='icon-tool' data-aos="fade-down"
                                    data-aos-duration="3000">
                                    {item?.image}
                                </div>
                                <div className='tool-text mt-3' data-aos="fade-left"
                                    data-aos-duration="3000">
                                    {item?.name}
                                </div>
                                <div className='mt-3 des' data-aos="fade-right"
                                    data-aos-duration="3000">
                                    {item?.dec}
                                </div>
                                <div className='boxes'>
                                </div>
                                <div className='boxes1'>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
}

export default WorkingTools