import React, { useEffect, useState } from 'react';
import '../styles/chat.scss';
import { getUserAdminData, getUserData, profileUpdated } from '../../../services/auth_services/auth_services';
import Modal from 'react-bootstrap/Modal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import moment from 'moment';
import { toast } from 'react-toastify';

function Sidebarchat({ setUserIdMain, handleShow1 }) {
  const token = localStorage.getItem('port-token');
  const [user, setUser] = useState(null);
  const [user1, setUser1] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);


  const [selectimageurl,setSelectImageurl]=useState("");



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [yourname,setYourName]=useState("");

  useEffect(() => {
    if (token) {
      getUserAdminData()
        .then((res) => {
          setUser1(res?.data?.adminuser[0]);
        })
        .catch((err) => {
          console.error('Error fetching admin user data:', err);
        });

      getUserData()
        .then((res) => {
          setUser(res?.data?.user);
          setYourName(res?.data?.user?.username);
          setUserIdMain(res?.data?.user?._id);
        })
        .catch((err) => {
          console.error('Error fetching user data:', err);
        });
    }
  }, [token, setUserIdMain]);


  const LogoutUser=async()=>{
localStorage.removeItem("port-token");
window.location.reload();
  }


  const imageUrls=[
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707350400&semt=ais",
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611743.jpg",
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611777.jpg",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611725.jpg",
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611780.jpg",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg",
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611707.jpg",
    "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833536.jpg"
  ]

  const [selectImage,setSelectImage]=useState(user?.avatar);

  const [loading,setLoading]=useState(false);


  const updateProfileImage=async()=>{
    setLoading(true);
    try {
      const datas={
        username:yourname,
        avatar:selectImage
      }
      const response=await profileUpdated(datas);
      if(response)
        {
toast.success("Profile Updated Successfully");
setTimeout(() => {
  setLoading(false);
handleClose3();
}, 700);
window.location.reload(false);

        }
    } catch (error) {
  setLoading(false);
      
    }
  }
  useEffect(()=>{
  },[user,yourname])
  return (
    <>
      {user?.avatar ? (
        <div className='sidebar-cards d-flex gap-3 border p-3 rounded'>
          <div onClick={handleShow3}>
            <img src={user?.avatar} alt="User Avatar" className='avatar-images' />
          </div>
          <div  onClick={handleShow3}>
            <div className='user-name-texts'>{user?.username?.length>8?<>{user?.username.slice(0,8)}..</>:user?.username}</div>
            <div className='date-texts'>
              {moment(user?.createdAt).format('MMM Do YY')}
            </div>
          </div>
         <div className='logout-user' onClick={handleShow2}>
          Logout
         <i class="fa-solid fa-arrow-right-from-bracket"></i>
         </div>
        </div>
      ) : <div className='mx-auto '>
         <Skeleton style={{ height: '57px', width: '100%' }} />
        </div>}
      <div>
        <hr />
      </div>
      {user1?.avatar ? (
        <div className='mt-3 mb-5 sidebar-card' onClick={handleShow}>
          <div>
            <img src={user1?.avatar} alt="Admin Avatar" className='avatar-images' />
          </div>
          <div>
            <div className='user-name-texts'>{user1?.username}</div>
            <div className='date-texts'>
              {moment(user1?.createdAt).format('MMM Do YY')}
            </div>
          </div>
        </div>
      ) : (
        <div className='text-center'>
          <Skeleton style={{ height: '57px', width: '90%' }} />
        </div>
      )}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> {user1?.username || 'Admin'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={user1?.avatar} alt="Admin Avatar" className='avatar-imagess' />
          </div>
        </Modal.Body>
      </Modal>


      <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title> <div className='d-flex gap-3 align-items-center'>
            <div>
            <img src={user?.avatar} alt="User Avatar" className='avatar-images' />

            </div>
            <div>
            {user?.username || 'user'}
            </div>
          </div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='ms-4 mt-3 mb-2 are'>
          Are you sure you want to log out?
          </div>
          <div className='d-flex gap-4 align-items-center mt-5 mb-4 justify-content-center'>
            <div>
              <button className='cancel' onClick={handleClose2}>Cancel</button>
            </div>
            <div>
              <button className='logout' onClick={LogoutUser}>Logout</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>


      <Modal show={show3} onHide={handleClose3} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title> <div className='d-flex gap-3 align-items-center'>
Update Profile Image
          </div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <label>Your Name</label>
              <input type="text" placeholder='Enter Your name'
                    className='chat-form'
                    value={yourname}
                    onChange={(e)=>setYourName(e.target.value)}
              />
            </div>

            <div className='mt-4 mb-1'>
<label>Your Profile Image</label>
            </div>



            <div className='mb-5 mt-3 p-4 d-flex align-items-center justify-content-center'>
              {selectImage?<>
            <img src={selectImage} alt="no image" className='user-image-round'/>
              
              </>:<>
              
            <img src={user?.avatar} alt="no image" className='user-image-round'/>
              
              </>}

            </div>
          <div className='mt-1 mb-1  list-image'>

          
         {imageUrls?.map((item,index)=>{
          return(
            <div className={`${selectimageurl==item?"user-image-lists-active":"user-image-lists"} mt-3 mb-2`} key={index} onClick={()=>setSelectImageurl(item)}>
              <img src={item} alt="no image" className='user-image-lists'
              onClick={()=>setSelectImage(item)}
              />
            </div>
          )
         })}
          </div>
          <div className='d-flex gap-4 align-items-center mt-5 mb-4 justify-content-center'>
            <div>
              <button className='cancel' onClick={handleClose3}>Cancel</button>
            </div>
            <div>
              <button className='logout' onClick={updateProfileImage}>
                {loading?"Loading...":"Update"}
                </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sidebarchat;
