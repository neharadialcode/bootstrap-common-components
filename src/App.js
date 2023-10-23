import "./App.css";
import "./hero.css";
import "./header.css";
import './form.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import Hero from "./views/Hero";
import Main from "./components/Main";
import AboutUs from "./views/AboutUs";
import Form from "./views/Form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/header" element={<Header />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
