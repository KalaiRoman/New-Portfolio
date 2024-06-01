import React, { useEffect, useState } from 'react';
import '../styles/chat.scss';
import { getUserAdminData, getUserData } from '../../../services/auth_services/auth_services';
import Modal from 'react-bootstrap/Modal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import moment from 'moment';

function Sidebarchat({ setUserIdMain, handleShow1 }) {
  const token = localStorage.getItem('port-token');
  const [user, setUser] = useState(null);
  const [user1, setUser1] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          setUserIdMain(res?.data?.user?._id);
        })
        .catch((err) => {
          console.error('Error fetching user data:', err);
        });
    }
  }, [token, setUserIdMain]);

  return (
    <>
      {user?.avatar ? (
        <div className='sidebar-cards d-flex gap-3 border p-3 rounded'>
          <div>
            <img src={user?.avatar} alt="User Avatar" className='avatar-images' />
          </div>
          <div>
            <div className='user-name-texts'>{user?.username}</div>
            <div className='date-texts'>
              {moment(user?.createdAt).format('MMM Do YY')}
            </div>
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
          <Modal.Title>{user1?.username || 'Admin'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={user1?.avatar} alt="Admin Avatar" className='avatar-imagess' />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sidebarchat;
