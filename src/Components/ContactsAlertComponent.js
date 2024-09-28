
import { useState } from 'react';
import contactsIcon from '../img/icons8-direct-message-96.png';
import Modal from 'react-bootstrap/Modal';
import phone from '../img/telephone-fill (1).svg';
import mail from '../img/envelope-fill.svg';
import linkedin from '../img/linkedin.svg';
import instagram from '../img/instagram.svg';

function ContactsAlertComponent() {

    const [modalShow, setModalShow] = useState(false);

  return (
    <div>
        <div onClick={() => setModalShow(true)}>
            <img src={contactsIcon} alt="Contacts Icon" className='contacts-icon'/>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contacts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <img className='contacts-icons' src={phone} alt="phone icon"/>
                <span>+39 3313579196</span>
            </div>
            <div>
                <img className='contacts-icons' src={mail} alt="mail icon"/>
                <span>chiarazeloni@gmail.com</span>
            </div>
            <div>
                <img className='contacts-icons' src={linkedin} alt="linkedin icon"/>
                <a href='https://www.linkedin.com/in/chiara-zeloni-2a494a210/' target='_blank'>Linkedin</a>
            </div>
            <div>
                <img className='contacts-icons' src={instagram} alt="instagram icon"/>
                <a href='https://www.instagram.com/chiarazeloni_interior/' target='_blank'>Instagram</a>
            </div>
        </Modal.Body>
      </Modal>
    );
  }

export default ContactsAlertComponent;