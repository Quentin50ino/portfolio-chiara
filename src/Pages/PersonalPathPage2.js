import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import pattern1 from '../img/pattern 1.svg';
import pattern1b from '../img/pattern 1 b.svg';
import pattern2 from '../img/Pattern 2.svg';
import pattern2b from '../img/Pattern 2b.svg';
import pattern3 from '../img/Pattern 3.svg';
import pattern3b from '../img/Pattern 3b.svg';
import pattern4 from '../img/Pattern 4.svg';
import pattern4b from '../img/Pattern 4b.svg';
import pattern5 from '../img/Pattern 5.svg';
import pattern5b from '../img/Pattern 5b.svg';
import lineaRossa from '../img/Linea rossa.svg';


function PersonalPathPage2() {
    
    const navigate = useNavigate();

  return (
    <div style={{display : 'flex'}}>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/landing')} alt="back arrow"/>
      <div style={{width : '50%'}}>
        <div className='title'>
            <div className='vertical-center'>
                and this is <br></br>
                my path
                <div style={{display : 'flex', justifyContent : 'flex-end', marginTop : '20px'}}>
                    <img src={lineaRossa} width="100px"/>
                </div>
            </div>
        </div>
      </div>
      <div style={{width : '50%'}}>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '100px'}}>
            <img src={pattern1} width="70px"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>education</div>
            <img src={pattern1b} width="70px"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern2} width="70px"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>experience</div>
            <img src={pattern2b} width="70px"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern3} width="70px"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>extras</div>
            <img src={pattern3b} width="70px"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern4} width="70px"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>languages</div>
            <img src={pattern4b} width="70px"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern5} width="70px"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em', cursor : 'pointer'}} className='subtitle' onClick={() => navigate('/project-index')}>projects</div>
            <img src={pattern5b} width="70px"></img>
        </div>
      </div>
    </div>
  );
}

export default PersonalPathPage2;