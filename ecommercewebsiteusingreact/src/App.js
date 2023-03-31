import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import TopofNavbar from './components/TopofNavbar';
import { Box, Heading,Text,Image } from '@chakra-ui/react';
import AfterTopofNavbar from './components/AfterTopofNavbar';
import AutoPlayMethods from './components/AutomaticSliderTop';
// import ImageSlider from './components/SecondSlider';
// import MainSliderFunc from './components/MainSliderFunc';
import MultipleItems from './components/SecondSlider';
import Slider2Objects from './components/Slider2Objects';
function App() {
  return (
    <Box>
  <TopofNavbar/>
  <AfterTopofNavbar/>
  <Navbar/> 
  <Text color={"#A32A91"} align={'center'} fontSize="18px" fontWeight='bold'>Free standard shipping on orders over $200 USD  </Text>
  <Box mb='40px' align="center"><Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_01b_SALE_FnF_INTL.jpg?scl=1&fmt=webp&wid=1440" alt="error"/></Box>
  <AutoPlayMethods/>
  <Text fontSize={"22px"} fontWeight="bold" color="#000000" fontFamily={'sans-serif'}mb="20px">RECOMMENDED FOR YOU</Text>
  {/* <MultipleItems/> */}
  <Slider2Objects/>
  </Box>
  );
}

export default App;
