import React,{useEffect, useState} from 'react'
import './styles/chat.scss';
import EmojiPicker from 'emoji-picker-react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import { getUserData, loginRegister, otpConfirmation } from '../../services/auth_services/auth_services';
import Headerchat from './components/Headerchat';
import Sidebarchat from './components/Sidebarchat';
import ChatBox from './components/ChatBox';
import { chatUser } from '../../services/chat_services/chat_services';
import thumb from '../../assests/images/smile.jpg'
function Chat() {

  const [userId,setUserIdMain]=useState("");
  const [loading,setLoading]=useState(false);
  const token=localStorage.getItem("port-token");
  const [otp, setOtp] = useState('');
  const [otperror, setOtpError] = useState('');
  const [user,setUser]=useState([]);

  const [userimage,setUserImage]=useState("");
  const [userimageadmin,setUserImageadmin]=useState("");


  const [email,setEmail]=useState("");
  const [emailerror,setEmailError]=useState("");

  const [userid,setUserId]=useState("");

  const [loginshow,setLoginshow]=useState(false);



    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
  const [show, setShow] = useState(false);
  
  const [command, setCommand] = useState("");
  const [commanderror, setCommandError] = useState("");
  
  const handleShow = () => setShow(!show);
    
  const handleEmojiClick = (emoji) => {
    var message = command + emoji?.emoji;
    setCommand(message)
  }

  
  const SumbmitCommand = async() => {
    try {
      if (command?.length === 0) {
        setCommandError("Command is Required")
      }
      if (command) {
        const datas = {
          message: command,
         userid:userId,
         type:"sender"
        }

        const datas1 = {
          message: command,
         userid:userId,
         type:"sender",
         createdAt:new Date(),
        }
        const datas12 = {
          message: command,
         userid:userId,
         type:"receiver",
         createdAt:new Date(),
        }
        const response=await chatUser(datas);
        if(response)
          {
  await getUserData();
  setCommand("");
  setUser([...user,datas1,datas12]);
          }
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  
  const handleEnter = async (e) => {
    if (e.key == "Enter") {
      await SumbmitCommand();
    }
  }

  const loginUser=async()=>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setLoading(true);
    try {
      if(email?.length===0)
        {
          setEmailError("Email is required");
        }
  
        if(email)
          {
            if(regex.test(email))
              {

                const data={
                  email:email
                }
                const response=await loginRegister(data);
                if(response)
                  {
                    setUserId(response?.data?.userid)

                    setTimeout(() => {
                      setLoading(false);
                    setLoginshow(true);

                    }, 800);
                  }
              }
          }
          else{
          setEmailError("Please Enter Valid Email");
          setLoading(false);
  
          }
    } catch (error) {
      setLoginshow(false);
      setLoading(false);
      
    }
  

  }

  const otpverfication=async()=>{
    setLoading(true);

try {


  if(otp?.length===0)
    {
      setOtpError("please Enter Otp")
    }
 
    if(otp?.length===4)
      {
        const data={
          otp:otp,
          userid:userid
        }
        const response=await otpConfirmation(data);
        if(response)
          {
            localStorage.setItem("port-token",JSON.stringify(response?.data?.token));
            setTimeout(() => {
              handleClose1();
              setLoading(false);
            }, 600);
          }
      }
  
} catch (error) {
  setOtpError(error?.response?.data?.message);
  setLoading(false);
  
}
  }

  const messagesref = React.useRef(null);
  useEffect(()=>{

  },[userId])

  useEffect(() => {
    messagesref?.current?.scrollIntoView();
}, [command])


useEffect(()=>{
    if(token)
        {
            getUserData().then((res)=>{
                setUser(res?.data?.user?.chat);
                setUserImage(res?.data?.user?.avatar);
            }).catch((err)=>{
                console.log(err);
            })
        }
},[token,userimageadmin])
  return (
    <div className='main-chat-box'>
        <div className='inside-chat-box'>
<div className='left-chat-box'>
    <Sidebarchat setUserImageadmin={setUserImageadmin}/>
    <div className='help-box'>
      <img src={thumb} alt="no image" className='user-image'/>
    </div>
</div>
<div className='right-chat-box'>
<div className='right-inside-chat-box'>
<div className='top-header-section-chat'>
<div className='top-header-body-section'>
<Headerchat setUserIdMain={setUserIdMain}/>
</div>
</div>
<div className='middle-section-chat'>
<ChatBox messagesref={messagesref} user={user} userimage={userimage} userimageadmin={userimageadmin}/>
</div>
<div className='bottom-header-section-chat'>
<div className='logo-bottom' onClick={handleShow}>
{show ? <>
    😀 <EmojiPicker className='box-emojies' onEmojiClick={handleEmojiClick} />
                      </> : <>
                        😀
                      </>}
</div>
<div className='chat-bottom'>
<Form.Group className="mb-3" controlId="formBasicEmail">
                        <input type="text" placeholder="Type a message"
                          value={command}
                          onChange={(e) => setCommand(e?.target?.value)}
                          className='chat-form'
                          onKeyDown={handleEnter}
                        />
                        <Form.Text className=" text-danger mt-2">
                          {command?.length > 0 ? <></> : <>
                            {commanderror}
                          </>}
                        </Form.Text>
                      </Form.Group>
</div>
<div className='send-bottom'>
  {token?<div onClick={SumbmitCommand}>
<i class="fa-solid fa-paper-plane-top"></i>
  
  </div>:<div onClick={handleShow1}>
<i class="fa-solid fa-paper-plane-top"></i>
  
  </div>}
</div>
</div>
</div>
</div>
        </div>

        <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
<div className='login-texts'>
  {loginshow?"OTP":"Login"}
</div>

{loginshow?<>

  <div className='mb-5 mt-5'>
                      <OtpInput
      value={otp}
      onChange={(e)=>setOtp(e)}
      numInputs={4}

      renderSeparator={<span style={{marginLeft:"0px"}}>    </span>}
      renderInput={(props) => <input {...props}   className="input-box-otp"/>}
    />
                      </div>
</>:<>

<div className='d-flex align-items-center justify-content-center mt-2 mb-3'>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email </Form.Label>
                        <input type="text" placeholder="Enter Email Id"
                          value={email}
                          onChange={(e) => setEmail(e?.target?.value)}
                          className='chat-form'
                          onKeyDown={handleEnter}
                        />
                        <Form.Text className=" text-danger mt-2">
                          {command?.length > 0 ? <></> : <>
                          {emailerror}
                          </>}
                        </Form.Text>
                      </Form.Group>

                      
</div>
</>}



<div className='mx-auto d-flex align-items-center justify-content-center mb-4'>
  <button className='login-button' onClick={loginshow?otpverfication:loginUser}>

  {loginshow?<>{loading?"Loading...":"OTP Verification"}</>:<>{loading?"Loading...":"Login"}</>}
  </button>
</div>
        </div>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default Chat