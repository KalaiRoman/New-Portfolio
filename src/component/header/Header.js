import React, { useEffect } from 'react'
import './styles/Header.scss';
import { useDispatch, useSelector } from 'react-redux';
function Header({ loader }) {

    const dispatch = useDispatch();
    const state = useSelector((state) => state?.colors?.ColorName)


    useEffect(() => {
        localStorage.setItem("loader", loader)
    }, [])


    const iconsData = [
        {
            id: 1,
            name: "Home",
            icon: <i class="fa-solid fa-house"></i>

        },
        {
            id: 2,
            name: "About",
            icon: <i class="fa-solid fa-user"></i>

        },
        {
            id: 3,
            name: "Education",
            icon: <i class="fa-solid fa-user-graduate"></i>

        },
        {
            id: 4,
            name: "Skill",
            icon: <i class="fa-solid fa-award"></i>

        },
        {
            id: 5,
            name: "Project",
            icon: <i class="fa-solid fa-phone-volume"></i>

        },
        {
            id: 6,
            name: "Contact",
            icon: <i class="fa-solid fa-phone-volume"></i>

        }
    ]
    return (
        <div style={{ color: state }} className='main-header-sections'>
            <div className='inside-header-section'>
                {/* <nav>
                    <ul>
                        <li>
                            Download CV
                            <span></span><span></span><span></span><span></span>
                        </li>

                    </ul>
                </nav> */}
                <div className='main-card-header'>
                    {iconsData?.map((item, index) => {
                        return (
                            <div className='inside-header-boxes'>
                                <div>
                                    {item?.icon}
                                </div>
                                <div>
                                    {item?.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header


