import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import { useEffect, useState } from 'react';
import projectsData from '../Data/projects.json';
import Carousel from 'react-bootstrap/Carousel';
import LoadingPage from './LoadingPage';
import asterisco from '../img/asterisco_icona.png'

function ProjectDetailInteriorPage() {
    
    const navigate = useNavigate();
    const projects = projectsData;
    let [selectedProject, ] = useState(() => {
        return projects.filter((project) => project.key === new URL(window.location.href).searchParams.get("projectKey"))[0]
    });
    let [loading, setLoading] = useState(true);
    let [activeIndex, setActiveIndex] = useState(0);
    let [activeIndex2, setActiveIndex2] = useState(0);
    let [activeIndex3, setActiveIndex3] = useState(0);

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

      const handleSelect3 = (selectedIndex, e) => {
        setActiveIndex3(selectedIndex);
      };

  return (
    <div>
    {!loading?<div>
        <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/project-index')} alt="back arrow"/>
        <div style={{display : 'flex', justifyContent : 'center'}} className='banner-image'>
            {selectedProject.bannerImage?<img src={selectedProject.bannerImage} className='col-xxl-6 col-xl-6 col-lg-6 col-sm-10 col-10' alt="banner"/>:null}
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
        <div style={{display : 'flex', justifyContent : 'center'}}>
            <div className='project-description col-xxl-6 col-xl-6 col-lg-6 col-sm-10 col-10' dangerouslySetInnerHTML={{ __html: selectedProject.description }}></div>
        </div>
        {selectedProject.locations.length!==0?<Carousel activeIndex={activeIndex3} onSelect={handleSelect3} interval={null} variant="dark" style={{marginTop : '60px'}} className={`${selectedProject.locations.length===1 ? "carousel-no-arrow" : (activeIndex3 === 0 ? "carousel-no-left-arrow" : (activeIndex3 === selectedProject.locations.length - 1 ? "carousel-no-right-arrow" : ""))}`}>
        {
            selectedProject.locations.map((item) => {
                return(
                <Carousel.Item>
                    <div className='project-label'>
                        {item.label}
                    </div>
                    <div class="d-flex justify-content-center">
                        <img src={item.image} alt="First slide" style={{marginTop : '50px'}} className='location-image'/>
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
                      <img src={item.image} alt="First slide" height="500px" className='plan-image'/>
                    </div>
                </Carousel.Item>
             )
            })
        }
        </Carousel>:null}
        {selectedProject.shortDescription?
        <div style={{display : 'flex', justifyContent : 'center'}}>
        <div className='project-short-description col-xxl-4 col-xl-4 col-lg-4 col-sm-10 col-10'>
            {selectedProject.shortDescription.toUpperCase()}
        </div></div>:null}
        {selectedProject.images.length!==0?
        <Carousel 
            style={{marginTop : '50px'}} 
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
                      <img src={item.image} alt="First slide" className='col-xl-8 col-12'/>
                    </div>
                  
                  <div className='carousel-description-render margin-top-0'>
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