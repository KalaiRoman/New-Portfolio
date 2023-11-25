import React from 'react'
import './WorkingTools.scss';
import CommonHeader from './../../CommonHeader/CommonHeader';
import { ToolOffer, Tools } from '../../commoncontent/WorkingTools';
function WorkingTools() {
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
                    <CommonHeader title={"Working Tools"} />
                </div>
                <div className='mt-5 row tool-row-section gap-4'>
                    {Tools?.map((item,) => {
                        return (
                            <div className='box-tootles'>
                                <img src={item?.image} alt={"no image"} className='tool-img' />
                            </div>
                        )
                    })}
                </div>
                <div className='mt-3'>
                    <CommonHeader title={"What I Offer"} />
                </div>
                <div className='row offer-card-tools mt-3'>
                    {ToolOffer?.map((item, index) => {
                        return (
                            <div className='offer-card'>

                                <div className='icon-tool'>
                                    {item?.image}
                                </div>
                                <div className='tool-text mt-3'>
                                    {item?.name}
                                </div>
                                <div className='mt-3 des'>
                                    {item?.dec}
                                </div>
                                <div className='boxes'>

                                </div>
                                <div className='boxes1'>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkingTools