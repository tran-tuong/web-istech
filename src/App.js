
import {  BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Partners from "./pages/Partners/Partners";
import BoardOfDirectors from "./pages/BoardOfDirectors/BoardOfDirectors";
import FullStack from "./pages/FullStack/FullStack";
import Department from "./pages/Department/Department";
import ScrollToTop from './ScrollToTop';
import Contact from "./pages/Contact/Contact";
import Maintainance from "./pages/Maintainance";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

          <Route path="" element={<HomeTemplate/>}>
              <Route index path="/" element={<Home/>}/>
              <Route index path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>} />
              <Route path="/partners" element={<Partners/>} />
              <Route path="/board-of-director" element={<BoardOfDirectors/>} />
              <Route path="/departments">
                <Route path="" element={<Department/>}/>
                <Route path=":id" element={<FullStack/>}/>
              </Route>
              {/* <Route path='*' element={<Navigate to={''} />} ></Route> */}
          </Route>
          <Route path="/events" element={<Maintainance/>} />
          <Route path="/internal-activities" element={<Maintainance/>} />
          <Route path="/blog" element={<Maintainance/>} />
          <Route path="/resource-hub" element={<Maintainance/>} />
          <Route path='*' element={<NotFound />}></Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
