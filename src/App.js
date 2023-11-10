import "./App.css";
import "./aboutUs.css";
import "./hero.css";
import "./form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import Hero from "./views/Hero";
import Main from "./components/Main";
import AboutUs from "./views/AboutUs";
import Form from "./views/Form";
import Slider from "./components/slider/AboutSlider";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/footer/Footer";
import RoadMap from "./components/roadMap/RoadMap";
import OurTeam from "./components/team/OurTeam";
import VideoPage from "./components/video/VideoPage";


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
          <Route path="/video" element={<VideoPage />} />

          <Route path="/slider" element={<Slider />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/roadMap" element={<RoadMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
