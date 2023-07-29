import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LoadingPage from './LoadingPage';
import data from '../Data/upstairs';

function ProjectDetailThesisPage() {
    
    const navigate = useNavigate();
    let selectedProject = data;
    let [loading, setLoading] = useState(true);
    let [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    })

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
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
            <img style={{marginRight : '80px'}} src={selectedProject.locationImage} height="450px" alt="location img"/>
            <div className='project-location-description'>{selectedProject.locationDescription}</div>
        </div>
        <div className='project-description'>
            <div>XI-XII century</div>
            <div style={{marginTop : '.5em'}}>600m<sup>2</sup> inside</div>
            <div style={{marginTop : '.5em'}}>150m<sup>2</sup> courtyard</div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '50px 0px'}}>
            <img src={selectedProject.topView} height='450px' alt='top view img'/>
        </div>
        <div className='project-top-view-description'>
            <div>{selectedProject.topViewDescription}</div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '25px 0px 25px 70px'}}>
            <img src={selectedProject.animation} alt="animation gif" height="600px"/>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '100px 0px'}}>
            <img src={selectedProject.sezione} height="450px" alt="sezione img"/>
            <img src={selectedProject.assonometria} height="450px" alt="assonometria img"/>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '50px 0px'}}>
            <img src={selectedProject.prospettoCompleto} height='550px' alt='prospetto completo img'/>
        </div>
        {selectedProject.images.length!==0?
        <Carousel 
            style={{marginTop : '100px', height  : '650px'}} 
            activeIndex={activeIndex} 
            onSelect={handleSelect} 
            interval={null} variant="dark" 
            className={`${selectedProject.images.length===1 ? "carousel-no-arrow" : (activeIndex === 0 ? "carousel-no-left-arrow" : (activeIndex === selectedProject.images.length - 1 ? "carousel-no-right-arrow" : ""))}`}>
        {
            selectedProject.images.map((item) => {
                return(
                <Carousel.Item interval={null}>
                    <div className='project-label'>
                        {item.label}
                    </div>
                    <div className="d-flex justify-content-center">
                      <img src={item.image} alt="First slide" height="600px"/>
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