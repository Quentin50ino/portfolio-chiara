import { useNavigate } from 'react-router';
import '../App.css';

function PersonalPathPage2() {
    
    const navigate = useNavigate();

    let arrowLeft = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/arrow-left.svg?token=ATJMFNSFK3WWZ77QBPGP4TDEK6ZFC";
    let lineaRossa = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Linea%20rossa.svg?token=ATJMFNRFBEB26YG5CYXTUOLEK6ZCY";
    let pattern1 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/pattern%201.svg?token=ATJMFNXRRMUGFQDETAJRMWLEK6YW6";
    let pattern1b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/6eb2be999d2c93bb59852e72f42f00acb1d123f3/pattern1b.svg";
    let pattern2 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%202.svg?token=ATJMFNXZZAQXMKMXQW7DWALEK6Y5O";
    let pattern2b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%202b.svg?token=ATJMFNSKFALJAE7VQNQQR6TEK6Y7G";
    let pattern3 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%203.svg?token=ATJMFNQIGDVIZWRJHPH4XYTEK6YIQ";
    let pattern3b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%203b.svg?token=ATJMFNT6GDJYHHRYPN7JKE3EK6YMM";
    let pattern4 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%204.svg?token=ATJMFNWQ62POUOLJ5DOA7ULEK6YRQ";
    let pattern4b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%204b.svg?token=ATJMFNTOSYNQD77JHIPKZMLEK6YTG";
    let pattern5 = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%205.svg?token=ATJMFNSPS67KBVX32RH22TLEK6YUG";
    let pattern5b = "https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Pattern%205b.svg?token=ATJMFNRBLB2JTZSCUWSYBKDEK6YVE";

    let bulletListEducation = [
      '2013-2018 - Scientific high school N.Rodolico; Florence', 
      '2018-2021 - IAAD; Torino'
    ];
    let bulletListExperience = [
      '2017 - Tourist guide at the GAM - gallery of modern art of Palazzo Pitti in Florence.',
      '2017 - Tourist guide at the museum of Villa Bardini in Florence.',
      '2020 - Internship at the Serragli130 archi of Florence.',
      '2021 - Internship at Amlab design studio',
      '2022 - Beginning of the freelance collaboration with Aifaicasa studio in Turin'
    ];
    let bulletListExtras = [
      'In the 2015 and 2017 I attended English language courses in Brighton and Oxford.',
      'During those experiences, I added to the standard course a module focused on visits to local companies, job opportunities’ search via web and job interviews’ preparation.',
      'I also attended a National Dance Council of America affiliated ballet school for 14 years, passing five exams to qualify as a teacher.' 
    ];
    let bulletListLanguages = [
      'Italian _ native language',
      'English _ Level B2 (TOEIC)'
    ];

    const openPersonalPath = (title, pattern, patternb, bulletList) => {
      navigate('/personal-path-details', {
        state : {
          title,
          pattern,
          patternb,
          bulletList
        }
      })
    }

  return (
    <div className='personal-path-page-container'>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/landing')} alt="back arrow"/>
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
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '100px'}}>
            <img src={pattern1} width="70px" alt="pattern 1"></img>
            <div onClick={() => openPersonalPath('education', pattern1, pattern1b, bulletListEducation)} style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em', cursor : 'pointer'}} className='subtitle'>education</div>
            <img src={pattern1b} width="70px" alt="pattern 1 b"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern2} width="70px" alt="pattern 2"></img>
            <div onClick={() => openPersonalPath('experience', pattern2, pattern2b, bulletListExperience)} style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em', cursor : 'pointer'}} className='subtitle'>experience</div>
            <img src={pattern2b} width="70px" alt="pattern 2 b"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern3} width="70px" alt="pattern 3"></img>
            <div onClick={() => openPersonalPath('extras', pattern3, pattern3b, bulletListExtras)} style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em', cursor : 'pointer'}} className='subtitle'>extras</div>
            <img src={pattern3b} width="70px" alt="pattern 3 b"></img>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '40px'}}>
            <img src={pattern4} width="70px" alt="pattern 4"></img>
            <div onClick={() => openPersonalPath('languages', pattern4, pattern4b, bulletListLanguages)} style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '6em', cursor : 'pointer'}} className='subtitle'>languages</div>
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