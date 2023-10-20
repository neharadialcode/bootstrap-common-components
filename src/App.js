import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./views/Header";
import Hero from "./views/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={ <Header/>} />
          <Route path="/hero" element={ <Hero/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
