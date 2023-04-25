
import {  BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BoardOfDirectors from "./pages/BoardOfDirectors/BoardOfDirectors";
// import Department from "./pages/Department/Department";
import FullStack from "./pages/FullStack/FullStack";

function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="" element={<HomeTemplate/>}>
              <Route index path="/" element={<Home/>}/>
              <Route index path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>} />
              <Route path="/board-of-director" element={<BoardOfDirectors/>} />
              <Route path="/departments">
                <Route path="fullstack" element={<FullStack/>}/>
              </Route>
          </Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
