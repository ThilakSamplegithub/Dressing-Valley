// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,Image } from "@chakra-ui/react";
import TopPicinImageslider from '../Images/TopPicinImageslider.png'
import SunGlassesforslider from "../Images/SunGlassesforslider.png"
import Carmen3rdImage from "../Images/Carmen3rdImage.png"
import NecklacedWomen from "../Images/NecklacedWomen.png"
import LastSliderPic from "../Images/LastSliderPic.png"
import styles from "./AutoPlayMethods.module.css"
export default function AutoPlayMethods(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    console.log(styles)
    return (
      <Box  m='auto' key={"carousel1"} className={styles.slider1}>
        {/* <h2>Auto Play & Pause with buttons</h2> */}
        <Slider  {...settings}>
          <Box>
            <Image src={TopPicinImageslider} alt="1stimage"/>
          </Box>
          <Box>
           <Image src={SunGlassesforslider} alt="2ndImage"/>
          </Box>
          <Box>
            <Image src={Carmen3rdImage} alt="3rdImage"/>
          </Box>
          <Box>
            <Image src={NecklacedWomen} alt="4thImg"/>
          </Box>
          <Box>
           <Image src={LastSliderPic} alt="error"/>
          </Box>
        </Slider>
      </Box>
    );
  }

// lets check chatGpt code for adjustable taskbar
