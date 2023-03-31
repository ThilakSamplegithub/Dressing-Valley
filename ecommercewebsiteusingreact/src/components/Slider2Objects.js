import { Box,Image } from "@chakra-ui/react";
import SlidingOne from "../Images/SlidingOne.png";
import {ArrowBackIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import Slider from "react-slick";
import styles from "./Slider2Objects.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react"
import Slider2 from "../Images/Slider2.png"
import Slider4 from "../Images/Slider4.png"
import Slider5 from "../Images/Slider5.png"
import Slider6 from "../Images/Slider6.png"
import Slider7 from "../Images/Slider7.png"
import Slider8 from "../Images/Slider8.png"
import Slider9 from "../Images/Slider9.png"
import Slider11 from "../Images/Slider11.png"
import Slider12 from "../Images/Slider12.png"
import MultipleItems from "./SecondSlider";
export default function Slider2Objects(){
    const arrOfObj=[
        {img:SlidingOne},
        {img:Slider2},
        {img:Slider4},
        {img:Slider5},
        {img:Slider6},
        {img:Slider7},
        {img:Slider8},
        {img:Slider9},
        {img:Slider11},
        {img:Slider12},
    ]
    // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    //     <Image src={<ArrowBackIcon/>} alt="prevArrow" {...props} />
    //   );
    
    //   const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    //     <Image src={<ArrowForwardIcon/>} alt="nextArrow" {...props} />)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow:5,
        slidesToScroll:5,
        initialSlide: 0,
    //     prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
 return(
    <Box className={styles.responsiveness}>
    <Slider {...settings}>
  
     {arrOfObj.map(({img},i)=><MultipleItems key={i} img={img}/>)}
   
    </Slider>
    </Box>
 )
}