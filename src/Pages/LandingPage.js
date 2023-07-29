import { useNavigate } from 'react-router';
import '../App.css';
import Copertina from '../img/Copertina.png';
import arrowLeft from '../img/arrow-left.svg';

function LandingPage() {
    
    const navigate = useNavigate();

  return (
    <div>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/')} alt="back arrow"/>
      <div className='vertical-center-thats-me'>
      <div className='orizontal-center'>
        <img className='thats-me-center' src={Copertina} height="380px" style={{marginRight : '100px'}} alt="that's me"/>
        <div className='title' >That's &nbsp; me <span className='title blob red' onClick={() => navigate('/personal-path')}>*</span></div>
      </div>
      <div className='subtitle' style={{marginTop : '200px', padding : '0px 420px'}}>
        <span>I particularly love the eclectic style, with combinations of bright colors <br></br> and combinations of tiles in bright and particular tones.<br></br> So, if you’re a person who loves the nuances of grilling, <br></br> we probably can’t be friends.</span>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;