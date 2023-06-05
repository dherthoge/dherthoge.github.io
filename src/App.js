import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.js"
import Resume from "./pages/Resume.js"
import RelevantCoursework from "./pages/RelevantCoursework.js"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/relevantCoursework" element={<RelevantCoursework />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
