import { useNavigate } from 'react-router';
import '../App.css';
import Copertina from '../img/Copertina.png';
import Spinner from 'react-bootstrap/Spinner';

function LandingPage() {
    
    const navigate = useNavigate();

    function goToHelloPage() {
      navigate("/hello");
    }

  return (
    <div className="align-center">
      <img src={Copertina} height="350px"/>
      <Spinner animation="grow" variant="danger" onClick={() => goToHelloPage()} style={{cursor: 'pointer'}}/>
    </div>
  );
}

export default LandingPage;