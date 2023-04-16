import { useNavigate } from 'react-router';
import '../App.css';
import Copertina from '../img/Copertina.png';
import arrowLeft from '../img/arrow-left.svg';

function LandingPage() {
    
    const navigate = useNavigate();

  return (
    <div>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/')} alt="back arrow"/>
      <div className='align-center'>
        <img src={Copertina} height="380px" style={{marginLeft : '110px'}} alt="that's me"/>
        <div className='title'style={{marginTop : '-250px', zIndex : '-1'}}>That's &nbsp; me <span className='title blob red' onClick={() => navigate('/personal-path')}>*</span></div>
      </div>
    </div>
  );
}

export default LandingPage;