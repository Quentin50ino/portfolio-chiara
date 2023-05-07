import { useNavigate } from 'react-router';
import '../App.css';
import Copertina from '../img/Copertina.png';
import arrowLeft from '../img/arrow-left.svg';

function LandingPage() {
    
    const navigate = useNavigate();

  return (
    <div>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/')} alt="back arrow"/>
      <div>
        <img className='thats-me-center' src={Copertina} height="380px" style={{marginRight : '100px'}} alt="that's me"/>
        <div className='title vertical-and-orizontal-center'style={{ zIndex : '-1'}}>That's &nbsp; me <span className='title blob red' onClick={() => navigate('/personal-path')}>*</span></div>
      </div>
    </div>
  );
}

export default LandingPage;