import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';

function PersonalPathPage() {
    
    const navigate = useNavigate();

  return (
    <div>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/landing')} alt="back arrow"/>
    </div>
  );
}

export default PersonalPathPage;