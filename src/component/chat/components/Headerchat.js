import React, { useEffect, useState } from 'react';
import '../styles/chat.scss';
import { getUserAdminData } from '../../../services/auth_services/auth_services';
import moment from 'moment';
import hi from '../../../assests/images/hi.png';
import Modal from 'react-bootstrap/Modal';

function HeaderChat({userimageadmin }) {
  const token = localStorage.getItem('port-token');
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (token) {
      getUserAdminData()
        .then((res) => {
          const adminUser = res?.data?.adminuser[0];
          setUser(adminUser);
          userimageadmin(adminUser?.avatar);
        })
        .catch((err) => {
        });
    }
  }, [token]);

  return (
    <div>
      {user?.avatar ? (
        <div className='d-flex gap-3 align-items-center justify-content-between'  onClick={handleShow}>
         <div className='d-flex gap-3 align-items-center'>
         <div>
            <img src={user?.avatar} alt="User Avatar" className='avatar-image' />
          </div>
          <div>
            <div className='user-name-texts'>
              {user?.username}
            </div>
            <div className='date-texts'>
              {moment(user?.createdAt).format("MMM Do YY")}
            </div>
          </div>
         </div>
         <div className="d-flex gap-2 align-items-center">
        <div>
        <i class="fa-solid fa-circle-dot"></i>
        </div>
        <div className='time-text'>
          Active
        </div>
         </div>
        </div>
      ) : (
        <div className='d-flex gap-3 align-items-center'  onClick={handleShow}>
          <div>
            <img src={hi} alt="Hi" className='avatar-image' />
          </div>
          <div>
            <div className='user-name-texts'></div>
            <div className='date-texts'>
              "Hi, can you please log in and then chat?"
            </div>
          </div>
        </div>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>{user?.username || 'User'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={user?.avatar} alt="User Avatar" className='avatar-imagess' />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default HeaderChat;
