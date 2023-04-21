import { useNavigate } from 'react-router';
import '../App.css';

function HelloPage() {

    const navigate = useNavigate();

  return (
    <div>
        <div className="align-center">
            <div className='title'>Hi, <br></br> my name <br></br> is Chiara <span className='title blob red' onClick={() => navigate('/landing')}>*</span></div>
            <div className='subtitle'>and I want to tell you my story</div>
        </div>
    </div>
  );
}

export default HelloPage;