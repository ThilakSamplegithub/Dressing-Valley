import { Box,Text,Image,} from "@chakra-ui/react"
import TopofNavbar from "./TopofNavbar"
import AfterTopofNavbar from "./AfterTopofNavbar"
import Navbar from "./Navbar"
import AutoPlayMethods from "./AutomaticSliderTop"
import Slider2Objects from "./Slider2Objects"
import After2ndSlider from "./After2ndSlider"
import ThreeIn1image from "./ThreeIn1image"
import ThirdSlider from "./ThirdSlider"
import BigSingleImage from "./BigSingleImage"
import Footer from "./Footer"
export default function NavigationBar(){
    return(
        <Box>
            {/* <TopofNavbar/>
  <AfterTopofNavbar/>
  <Navbar/>  */}
  <Text color={"#A32A91"} align={'center'} fontSize="18px" fontWeight='bold'>Free standard shipping on orders over $200 USD  </Text>
  <Box mb='40px' align="center"><Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_01b_SALE_FnF_INTL.jpg?scl=1&fmt=webp&wid=1440" alt="error"/></Box>
  <AutoPlayMethods/>
  <Text fontSize={"22px"} fontWeight="bold" color="#000000" fontFamily={'sans-serif'}mb="20px">RECOMMENDED FOR YOU</Text>
  <Slider2Objects/>
  <After2ndSlider/>
  <ThreeIn1image/>
  <ThirdSlider/>
  <BigSingleImage/>
  <Footer/>
        </Box>
    )
}