import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactModal({ url, handleClose, handleShow, show }) {

    const [shows, setShows] = useState(0);

    useEffect(() => {
        let timer;

        timer = setInterval(() => {
            const randomNo = Math.ceil(Math.random() * 3);

            if(randomNo==1)
            {
                setShows(0);
            }
            else if(randomNo==2)
            {
                setShows(1);
            }
            else if(randomNo==3){
                setShows(2);
            }
        }, 1000);

        return () => clearInterval(timer);

    }, [shows])


    return (
        <>
           

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >

                <Modal.Body>

                    
                    <div
                        style={{ display: "flex",flexDirection:"column", gap: "20px", justifyContent: "center",alignItems:"center"}}
                    >

                        <div style={{ width: "100px", height: "100px", display: "flex", gap: "20px" }}>
                            <img src={url[shows]} alt="no image"
                                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                            />
                        </div>

                         <div className="text-center mt-2 ">
                        <h3 style={{ color: "black", fontWeight: "bold" }}>Thank You!</h3>
                    </div>

                        <div style={{color:"#9fa6b3",fontSize:"16px"}}>
                            Your message has been sent successfully.
                        </div>
                        <div>
                            We'll get back to you shortly.
                        </div>

                        <div className='mb-4 mt-2'>
                            <button style={{background:"#20a168",color:"white",borderRadius:"6px",padding:"10px 40px"}}
                            onClick={handleClose}
                            >Close</button>
                        </div>

                    </div>
                   
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ContactModal;