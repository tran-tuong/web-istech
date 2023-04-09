
import {  BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="" element={<HomeTemplate/>}>
              <Route index path="/" element={<Home/>}/>
              <Route index path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>} />
              
          </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
