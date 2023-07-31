import { useLocation, useNavigate } from 'react-router';
import '../App.css';
import { useState } from 'react';

function PersonalPathPageDetailsPage() {
    
    const navigate = useNavigate();
    const location = useLocation();
    let [showBulletList, setShowBulletList] = useState(true);
    let arrowLeft = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/arrow-left.svg?token=ATJMFNSFK3WWZ77QBPGP4TDEK6ZFC";
    let lineaRossa = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Linea%20rossa.svg?token=ATJMFNRFBEB26YG5CYXTUOLEK6ZCY";

    const backToPathPage = () => {
        document.getElementById('pattern1').classList.add('pattern-path-details-left-back');
        document.getElementById('pattern2').classList.add('pattern-path-details-right-back');
        setShowBulletList(false);
        setTimeout(() => {
            navigate('/personal-path')
        }, 750)
    }
  return (
    <div className='personal-path-page-container'>
      <img src={arrowLeft} className='back-arrow' onClick={backToPathPage} alt="back arrow"/>
      <div className='personal-path-page-block1'>
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
      <div className='personal-path-page-block2'>
        <div>
        <div className='selected-pattern-path-details'>
            <img id="pattern1" src={location.state.pattern} width="70px" alt="pattern" className='pattern-path-details-left'></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em',cursor : "pointer"}} className='subtitle' onClick={backToPathPage}>{location.state.title}</div>
            <img id="pattern2" src={location.state.patternb} width="70px" alt="pattern b" className='pattern-path-details-right'></img>
        </div>
        {showBulletList?<div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <div >
                {
                    location.state.bulletList.map((item) => {
                        return(
                            <div className='bullet-list-path-details'>
                                <div>{item}</div><br></br>
                            </div>
                        )
                    })
                }
            </div>
        </div>:null}
        </div>
      </div>
    </div>
  );
}

export default PersonalPathPageDetailsPage;