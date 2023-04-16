import './App.css';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloPage from './Pages/HelloPage';
import PersonalPathPage from './Pages/PersonalPathPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HelloPage />}></Route>
      <Route path="/landing" element={<LandingPage />}></Route>
      <Route path="/personal-path" element={<PersonalPathPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
