import { useNavigate } from 'react-router';
import '../App.css';
import asterisco from '../img/asterisco_icona.png'
import ContactsAlertComponent from '../Components/ContactsAlertComponent';

function HelloPage() {

    const navigate = useNavigate();

  return (
    <div>
          <div className='d-flex flex-row justify-content-end'>
            <ContactsAlertComponent/>
          </div>
        <div className="align-center">
          <div style={{display : 'flex', justifyContent : 'center'}}>
            <div className='title'><div className='title-row'>Hi, I'm</div> <div className='title-row'>Chiara</div> <div className='title-row'>Zeloni<span style={{position : 'fixed'}} className='title blob red' onClick={() => navigate('/landing')}>*</span></div></div>
          </div>
            <div className='subtitle'><span className='aka'>as known as</span>
            <span className='chez'>
              <div className="vertical-aligned">
                <img src={asterisco} alt="asterisco" width="20px" height="20px"/>
              </div> &nbsp;Ch<div className='flipH'>&nbsp;Ze</div> 
              <div className="vertical-aligned">
                <img src={asterisco} alt="asterisco" width="20px" height="20px"/>
              </div>
              </span></div>
        </div>
    </div>
  );
}

export default HelloPage;