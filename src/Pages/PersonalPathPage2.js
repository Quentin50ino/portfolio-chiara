import { useNavigate } from 'react-router';
import '../App.css';

function PersonalPathPage2() {
    
    const navigate = useNavigate();

    let arrowLeft = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/arrow-left.svg?token=ATJMFNSFK3WWZ77QBPGP4TDEK6ZFC";
    let lineaRossa = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Linea%20rossa.svg?token=ATJMFNRFBEB26YG5CYXTUOLEK6ZCY";
    let pattern1 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/pattern%201.svg?token=ATJMFNXRRMUGFQDETAJRMWLEK6YW6";
    let pattern1b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/pattern%201%20b.svg?token=ATJMFNQWFSAKADQHYPSPQUDEK6YYI";
    let pattern2 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%202.svg?token=ATJMFNXZZAQXMKMXQW7DWALEK6Y5O";
    let pattern2b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%202b.svg?token=ATJMFNSKFALJAE7VQNQQR6TEK6Y7G";
    let pattern3 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%203.svg?token=ATJMFNQIGDVIZWRJHPH4XYTEK6YIQ";
    let pattern3b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%203b.svg?token=ATJMFNT6GDJYHHRYPN7JKE3EK6YMM";
    let pattern4 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%204.svg?token=ATJMFNWQ62POUOLJ5DOA7ULEK6YRQ";
    let pattern4b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%204b.svg?token=ATJMFNTOSYNQD77JHIPKZMLEK6YTG";
    let pattern5 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%205.svg?token=ATJMFNSPS67KBVX32RH22TLEK6YUG";
    let pattern5b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%205b.svg?token=ATJMFNRBLB2JTZSCUWSYBKDEK6YVE";

  return (
    <div style={{display : 'flex'}}>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/landing')} alt="back arrow"/>
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
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '100px'}}>
            <img src={pattern1} width="70px" alt="pattern 1"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>education</div>
            <img src={pattern1b} width="70px" alt="pattern 1 b"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern2} width="70px" alt="pattern 2"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>experience</div>
            <img src={pattern2b} width="70px" alt="pattern 2 b"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern3} width="70px" alt="pattern 3"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>extras</div>
            <img src={pattern3b} width="70px" alt="pattern 3 b"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern4} width="70px" alt="pattern 4"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em'}} className='subtitle'>languages</div>
            <img src={pattern4b} width="70px" alt="pattern 4 b"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern5} width="70px" alt="pattern 5"></img>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em', cursor : 'pointer'}} className='subtitle' onClick={() => navigate('/project-index')}>projects</div>
            <img src={pattern5b} width="70px" alt="pattern 5 b"></img>
        </div>
      </div>
    </div>
  );
}

export default PersonalPathPage2;