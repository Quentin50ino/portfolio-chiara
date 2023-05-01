import { useNavigate } from 'react-router';
import '../App.css';
import arrowLeft from '../img/arrow-left.svg';
import { useState } from 'react';
import presentazioneCarriera from '../img/presentazione_carriera.png';

function PersonalPathPage() {
    
    const navigate = useNavigate();
    const [firstStep, setFirstStep] = useState(false);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [fourthStep, setFourthStep] = useState(false);
    const [fifthStep, setFifthStep] = useState(false);

    function onClickFirstStep(){
      setFirstStep(true);
    }

    function onClickSecondStep(){
      //setFirstStep(false);
      setSecondStep(true);
    }

    function onClickThirdStep(){
      //setSecondStep(false);
      setThirdStep(true);
    }

    function onClickFourthStep(){
      //setThirdStep(false);
      setFourthStep(true);
    }

    function onClickFifthStep(){
      setFifthStep(true);
      navigate('/project-index');
    }

  return (
    <div>
      <div style={{display : 'flex', marginTop : '40px'}}>
      <div style={{width : '50%'}}>
        <div style={{display : 'flex'}}>
        <img src={arrowLeft} className='back-arrow' onClick={() => navigate('/landing')} alt="back arrow"/>
          <div className='path-title' style={{marginLeft : '4em'}}>education
          {!firstStep && !secondStep && !thirdStep && !fourthStep?<span className='blob red' style={{fontSize : '60px'}} onClick={() => onClickFirstStep()}>*</span>:null}
            {firstStep?<div className='path-subtitle typewriter'>
            <div>2013-2018 - Scientific high school N.Rodolico; Florence</div> 
            <div>2018-2021 - IAAD; Torino</div>
            </div>:null}
          </div>
        </div>
        <img src={presentazioneCarriera} width="600px" className='path' alt='presentazione di carriera'></img>
        <div style={{display : 'flex', justifyContent : 'start', marginLeft: '40px'}}>
          <div className='path-title' style={{width : '68%'}}>languages
          {!thirdStep && secondStep?<span className='blob red' style={{fontSize : '60px'}} onClick={() => onClickThirdStep()}>*</span>:null}
            {thirdStep?<div className='path-subtitle typewriter'>
            <div>Italian _ native language</div>
            <div>English _ Level B2 (TOEIC)</div>
            </div>:null}
          </div>
          <div className='path-title' style={{width : '32%', marginTop : '60px'}}>
            projects
            {!fifthStep && fourthStep?<span className='blob red' style={{fontSize : '60px'}} onClick={() => onClickFifthStep()}>*</span>:null}
          </div>
        </div>
      </div>
      <div style={{width : '50%'}}>
      <div style={{display : 'flex', justifyContent : 'start', marginLeft: '40px', height : '40%'}}>
          <div className='path-title'><div>additional information</div>
          {!fourthStep && thirdStep?<span className='blob red' style={{fontSize : '60px'}} onClick={() => onClickFourthStep()}>*</span>:null}
            {fourthStep?<div className='path-subtitle typewriter'>
            <div>In the 2015 and 2017 I attended English language courses in Brighton and Oxford.</div> 
            <div>During those experiences, I added to the standard course a module focused on visits</div>
            <div>to local companies, job opportunities’ search via web and job interviews’ preparation.</div>
            <br></br>
            <div>I also attended a National Dance Council of America affiliated ballet school</div>
            <div>for 14 years, passing five exams to qualify as a teacher.</div>
            </div>:null}
          </div>
        </div>
        <div style={{display : 'flex', justifyContent : 'center', marginTop : '60px', height : '50%'}}>
          <div className='path-title'>work experience
          {!secondStep && firstStep?<span className='blob red' style={{fontSize : '60px'}} onClick={() => onClickSecondStep()}>*</span>:null}
            {secondStep?<div className='path-subtitle typewriter-work-experience'>
            <div>2017 - Tourist guide at the GAM - gallery of 
           modern art of Palazzo Pitti in Florence.</div><br></br>
           <div>2017 - Tourist guide at the museum 
           of Villa Bardini in Florence.</div><br></br>
           <div>2020 - Internship at the Serragli130 archi 
           of Florence.</div><br></br>
           <div>2021 - Internship at Amlab design studio</div><br></br>
           <div>2022 - Beginning of the freelance collaboration 
           with Aifaicasa studio in Turin</div>
            </div>:null}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default PersonalPathPage;