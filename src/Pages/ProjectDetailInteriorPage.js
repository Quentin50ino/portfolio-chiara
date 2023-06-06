import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import { useEffect, useState } from 'react';
import projectsData from '../Data/projects.json';
import Carousel from 'react-bootstrap/Carousel';
import LoadingPage from './LoadingPage';

function ProjectDetailInteriorPage() {
    
    const navigate = useNavigate();
    const projects = projectsData;
    let [selectedProject, ] = useState(() => {
        return projects.filter((project) => project.key === new URL(window.location.href).searchParams.get("projectKey"))[0]
    });
    let [loading, setLoading] = useState(true);
    let [activeIndex, setActiveIndex] = useState(0);
    let [activeIndex2, setActiveIndex2] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            console.log("ACTIVE INDEX: ", activeIndex);
            console.log("ACTIVE INDEX 2: ", activeIndex2);
        }, 2000)
    })

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
      };

    const handleSelect2 = (selectedIndex, e) => {
        setActiveIndex2(selectedIndex);
      };

  return (
    <div>
    {!loading?<div>
        <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/project-index')} alt="back arrow"/>
        <div style={{display : 'flex', justifyContent : 'center'}}>
            {selectedProject.bannerImage?<img src={selectedProject.bannerImage} width="800px" alt="banner"/>:null}
        </div>
        <div className='project-title'>
            {selectedProject.name}
        </div>
        <div className='project-description'>
            {selectedProject.description}
        </div>
        {selectedProject.locations.length!==0?<Carousel interval={null} variant="dark" style={{marginTop : '100px'}} className={`${selectedProject.locations.length===1 ? "carousel-no-arrow" : (activeIndex === 0 ? "carousel-no-left-arrow" : (activeIndex === selectedProject.informations.length - 1 ? "carousel-no-right-arrow" : ""))}`}>
        {
            selectedProject.locations.map((item) => {
                return(
                <Carousel.Item >
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
        {selectedProject.informations.length!==0?<Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null} variant="dark" style={{marginTop : '100px'}} className={`${selectedProject.informations.length===1 ? "carousel-no-arrow" : (activeIndex === 0 ? "carousel-no-left-arrow" : (activeIndex === selectedProject.informations.length - 1 ? "carousel-no-right-arrow" : ""))}`}>
        {
            selectedProject.informations.map((item) => {
                return(
                <Carousel.Item >
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
        {selectedProject.images.length!==0?
        <Carousel 
            style={{marginTop : '100px', height  : '750px'}} 
            activeIndex={activeIndex2} 
            onSelect={handleSelect2} 
            interval={null} variant="dark" 
            className={`${selectedProject.images.length===1 ? "carousel-no-arrow" : (activeIndex2 === 0 ? "carousel-no-left-arrow" : (activeIndex2 === selectedProject.images.length - 1 ? "carousel-no-right-arrow" : ""))}`}>
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
    </div>:<LoadingPage/>}
    </div>
  );
}

export default ProjectDetailInteriorPage;