import { useNavigate } from 'react-router';
import '../App.css';
import Copertina from '../img/Copertina.png';
import arrowLeft from '../img/arrow-left.svg';

function LandingPage() {
    
    const navigate = useNavigate();

  return (
    <div>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/')} alt="back arrow"/>
      <div className='orizontal-center'>
        <img className='thats-me-center' src={Copertina} height="380px" style={{marginRight : '100px'}} alt="that's me"/>
        <div className='title' >That's &nbsp; me <span className='title blob red' onClick={() => navigate('/personal-path')}>*</span></div>
      </div>
      <div className='subtitle' style={{marginTop : '200px', padding : '0px 420px'}}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus varius tellus, eu laoreet sem aliquet et. Sed viverra nunc vel metus rutrum, at iaculis felis dapibus. Nulla facilisi.</span>
      </div>
    </div>
  );
}

export default LandingPage;