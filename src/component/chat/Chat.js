import React, { useEffect, useState, useRef } from 'react';
import './styles/chat.scss';
import EmojiPicker from 'emoji-picker-react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import { getUserAdminData, getUserData, loginRegister, otpConfirmation } from '../../services/auth_services/auth_services';
import Headerchat from './components/Headerchat';
import Sidebarchat from './components/Sidebarchat';
import ChatBox from './components/ChatBox';
import { chatUpdateStatusUser, chatUser } from '../../services/chat_services/chat_services';
import thumb from '../../assests/images/smile.jpg';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import chatserimage from '../../assests/images/chat-user.png'; 
function Chat() {
  const [userId, setUserIdMain] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("port-token");
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [user, setUser] = useState([]);
  const [userImage, setUserImage] = useState("");
  const [userImageAdmin, setUserImageAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userIdInput, setUserId] = useState("");
  const [loginShow, setLoginShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);
  const [command, setCommand] = useState("");
  const [commandError, setCommandError] = useState("");
  const messagesRef = useRef(null);
  const [userMessages, setUserMessages] = useState([]);


  const [useridstatus,setUserIdStatus]=useState("");

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleShow = () => setShow(!show);

  const handleEmojiClick = (emoji) => {
    setCommand(prevCommand => prevCommand + emoji.emoji);
  };

  const submitCommand = async () => {
    if (command.trim() === "") {
      toast.error("Please Enter Some Message");
      return;
    }
  
    const datas = { message: command, userid: userId, type: "sender" };
    const datas1 = { ...datas, createdAt: new Date() };
    // setUser([...user, datas1]);
    try {
      const response = await chatUser(datas);
      const ids={
        userid:useridstatus,type:"receiver"
      }
      chatUpdateStatusUser(ids).then((res)=>{
  
      }).catch((err)=>{
        console.log(err);
      })
      if (response) {
        
        const insideResponse=await getUserData();
     if(insideResponse)
      {
        setUser(insideResponse?.data?.user?.chat);
        setCommand("");
      }
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const ids={
        userid:useridstatus,type:"receiver"
      }
      chatUpdateStatusUser(ids).then((res)=>{
      
      }).catch((err)=>{
        console.log(err);
      })
      await submitCommand();
    }
  };

  const loginUser = async () => {
    setLoading(true);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      setEmailError("Email is required");
      setLoading(false);
      return;
    }

    if (!regex.test(email)) {
      setEmailError("Please Enter Valid Email");
      setLoading(false);
      return;
    }

    try {
      const data = { email };
      const response = await loginRegister(data);
      if (response) {
        setUserId(response.data.userid);
        setTimeout(() => {
          setLoading(false);
          setLoginShow(true);
        }, 800);
      }
    } catch (error) {
      console.error(error);
      setLoginShow(false);
      setLoading(false);
    }
  };

  const otpVerification = async () => {
    setLoading(true);
    if (otp.trim().length !== 4) {
      setOtpError("Please Enter a valid 4-digit OTP");
      setLoading(false);
      return;
    }
    try {
      const data = { otp, userid: userIdInput };
      const response = await otpConfirmation(data);
      if (response) {
        localStorage.setItem("port-token", JSON.stringify(response.data.token));
        window.alert(response?.data?.userid)
        setTimeout(() => {
          handleClose1();
          setLoading(false);
        }, 600);
      }
    } catch (error) {
      console.error(error);
      setOtpError(error.response?.data?.message || "Error verifying OTP");
      setLoading(false);
    }
  };
  useEffect(() => {

    // if (token) {
    //   var timeoutId;


    //   const fetchData1=async()=>{
    //    try {
        
    //     const res=await getUserData();

    //     if(res)
    //       {
    //         setUser(res.data.user.chat);
    //           setUserIdStatus(res?.data?.user?._id);
    //           setUserMessages(res?.data?.user?.chat);
    //           setUserImage(res.data.user.avatar);
    //       }
      
    //    } catch (error) {
        
    //    } finally {
    //     timeoutId = setTimeout(fetchData1, 60000); 
    //   }
    //   }


    //   const fetchData2=async()=>{
    //     try {
         
    //      const res=await getUserAdminData();
 
    //      if(res)
    //        {
            // const adminUser = res?.data?.adminuser[0];
            // setUser(adminUser);
            // setUserImageAdmin(res?.data?.adminuser[0]?.avatar);
    //        }
       
    //     } catch (error) {
         
    //     } finally {
    //      timeoutId = setTimeout(fetchData2, 60000); 
    //    }
    //    }
    // fetchData1();
    // fetchData2();
    // }

    if(token)
      {
        var timeoutId;
        const fetchData = async () => {
          try {
            
            const res=await getUserData();
                if(res)
                  {
                    setUser(res.data.user.chat);
                      setUserIdStatus(res?.data?.user?._id);
                      setUserMessages(res?.data?.user?.chat);
                      setUserImage(res.data.user.avatar);
                  }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            timeoutId = setTimeout(fetchData, 60000); // 60 seconds
          }
        };


        const fetchData1 = async () => {
          try {
            
            const res=await getUserAdminData();
                if(res)
                  {
                    const adminUser = res?.data?.adminuser[0];
                    setUser(adminUser);
                    setUserImageAdmin(res?.data?.adminuser[0]?.avatar);
                  }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            timeoutId = setTimeout(fetchData1, 60000); // 60 seconds
          }
        };
    
        fetchData();
        fetchData1();
        return () => {
          clearTimeout(timeoutId);
        };
      }
  }, [token, userImageAdmin]);
  useEffect(() => {
    messagesRef.current?.scrollIntoView();
  }, [user,useridstatus]);
  useEffect(()=>{
if(token)
  {
    const chatIdMessage={
      userid:useridstatus,type:"receiver"
    }

    if(chatIdMessage?.userid && chatIdMessage?.type)
      {
        chatUpdateStatusUser(chatIdMessage).then((res)=>{
        }).catch((err)=>{
          console.log(err);
        })
      }
  
  }
  },[useridstatus])

  const handleClickCallbackChat=async()=>{
    handleShow1();
  }

  return (
    <div className='main-chat-box'>
      <div className='box1'></div>
      <div className='box2'></div>
      <div className='inside-chat-box'>
        <div className='left-chat-box'>
          <Sidebarchat setUserIdMain={setUserIdMain} handleShow1={handleShow1} />
          {thumb && (
            <div className='help-box'>
              <img src={thumb} alt="user thumbnail" className='user-image' />
            </div>
          )}
          <div>
            <button className='hire-me-btn' onClick={() => window.location.assign("/contact")}>Hire Me</button>
          </div>
        </div>

        {token?<>
        
          <div className='right-chat-box'>
          <div className='right-inside-chat-box'>
            <div className='top-header-section-chat'>
              <div className='top-header-body-section'>
                <Headerchat setUserImageAdmin={setUserImageAdmin} />
              </div>
            </div>
            <div className='middle-section-chat'>
              <ChatBox
                messagesref={messagesRef}
                user={user}
                userimage={userImage}
                userMessages={userMessages}
                setUserMessages={setUserMessages}
                handleShow1={handleShow1}
                handleClickCallbackChet={handleClickCallbackChat}
              />
            </div>
            <div className='bottom-header-section-chat'>
              <div className='logo-bottom' onClick={handleShow}>
                {show ? (
                  <>
                    😀
                    <EmojiPicker className='box-emojies' onEmojiClick={handleEmojiClick} />
                  </>
                ) : (
                  "😀"
                )}
              </div>
              <div className='chat-bottom'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <input
                    type="text"
                    placeholder="Type a message"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    className='chat-form'
                    onKeyDown={handleEnter}
                  />
                  <Form.Text className="text-danger mt-2">
                    {command.trim() === "" && commandError}
                  </Form.Text>
                </Form.Group>
              </div>
              {token ? (
                <div className='send-bottom' onClick={submitCommand}>
                  <i className="fa-solid fa-paper-plane-top"></i>
                </div>
              ) : (
                <div className='send-bottom' onClick={handleShow1}>
                  <i className="fa-solid fa-paper-plane-top"></i>
                </div>
              )}
            </div>
          </div>
        </div>
        </>:<>
        <div className='chat-box-modal'>
          <div>
            <img src={chatserimage} alt="no image" className='chat-image'/>
          </div>
<div>

  <button  className='login-buttons'onClick={handleClickCallbackChat}>Login</button>
</div>
        </div>
        </>}
       
      </div>

      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{loginShow ? "OTP Verification" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {loginShow ? (
              <div className='mb-5 mt-5'>
                <OtpInput
                  value={otp}
                  onChange={(e) => setOtp(e)}
                  numInputs={4}
                  renderSeparator={<span style={{ marginLeft: "0px" }}> </span>}
                  renderInput={(props) => <input {...props} className="input-box-otp" />}
                />
                {otpError && <p className="text-danger mt-2">{otpError}</p>}
              </div>
            ) : (
              <div className='d-flex align-items-center justify-content-center mt-2 mb-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <input
                    type="text"
                    placeholder="Enter Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='chat-form'
                  />
                  {emailError && <Form.Text className="text-danger mt-2">{emailError}</Form.Text>}
                </Form.Group>
              </div>
            )}
            <div className='mx-auto d-flex align-items-center justify-content-center mb-4'>
              <button className='login-button' onClick={loginShow ? otpVerification : loginUser}>
                {loading ? "Loading..." : loginShow ? "OTP Verification" : "Login"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Chat;
