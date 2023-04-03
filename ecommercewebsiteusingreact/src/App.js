import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import TopofNavbar from './components/TopofNavbar';
import { Box, Heading,Text,Image } from '@chakra-ui/react';
import AfterTopofNavbar from './components/AfterTopofNavbar';
import AutoPlayMethods from './components/AutomaticSliderTop';
import MultipleItems from './components/SecondSlider';
import Slider2Objects from './components/Slider2Objects';
import After2ndSlider from './components/After2ndSlider';
import ThreeIn1image from './components/ThreeIn1image';
import ThirdSlider from './components/ThirdSlider';
import BigSingleImage from './components/BigSingleImage';
import Footer from "./components/Footer"
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <Box>
      <TopofNavbar/>
  <AfterTopofNavbar/>
  <Navbar/> 
      <AllRoutes/>
  
  </Box>
  );
}

export default App;
