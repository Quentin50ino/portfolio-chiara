import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import { useEffect, useState } from 'react';
import projectsData from '../Data/projects.json';
import Carousel from 'react-bootstrap/Carousel';
import LoadingPage from './LoadingPage';
import ingresso from '../img/INGRESSO.png';
import divano from '../img/DIVANO ph 2.png';
import studio1 from '../img/STUDIO1 ph.png'

function ProjectDetailThesisPage() {
    
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
        <div style={{display : 'flex', justifyContent : 'center', margin : '100px 0px'}}>
            <img style={{marginRight : '80px'}} src={selectedProject.locationImage} height="450px"/>
            <div className='project-location-description'>{selectedProject.locationDescription}</div>
        </div>
        <div className='project-description'>
            <div>XI-XII century</div>
            <div style={{marginTop : '.5em'}}>diameter:31m</div>
            <div style={{marginTop : '.5em'}}>600m<sup>2</sup> inside</div>
            <div style={{marginTop : '.5em'}}>150m<sup>2</sup> courtyard</div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '50px 0px'}}>
            <img src={selectedProject.topView} height='450px'/>
        </div>
        <div className='project-top-view-description'>
            <div>{selectedProject.topViewDescription}</div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '50px 0px'}}>
            <img src={selectedProject.prospettoCompleto} height='550px'/>
        </div>
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

export default ProjectDetailThesisPage;