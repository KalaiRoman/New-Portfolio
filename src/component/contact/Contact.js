import React from 'react'
import './styles/Contact.scss';
import CommonHeader from './../../CommonHeader/CommonHeader';
import contactimg from '../../assests/images/Contact us-amico 1.png';
import { ContactDatas } from '../../commoncontent/ContactData';
import Form from 'react-bootstrap/Form';
function Contact({ colorName }) {
    return (
        <div className='main-contact-section'>
            <div className='inside-contact-section'>
                <CommonHeader title={"Contact Me"} colorName={colorName} />
                <div className='contact-box'>
                    <div className='left-contact-box'>
                        <div className='getin'>
                            Get in touch
                        </div>
                        <div className='we-texts'>
                            We are here for you!
                            {/* How can we help? */}
                        </div>
                        <div className='mt-4'>
                            <Form>
                                <div className='mb-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label-texts">Name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Name" className='form-section' />
                                        <Form.Text className="text-muted">

                                        </Form.Text>
                                    </Form.Group>
                                </div>


                                <div className='mb-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label-texts">Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" className='form-section' />
                                        <Form.Text className="text-muted">

                                        </Form.Text>
                                    </Form.Group>
                                </div>

                                <div className='mb-4'>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label-texts">Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            className='form-section'
                                        />
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </div>

                                <div className='mt-4'>
                                    <button variant="primary" type="submit" className='buttonsubmit mt-3'>
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>

                    <div className='right-contact-box'>
                        <img src={contactimg} alt="no image" className='contactimage' />
                        <div>
                            {ContactDatas?.conntactList?.map((item, index) => {
                                return (
                                    <div>
                                        <div className='box-forms mb-3 mt-2'>
                                            <div>
                                                {item?.image}
                                            </div>
                                            <div className='contactname'>
                                                {item?.name}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact