import { useLocation, useNavigate } from 'react-router';
import '../App.css';

function PersonalPathPageDetailsPage() {
    
    const navigate = useNavigate();
    const location = useLocation();
    let arrowLeft = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/arrow-left.svg?token=ATJMFNSFK3WWZ77QBPGP4TDEK6ZFC";
    let lineaRossa = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Linea%20rossa.svg?token=ATJMFNRFBEB26YG5CYXTUOLEK6ZCY";


  return (
    <div style={{display : 'flex'}}>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/personal-path')} alt="back arrow"/>
      <div style={{width : '50%'}}>
        <div className='title'>
            <div className='vertical-center'>
                and this is <br></br>
                my path
                <div style={{display : 'flex', justifyContent : 'flex-end', marginTop : '20px'}}>
                    <img src={lineaRossa} width="100px" alt="red line"/>
                </div>
            </div>
        </div>
      </div>
      <div style={{width : '50%'}}>
        <div>
        <div style={{display : 'flex', justifyContent : 'space-around', marginTop : '100px'}}>
            <img src={location.state.pattern} width="70px" alt="pattern" className='pattern-path-details'></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>{location.state.title}</div>
            <img src={location.state.patternb} width="70px" alt="pattern b" className='pattern-path-details'></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <div >
                {
                    location.state.bulletList.map((item) => {
                        return(
                            <div style={{padding : '0px 150px'}}>
                                <div>{item}</div><br></br>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPathPageDetailsPage;