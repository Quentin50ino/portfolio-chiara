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
        imageNameFront : 'Progetto 1',
        imageNameBack : 'Progetto 1b'
      },
      {
        key : 'project2',
        name : 'Tree Wood',
        subtitle : 'product',
        imageNameFront : 'Progetto 2 ',
        imageNameBack : 'Progetto 2b'
      },
      {
        key : 'project3',
        name : 'Connections',
        subtitle : 'retail',
        imageNameFront : 'Progetto 3',
        imageNameBack : 'Progetto 3b'
      },
      {
        key : 'project4',
        name : "Grid's Shadows",
        subtitle : 'office',
        imageNameFront : 'Progetto 4',
        imageNameBack : 'Progetto 4b'
      },
      {
        key : 'project5',
        name : 'Upstairs',
        subtitle : 'boutique hotel',
        imageNameFront : 'Progetto 5',
        imageNameBack : 'Progetto 5b'
      },
      {
        key : 'project6',
        name : 'Kitchen',
        subtitle : 'apartment',
        imageNameFront : 'Progetto 6',
        imageNameBack : 'Progetto 6b'
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
                <img key={project.key} src={require(`../img/${project.imageNameFront}.svg`)} width="50px"></img>
                <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '8em'}} className='subtitle'>
                    <div style={{fontSize : '18px'}}>{project.name}</div>
                    <div style={{fontSize : '12px'}}>{project.subtitle}</div>
                  </div>
                <img key={project.key} src={require(`../img/${project.imageNameBack}.svg`)} width="12px"></img>
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