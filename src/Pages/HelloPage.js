import { useNavigate } from 'react-router';
import '../App.css';

function HelloPage() {

    const navigate = useNavigate();

  return (
    <div>
        <div className="align-center">
            <div className='title'>Hi, I'm <br></br> Chiara <br></br>Zeloni<span className='title blob red' onClick={() => navigate('/landing')}>*</span></div>
            <div className='subtitle'>as known as <span className='chez'><span className='red'>*</span> Ch<div className='flipH'>Ze</div> <span className='red'>*</span></span></div>
        </div>
    </div>
  );
}

export default HelloPage;