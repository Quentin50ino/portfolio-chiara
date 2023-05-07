import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';

function ProjectIndexPage() {
    
    const navigate = useNavigate();
    const projects = [
      {
        key : 'project1',
        name : 'Side to Side',
        subtitle : 'apartment',
        imageNameFront : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%201.svg?token=ATJMFNVMZLG4NYZ3HZXA3NTEK6ZOQ',
        imageNameBack : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%201b.svg?token=ATJMFNRKCVU4LOUNVSHXIC3EK6ZTO'
      },
      {
        key : 'project2',
        name : 'Tree Wood',
        subtitle : 'product',
        imageNameFront : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%202%20.svg?token=ATJMFNUCL6DC5WRYCHMFKGDEK6ZWY',
        imageNameBack : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%202b.svg?token=ATJMFNQD2VSF7YB2U3AHIYLEK6ZYE'
      },
      {
        key : 'project3',
        name : 'Connections',
        subtitle : 'retail',
        imageNameFront : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%203.svg?token=ATJMFNXMHAVQ6DYAQ5UJQBDEK6ZZK',
        imageNameBack : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%203b.svg?token=ATJMFNUVQEAR7UIMXEYK3UDEK6Z26'
      },
      {
        key : 'project4',
        name : "Grid's Shadows",
        subtitle : 'office',
        imageNameFront : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%204.svg?token=ATJMFNRBQIF4CELJB63UAYDEK6Z4E',
        imageNameBack : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%204b.svg?token=ATJMFNW4EAELEWTA375QPODEK6Z5C'
      },
      {
        key : 'project5',
        name : 'Upstairs',
        subtitle : 'boutique hotel',
        imageNameFront : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%205.svg?token=ATJMFNSNHND4SHZNIGVZEL3EK6Z6G',
        imageNameBack : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%205b.svg?token=ATJMFNRIC3ADLXL6YMPJ4O3EK6Z7I'
      },
      {
        key : 'project6',
        name : 'Kitchen',
        subtitle : 'apartment',
        imageNameFront : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%206.svg?token=ATJMFNS2IY7O3HYUGDT7TRDEK62AI',
        imageNameBack : 'https://raw.githubusercontent.com/Quentin50ino/portfolio-chiara-images/d43a50f8376526fb51f61e0aff38c9cd2aeb2873/Progetto%206b.svg?token=ATJMFNTI4JHFO5MKXHQPQADEK62BI'
      }
    ]

  return (
    <div>
      <div style={{display :'flex'}}>
      <div style={{width : '50%'}}>
        <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/personal-path')} alt="back arrow"/>
        <div style={{marginTop : '20px'}}>
        {
          projects.map((project) => {
            return(
              <div style={{display : 'flex', justifyContent : 'center', marginTop : '30px'}}>
                <img key={project.key} src={project.imageNameFront} width="50px" alt="project front"></img>
                <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '8em'}} className='subtitle'>
                    <div style={{fontSize : '18px'}}>{project.name}</div>
                    <div style={{fontSize : '12px'}}>{project.subtitle}</div>
                  </div>
                <img key={project.key} src={project.imageNameBack} width="12px" alt="project back"></img>
            </div>
            )
          })
        }
      </div>
      </div>
      <div style={{marginBottom : '-70px', width : '50%', marginTop : '40px', display : 'flex', flexDirection : 'column', justifyContent : 'space-between'}}>
        <div>
          <span className='small-title'>These are</span> <br></br>
          <span className='title'>my</span> <br></br>
          <span className='title'>projects</span> <br></br>
        </div>
        <div>
          <span className='small-title'>and they don't have</span> <br></br>
          <span className='small-title'>a specific order</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectIndexPage;