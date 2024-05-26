import React,{useEffect, useState} from 'react'
import '../styles/chat.scss';
import { getUserAdminData, getUserData } from '../../../services/auth_services/auth_services';
import Modal from 'react-bootstrap/Modal';
function Sidebarchat({setUserIdMain}) {
    const token=localStorage.getItem("port-token");
    const [user,setUser]=useState([]);
    const [user1,setUser1]=useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if(token)
            {
                getUserAdminData().then((res)=>{
                    setUser1(res?.data?.adminuser[0]);
                    // setUserImageadmin(res?.data?.adminuser[0]?.avatar)
                }).catch((err)=>{
                    console.log(err);
                })

                getUserData().then((res)=>{
                    setUser(res?.data?.user);
                    setUserIdMain(res?.data?.user?._id)
                }).catch((err)=>{
                    console.log(err);
                })
            }

    },[token])
  return (
    <>
    <div className='sidebar-cards d-flex gap-3 border p-3 rounded'>
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

    <div>
        <hr/>
    </div>
    <div className='mt-3 mb-5 sidebar-card' onClick={handleShow}>
    <div>
<img src={user1?.avatar} alt="no image"  className='avatar-images'/>
</div>
<div>
<div className='user-name-texts'>
            {user1?.username}
            </div>
            <div>
            <div className='date-texts'>
        May 26th 24
</div>
</div>
</div>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kalaisurya</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div>
       <img src={user1?.avatar} alt="no image"  className='avatar-imagess'/>
       </div>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default Sidebarchat