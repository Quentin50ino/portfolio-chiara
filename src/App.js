import './App.css';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloPage from './Pages/HelloPage';
import PersonalPathPage2 from './Pages/PersonalPathPage2';
import ProjectIndexPage from './Pages/ProjectIndexPage'
import PersonalPathPageDetailsPage from './Pages/PersonalPathDetailsPage';
import ProjectDetailInteriorPage from './Pages/ProjectDetailInteriorPage';
import ProjectDetailThesisPage from './Pages/ProjectDetailThesisPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HelloPage />}></Route>
      <Route path="/landing" element={<LandingPage />}></Route>
      <Route path="/personal-path" element={<PersonalPathPage2 />}></Route>
      <Route path="/personal-path-details" element={<PersonalPathPageDetailsPage />}></Route>
      <Route path="/project-index" element={<ProjectIndexPage />}></Route>
      <Route path="/project-detail-interior" element={<ProjectDetailInteriorPage />}></Route>
      <Route path="/project-detail-thesis" element={<ProjectDetailThesisPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
