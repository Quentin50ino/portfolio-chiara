import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import projectsData from '../Data/projects.json'
import ContactsAlertComponent from '../Components/ContactsAlertComponent';
import { useEffect, useState } from 'react';

function ProjectIndexPage() {
    
    const navigate = useNavigate();
    const projects = projectsData;
    const elements = 6;
    const [maxElementPerColumn, setMaxElementPerColumn] = useState(elements);

    useEffect(() => {
      const updateMaxElements = (e) => {
        if (e.matches) {
          setMaxElementPerColumn(projects.length);
        } else {
          setMaxElementPerColumn(elements);
        }
      };
      const mediaQuery = window.matchMedia("(max-width: 840px)");
      updateMaxElements(mediaQuery);
      mediaQuery.addEventListener('change', updateMaxElements);
      return () => {
        mediaQuery.removeEventListener('change', updateMaxElements);
      };
    }, [projects.length]);

    const goToDetailPage = (projectKey) => {
      if(projectKey === 'pgUPiV76zM4PnnDK9k8ejXPWoPtxaPrx'){
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
      <div className='vertical-center-project-index project-index-page-block1' style={{display : 'flex', flexDirection : 'row', justifyContent : 'center'}}>
        <div style={{marginTop : '20px'}}>
        {
          projects.slice(0,maxElementPerColumn).map((project, index) => {
            return(
              <div style={{display : 'flex', justifyContent : 'center', marginTop : '30px'}}>
                <img src={project.imageNameFront} width="50px" alt="project front"></img>
                <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '8em', cursor : 'pointer'}} 
                className='subtitle subtitle-project-index' onClick={() => goToDetailPage(project.key)}>
                    <div style={{fontSize : '18px'}}>{project.name}</div>
                    <div style={{fontSize : '12px'}}>{project.subtitle}</div>
                  </div>
                <img src={project.imageNameBack} width="12px" alt="project back"></img>
            </div>
            )
          })
        }
      </div>
      <div style={{marginTop : '20px', marginLeft : '60px'}}>
          {
            projects.slice(maxElementPerColumn).map((project) => {
              return(
                <div style={{display : 'flex', justifyContent : 'center', marginTop : '30px'}}>
                <img src={project.imageNameFront} width="50px" alt="project front"></img>
                <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center', marginTop : '0px', width : '8em', cursor : 'pointer'}} 
                className='subtitle subtitle-project-index' onClick={() => goToDetailPage(project.key)}>
                    <div style={{fontSize : '18px'}}>{project.name}</div>
                    <div style={{fontSize : '12px'}}>{project.subtitle}</div>
                  </div>
                <img src={project.imageNameBack} width="12px" alt="project back"></img>
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
          <span className='title title-my-projects'>My projects</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectIndexPage;