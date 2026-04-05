import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AfterSchool from "./pages/AfterSchool/AfterSchool";
import Contact from "./pages/Contact/Contact";
import Icare from "./pages/Icare/Icare";
import IndividualisedPrograms from "./pages/IndividualisedPrograms/IndividualisedPrograms";
import Ndis from "./pages/Ndis/Ndis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/after-school-program" element={<AfterSchool />} />
        <Route path="/icare" element={<Icare />} />
        <Route
          path="/individualised-programs"
          element={<IndividualisedPrograms />}
        />
        <Route path="/ndis" element={<Ndis />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
