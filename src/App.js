import './App.css';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloPage from './Pages/HelloPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/hello" element={<HelloPage />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
