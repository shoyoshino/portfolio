import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ValorantSeasonChecker from './components/works/ValorantSeasonChecker';
import TdkSevenSeas from './components/works/TdkSevenSeas';
import ScrollTop from './components/ScrollTop';
import TdkCeatec2022 from './components/works/TdkCeatec2022';
import Wakamatuunyu from './components/works/Wakamatuunyu';
import WordpressCorporate from './components/works/WordpressCorporate';
import ComfyHouse from './components/works/ComfyHouse';

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works/valorant_season_checker" element={<ValorantSeasonChecker />} />
          <Route path="/works/tdk_seven_seas" element={<TdkSevenSeas />} />
          <Route path="/works/tdk_ceatec_2022" element={<TdkCeatec2022 />} />
          <Route path="/works/wakamatuunyu" element={<Wakamatuunyu />} />
          <Route path="/works/wordpress_corporate" element={<WordpressCorporate />} />
          <Route path="/works/comfyhouse" element={<ComfyHouse />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
