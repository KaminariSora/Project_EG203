import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home/home_template';
import Section1_1 from './Components/section1_1';
import SliderTest from './Components/slider-test';
import Section4_1 from './Components_4/section4_1';
import PageSection2_2 from './Components_2/section2_2';
import PageSection2_1 from './Components_2/section2';
import Section5 from './Components_5/section5';
import Section3_1 from './Components_3/section3_1';
import Section3_2 from './Components_3/section3_2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Section1_1" element={<Section1_1 />} />
      <Route path="/Section2_1" element={<PageSection2_1 />} />
      <Route path="/Section2_2" element={<PageSection2_2 />} />
      <Route path="/Section3_1" element={<Section3_1 />} />
      <Route path="/Section3_2" element={<Section3_2 />} />
      <Route path="/Section4_1" element={<Section4_1 />} />
      <Route path="/Section5_1" element={<Section5 />} />
      <Route path="/Slider-test" element={<SliderTest />} />
    </Routes>
  );
}

export default App;
