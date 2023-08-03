import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import projectsData from '../Data/projects.json'
import ContactsAlertComponent from '../Components/ContactsAlertComponent';

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
      <div className='d-flex flex-row justify-content-between'>
        <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/personal-path')} alt="back arrow"/>
        <ContactsAlertComponent />
      </div>
      <div className='project-index-page-container'>
      <div className='vertical-center project-index-page-block1'>
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
      <div className='project-index-page-block2'>
        <div className='vertical-center-second-column-index d-none d-sm-block d-sm-none d-md-block'>
          <span className='small-title'>These are</span> <br></br>
          <span className='title'>my</span> <br></br>
          <span className='title'>projects</span> <br></br>
        </div>
        <div className='vertical-center-second-column-index d-md-none d-lg-block d-lg-none d-xl-block d-xl-none'>
          <span className='title'>My projects</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectIndexPage;