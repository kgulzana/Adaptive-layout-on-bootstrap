import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
import Hero from "./components/Hero";
import './style.css'
import Advice from "./components/Advice";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/advice" element={<Advice />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
