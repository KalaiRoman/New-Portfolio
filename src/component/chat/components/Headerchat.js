import React,{useEffect, useState} from 'react'
import '../styles/chat.scss';
import { getUserAdminData, getUserData } from '../../../services/auth_services/auth_services';
import moment from 'moment';
import hi from '../../../assests/images/hi.png';
function Headerchat({setUserIdMai,userimageadmin}) {
  const token=localStorage.getItem("port-token");
    const [user,setUser]=useState([]);
    useEffect(()=>{

        if(token)
            {
                

                getUserAdminData().then((res)=>{
                    setUser(res?.data?.adminuser[0]);
                    userimageadmin(res?.data?.adminuser[0]?.avatar)
                }).catch((err)=>{
                    console.log(err);
                })
            }

    },[token])
  return (
    <div>

        {user?.avatar?<>
        
        
            <div className='d-flex gap-3 align-items-center'>
       <div>
           <img src={user?.avatar} alt="no image"  className='avatar-image'/>
        </div>
        <div >
            <div className='user-name-texts'>
            {user?.username}
            </div>
            <div>
            <div className='date-texts'>
        {moment(user?.createdAt).format("MMM Do YY")}
        </div>
            </div>
        </div>
       
       </div>
        </>:<div>
        <div className='d-flex gap-3 align-items-center'>
       <div>
           <img src={hi} alt="no image"  className='avatar-image'/>
        </div>
        <div >
            <div className='user-name-texts'>
            {user?.username}
            </div>
            <div>
            <div className='date-texts'>
                Hi Can You Please Login And then Chat!.
        </div>
            </div>
        </div>
       
       </div>
        
            </div>}
       
    </div>
  )
}

export default Headerchat