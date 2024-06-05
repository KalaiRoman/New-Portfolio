import React, { useEffect, useState } from 'react';
import '../styles/chat.scss';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import chat from '../../../assests/images/chat.webp';
import { chatDeleteUser, chatUpdateLikeUser, chatUpdateStatusUser } from '../../../services/chat_services/chat_services';
import Modal from 'react-bootstrap/Modal';
import { getUserAdminData, getUserData } from '../../../services/auth_services/auth_services';
import { toast } from 'react-toastify';
TimeAgo.addDefaultLocale(en);
function ChatBox({ messagesref, user, userimage, userimageadmin, userMessages, setUserMessages,handleShow1,handleClickCallbackChet }) {
    const [messageId, setMessageId] = useState("");
    const [show, setShow] = useState(false);
    const token = localStorage.getItem('port-token');
    const [adminimage,setAdminImage]=useState("");
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true);
        setMessageId(id);
    };

    const handleDeleteMessage = async () => {
        try {
            const data = {
                messageId: messageId
            };
            const response = await chatDeleteUser(data);
            if (response) {
                const filteredMessages = userMessages.filter((item) => item._id !== messageId);
                setUserMessages(filteredMessages);
                setMessageId("");
                handleClose();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserData();
                if (response) {
                    setUserMessages(response.data.user.chat);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserData();
    }, [user]);


    useEffect(() => {
        if (token) {
          getUserAdminData()
            .then((res) => {
              const adminUser = res?.data?.adminuser[0];
              setAdminImage(adminUser?.avatar);
            })
            .catch((err) => {
            });
        }
      }, [token]);

      const likelists = [
        {
            id: 1,
            name: "👍like",
            image: "👍"

        },
        {
            id: 2,
            name: "❤️heart",
            image: "❤️"

        },
        {
            id: 3,
            name: "🥰love",
            image: "🥰"

        },
        {
            id: 4,
            name: "😆smile",
            image: "😆"

        },
        {
            id: 5,
            name: "😃happy",
            image: "😃"

        }, {
            id: 6,
            name: "🥲sad",
            image: "🥲"

        }
        , {
            id: 7,
            name: "😡angry",
            image: "😡"

        }
    ]

    const handleSubmitLike=async(image,chatmessageid)=>{
        try {

            const datas={
                chatId:chatmessageid,like:image
            }
            const {status,message,data}=await chatUpdateLikeUser(datas);
            if(status)
                {
            toast.success("Updated Like");
                }
        } catch (error) {
            
        }
    }
    const [messageStatus,setMessageStatus]=useState(false);
    useEffect(()=>{
        if(userMessages)
            {
                userMessages?.map((item)=>{
                    if(item?.type==="receiver" && item?.userstatusSaw===false)
                        {
                            setMessageStatus(true);
                        }
                })
            }
    },[userMessages,messageStatus]);

    console.log(userMessages,'userMessages')
    
    const refreshDataUsermessage = async () => {
        try {
            const response = await getUserData();
            if (response) {
                setUserMessages(response.data.user.chat);
            }
            const ids={
                userid:user?._id,type:"receiver"
              }
              chatUpdateStatusUser(ids).then((res)=>{
          
              }).catch((err)=>{
                console.log(err);
              })
        } catch (error) {
            console.log(error);
        }
    };

    console.log(messageStatus,'messageStatus')
    return (
        <div className='main-chat-box-bodys'>

{messageStatus?<>

    <div className='refresh-button' onClick={refreshDataUsermessage}>
            <i class="fa-solid fa-arrows-rotate"></i>
            </div>
</>:null}

          
            {user?.length === 0 ? (
                <div className='main-chat-box-bodyss'>
                    <img src={chat} alt="no image" className='chat-image' />
                    <div>
                        <button className='login-buttons' onClick={handleShow1}>Login</button>
                    </div>
                </div>
            ) : null}
            {userMessages && userMessages.map((item, index) => (
                <div className={`${item?.type === "sender" ? "sender-message" : "receiver-message"}`} key={index}>
                    <div className={`${item?.type === "sender" ? "sender-messagess" : "receiver-messages"}`}>
                        {item?.message}
                        <div>
                            <img src={item?.type === "sender" ? userimage : adminimage} alt="no image" className={item?.type === "sender" ? 'avatar-image-chat' : "avatar-image-chats"} />
                        </div>

                        {item?.type === "sender" || item?.type==="receiver"?<>
                        
                        <div className='like-image-show'>
                        {item?.likeUser}
                        </div>
                        <div className='dotts-list'>
                        {/* <i class="fa-solid fa-angle-down"></i> */}
                        </div>
                        <div className='lists-box'>
                            {likelists?.map((items,index)=>{
                                return(
                                    <div key={index} className='emoji' onClick={()=>handleSubmitLike(items?.image,item?._id)}>
                                        {items?.image}
                                    </div>
                                )
                            })}
                        </div>
                        </>:null}
                        
                        <div className='tick-mark'>
                            {item?.type === "sender" && (
                                <>
                                    {item?.userstatusSaw ? (
                                        <i className="fa-solid fa-check-double activetick"></i>
                                    ) : (
                                        <i className="fa-solid fa-check-double inactivetick"></i>
                                    )}
                                </>
                            )}
                        </div>
                        
                        <div className='delete-bar' onClick={() => handleShow(item?._id)}>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                        <div className='arrow-bar'></div>
                        <div className='time-text'>
                            <small>
                                <ReactTimeAgo date={new Date(item?.createdAt)} locale='en-US' />
                            </small>
                        </div>
                    </div>
                </div>
            ))}
            <div ref={messagesref}></div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className='mb-5 mt-2 ms-3' style={{ color: "#868686" }}>
                        Delete Message?
                    </div>
                    <div className='d-flex gap-3 mx-auto align-items-center justify-content-center'>
                        <div onClick={handleClose}>
                            <button className='cancel-btn'>Cancel</button>
                        </div>
                        <div onClick={handleDeleteMessage}>
                            <button className='delete-btn'>Delete for me</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ChatBox;
