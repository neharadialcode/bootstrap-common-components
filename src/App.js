import "./App.css";
import "./aboutUs.css";
import "./hero.css";
import "./header.css";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import Hero from "./views/Hero";
import Main from "./components/Main";
import AboutUs from "./views/AboutUs";
import Form from "./views/Form";
import FaqsOne from "./components/faqs/FaqsOne";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/footer/Footer";
import Vedio from "./components/vedio/Vedio";
<<<<<<< HEAD
import Slider from "./views/Slider";
import OurTeam from "./components/team/OurTeam";
=======
import RoadMap from "./components/roadMap/RoadMap";

>>>>>>> 3caaf5837762533421889ef94300a103f94ec536

function App() {
  return (
    <div className=" overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/header" element={<Header />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/vedio" element={<Vedio />} />
<<<<<<< HEAD
          <Route path="/slider" element={<Slider />} />
          <Route path="/team" element={<OurTeam/>} />
=======
          <Route path="/roadMap" element={<RoadMap />} />
>>>>>>> 3caaf5837762533421889ef94300a103f94ec536
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
