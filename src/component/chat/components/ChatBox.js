import React,{useEffect, useState,useRef} from 'react'
import '../styles/chat.scss';
import { getUserData } from '../../../services/auth_services/auth_services';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/en.json';
import chat from '../../../assests/images/chat.webp';
TimeAgo.addDefaultLocale(en);
function ChatBox({messagesref,user,userimage,userimageadmin}) {

    // const token=localStorage.getItem("port-token");
    // const [user,setUser]=useState([]);
    // useEffect(()=>{
    //     if(token)
    //         {
    //             getUserData().then((res)=>{
    //                 setUser(res?.data?.user);
    //             }).catch((err)=>{
    //                 console.log(err);
    //             })
    //         }
    // },[token])
  return (
    <div className='main-chat-box-bodys'>

        {user?.length===0?<div className='main-chat-box-bodyss'>
    
            <img src={chat} alt="no image"  className='chat-image'/>
        </div>:<></>}
{user?.map((item,index)=>{
    return(
        <div className={`${item?.type==="sender"?"sender-message":"receiver-message"}`}>
           <div  className={`${item?.type==="sender"?"sender-messagess":"receiver-messages"}`}>
           {item?.message} <div><img src={item?.type=="sender"?userimage:userimageadmin} alt="no image" className={item?.type==="sender"?'avatar-image-chat':"avatar-image-chats"}/></div>
            <div className='time-text'>
                                <small>
                                    <ReactTimeAgo date={new Date(item?.createdAt)} locale='en-US' />
                                </small>
                            </div>
           </div>
        </div>

    )
})}
       <div ref={messagesref}></div>
    </div>
  )
}

export default ChatBox