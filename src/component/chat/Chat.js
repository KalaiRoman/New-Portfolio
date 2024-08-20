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
import otpimage from '../../assests/images/Enter OTP-amico.png';
import whatsimage from '../../assests/images/whats app images.jpeg';

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
  const [show2, setShow2] = useState(false);

  const [show, setShow] = useState(false);
  const [command, setCommand] = useState("");
  const [commandError, setCommandError] = useState("");
  const messagesRef = useRef(null);
  const [userMessages, setUserMessages] = useState([]);


  const [useridstatus,setUserIdStatus]=useState("");

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);


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
    if (token) {
      const fetchData = async () => {
        try {
          const res = await getUserData();
          if (res) {
            setUser(res.data.user.chat);
            setUserIdStatus(res?.data?.user?._id);
            setUserMessages(res?.data?.user?.chat);
            setUserImage(res.data.user.avatar);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      const fetchData1 = async () => {
        try {
          const res = await getUserAdminData();
          if (res) {
            const adminUser = res?.data?.adminuser[0];
            setUser(adminUser);
            setUserImageAdmin(res?.data?.adminuser[0]?.avatar);
          }
        } catch (error) {
          console.error('Error fetching admin data:', error);
        }
      };
  
      // Fetch data immediately
      fetchData();
      fetchData1();
  
      // Set up intervals
      const intervalId1 = setInterval(fetchData, 60000); // 60 seconds
      const intervalId2 = setInterval(fetchData1, 60000); // 60 seconds
  
      // Cleanup function to clear intervals
      return () => {
        clearInterval(intervalId1);
        clearInterval(intervalId2);
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


  const [timeLeft, setTimeLeft] = useState(60); 
  const [resendTimeLeft, setResendTimeLeft] = useState(60); 
  const [isResendDisabled, setIsResendDisabled] = useState(true);


  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  useEffect(() => {
    if (resendTimeLeft === 0) {
      setIsResendDisabled(false);
      return;
    }

    const resendTimerId = setInterval(() => {
      setResendTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(resendTimerId);
  }, [resendTimeLeft]);

  const handleResendOtp = () => {
    setOtp("");
    setTimeLeft(60);
    setResendTimeLeft(60); 
    setIsResendDisabled(true); 
    loginUser();
  };

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
<div className='d-flex gap-4'>
  <button  className='login-buttons' onClick={handleClickCallbackChat}>Login</button>
  <button className='login-buttonss' onClick={handleShow2}>Chat Preview</button>
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
          <Modal.Title>{loginShow ? "OTP " : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {loginShow ? (
              <div className='mb-5 mt-5'>
              <div className='mb-3 mt-2'>
<img src={otpimage} alt="no image" className='otp-image'/>
              </div>
                <OtpInput
                  value={otp}
                  onChange={(e) => setOtp(e)}
                  numInputs={4}
                  renderSeparator={<span style={{ marginLeft: "0px" }}> </span>}
                  renderInput={(props) => <input {...props} className="input-box-otp" placeholder='*' />}
                />
                {otpError && <p className="text-danger mt-2">{otpError}</p>}
                <div className='button-section-otp'>
                  {timeLeft>0?<>
                    <div>
                  OTP expires in:  <span className='time-left'>00 :  {timeLeft<10?<>0{timeLeft}</>:timeLeft}</span> Seconds
                  </div>
                  </>:null}
                 
                <div>
    
        <button
          onClick={handleResendOtp}
          disabled={isResendDisabled} 
          className={isResendDisabled?"disabled-time":"reset-time"}
        >
          Resend OTP 
        </button>
      </div>
                </div>
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
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>User Chat Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
           
           <img src={whatsimage} alt="no image" className='chat-images'/>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Chat;
