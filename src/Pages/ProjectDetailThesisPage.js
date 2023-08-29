import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LoadingPage from './LoadingPage';
import data from '../Data/upstairs';
import asterisco from '../img/asterisco_icona.png';

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
            <sup>
                <div className='chez-sup'>
                    <img src={asterisco} alt="asterisco" width="10px" height="10px"/>&nbsp;Ch<div className='flipHStatic'>&nbsp;Ze</div>
                    <img src={asterisco} alt="asterisco" width="10px" height="10px"/>
                </div>
            </sup>
        </div>
        <div className='project-label' style={{marginTop : '50px'}}>
            {selectedProject.description}
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '100px 0px 50px 0px'}} className='location-container'>
            <img className='location-ascoli' src={selectedProject.locationImage} height="450px" alt="location img"/>
            <div className='project-location-description'>{selectedProject.locationDescription}</div>
        </div>
        <div className='project-description' style={{textAlign : 'center'}}>
            <div>XI-XII century</div>
            <div style={{marginTop : '.5em'}}>600m<sup>2</sup> inside</div>
            <div style={{marginTop : '.5em'}}>150m<sup>2</sup> courtyard</div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '50px 0px'}}>
            <img src={selectedProject.topView} height='450px' alt='top view img' className='top-view-image'/>
        </div>
        <div className='project-top-view-description'>
            <div>{selectedProject.topViewDescription}</div>
            <br></br>
            <div>{selectedProject.gridsDescription}</div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '25px 0px 25px 70px'}}>
            <img src={selectedProject.animation} alt="animation gif" height="600px" className='gif'/>
        </div>
        <div className='project-top-view-description'>
            <div>{selectedProject.loversDescription}</div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '50px 0px 100px 0px'}}>
            <img src={selectedProject.assonometria} height="500px" alt="assonometria img" className='assonometria-prospetto-image'/>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', margin : '50px 0px'}}>
            <img src={selectedProject.prospettoCompleto} height='550px' alt='prospetto completo img' className='assonometria-prospetto-image'/>
        </div>
        {selectedProject.images.length!==0?
        <Carousel 
            style={{marginTop : '100px'}} 
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
                      <img src={item.image} alt="First slide" height="600px" className='carousel-render'/>
                    </div>
                  
                  <div className='carousel-description-render'>
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