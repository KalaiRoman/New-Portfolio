import React,{useEffect, useState} from 'react'
import '../styles/chat.scss';
import { getUserAdminData } from '../../../services/auth_services/auth_services';

function Sidebarchat({setUserImageadmin}) {
    const token=localStorage.getItem("port-token");
    const [user,setUser]=useState([]);
    useEffect(()=>{
        if(token)
            {
                getUserAdminData().then((res)=>{
                    setUser(res?.data?.adminuser[0]);
                    setUserImageadmin(res?.data?.adminuser[0]?.avatar)
                }).catch((err)=>{
                    console.log(err);
                })
            }

    },[token])
  return (
    <div className='sidebar-card'>
<div>
<img src={user?.avatar} alt="no image"  className='avatar-images'/>
</div>
<div>
<div className='user-name-texts'>
            {user?.username}
            </div>
            <div>
            <div className='date-texts'>
        May 26th 24
</div>
</div>
</div>

    </div>
  )
}

export default Sidebarchat