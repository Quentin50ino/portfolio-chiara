import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg'

function HelloPage() {

    const navigate = useNavigate();

    function backToLandingPage() {
      navigate("/");
    }

  return (
    <div>
        <img src={arrowLeft} className='back-arrow' onClick={() => backToLandingPage()}/>
        <div className="align-center">
            <div className='title'>Hi, <br></br> my name <br></br> is Chiara <span className='title blob red'>*</span></div>
            <div className='subtitle'>(and I want to tell you my story)</div>
        </div>
    </div>
  );
}

export default HelloPage;