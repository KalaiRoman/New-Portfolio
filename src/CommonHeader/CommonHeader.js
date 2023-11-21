import React from 'react'
import './Commonheader.scss';
function CommonHeader({ title, colorName }) {

    return (
        <div className='common-title' >
            <div className='first-letter animate__animated animate__bounce animate__delay-3s animate__slower 3s animate__infinite'>{title?.slice(0, 1)}</div>{title?.slice(1, 100)}
        </div>
    )
}

export default CommonHeader