import React,{useEffect, useState} from 'react'
import '../styles/chat.scss';
import { getUserData } from '../../../services/auth_services/auth_services';
import moment from 'moment';
function Headerchat({setUserIdMain}) {
  const token=localStorage.getItem("port-token");
    const [user,setUser]=useState([]);
    useEffect(()=>{

        if(token)
            {
                getUserData().then((res)=>{
                    setUser(res?.data?.user);
                    setUserIdMain(res?.data?.user?._id)
                }).catch((err)=>{
                    console.log(err);
                })
            }

    },[token])
  return (
    <div>
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
    </div>
  )
}

export default Headerchat