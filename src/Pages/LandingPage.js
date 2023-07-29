import { useNavigate } from 'react-router';
import '../App.css';
import Copertina from '../img/Copertina.png';
import arrowLeft from '../img/arrow-left.svg';

function LandingPage() {
    
    const navigate = useNavigate();

  return (
    <div>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/')} alt="back arrow"/>
      <div className='vertical-and-orizontal-center'>
      <div className='orizontal-center'>
        <img className='thats-me-center' src={Copertina} height="380px" style={{marginRight : '100px'}} alt="that's me"/>
        <div className='title' >That's &nbsp; me <span className='title blob red' style={{position : 'absolute'}} onClick={() => navigate('/personal-path')}>*</span></div>
      </div>
      <div className='subtitle' style={{marginTop : '200px'}}>
        <span>I love the eclectic style, with its combinations <br></br> of bright colors and tones.<br></br> I'm looking for people of the same kind or can appriciate diversity.  <br></br> </span>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;