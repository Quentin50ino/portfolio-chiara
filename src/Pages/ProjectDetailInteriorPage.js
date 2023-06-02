import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import { useState } from 'react';
import projectsData from '../Data/projects.json';
import Carousel from 'react-bootstrap/Carousel';

function ProjectDetailInteriorPage() {
    
    const navigate = useNavigate();
    const projects = projectsData;
      let [selectedProject, ] = useState(() => {
        return projects.filter((project) => project.key === new URL(window.location.href).searchParams.get("projectKey"))[0]
      });

  return (
    <div>
        <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/project-index')} alt="back arrow"/>
        <div style={{display : 'flex', justifyContent : 'center'}}>
            <img src={selectedProject.bannerImage} width="800px"/>
        </div>
        <div className='project-title'>
            {selectedProject.name}
        </div>
        <div className='project-description'>
            {selectedProject.description}
        </div>
        {selectedProject.informations.length!==0?<Carousel variant="dark" style={{marginTop : '100px'}} className={`${selectedProject.informations.length===1 ? "carousel-no-arrow" : ""}`}>
        {
            selectedProject.informations.map((item) => {
                return(
                <Carousel.Item interval={null}>
                    <div className='project-label'>
                        {item.label}
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={item.image} alt="First slide" height="500px"/>
                    </div>
                </Carousel.Item>
             )
            })
        }
        </Carousel>:null}
        {selectedProject.shortDescription?<div className='project-short-description'>
            {selectedProject.shortDescription.toUpperCase()}
        </div>:null}
        {selectedProject.images.length!==0?<Carousel variant="dark" style={{marginTop : '100px', height  : '750px'}}>
        {
            selectedProject.images.map((item) => {
                return(
                <Carousel.Item interval={null}>
                    <div className='project-label'>
                        {item.label}
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={item.image} alt="First slide" height="700px"/>
                    </div>
                  
                  <div className='carousel-description'>
                        {item.description}
                    </div>
                </Carousel.Item>
             )
            })
        }
        </Carousel>:null}
    </div>
  );
}

export default ProjectDetailInteriorPage;