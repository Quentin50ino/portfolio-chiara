import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import projectsData from '../Data/projects.json'

function ProjectIndexPage() {
    
    const navigate = useNavigate();
    const projects = projectsData;

    const goToDetailPage = (projectKey) => {
      if(projectKey === 'project5'){
        navigate('/project-detail-thesis?projectKey=' + projectKey)
      } else {
        navigate('/project-detail-interior?projectKey=' + projectKey)
      }
    }

  return (
    <div>
      <div style={{display :'flex'}}>
      <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/personal-path')} alt="back arrow"/>
      <div style={{width : '50%'}} className='vertical-center'>
        <div style={{marginTop : '20px'}}>
        {
          projects.map((project) => {
            return(
              <div style={{display : 'flex', justifyContent : 'center', marginTop : '30px'}}>
                <img key={project.key} src={project.imageNameFront} width="50px" alt="project front"></img>
                <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '8em', cursor : 'pointer'}} 
                className='subtitle' onClick={() => goToDetailPage(project.key)}>
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
      <div style={{ width : '50%', marginTop : '100px', display : 'flex'}}>
        <div className='vertical-center-second-column'>
          <span className='small-title'>These are</span> <br></br>
          <span className='title'>my</span> <br></br>
          <span className='title'>projects</span> <br></br>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectIndexPage;