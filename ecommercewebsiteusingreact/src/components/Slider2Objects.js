import { Box,Image,Icon } from "@chakra-ui/react";
import {ArrowBackIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import Slider from "react-slick";
import styles from "./Slider2Objects.module.css"
import {GrCaretNext,GrCaretPrevious} from "react-icons/gr"
import React, { useContext } from "react"
import MultipleItems from "./SecondSlider";
import { ObjContext } from "../Context/ContextApi";
export default function Slider2Objects(){
    const{arrOfObj1}=useContext(ObjContext)
    function NextArrow(props) {
      const { className, onClick } = props;
      return (
        <div
        style={{marginTop:"-50px"}}
          className={className}
          onClick={onClick}
        >
          <ArrowForward />
        </div>
      );
    }
    function PrevArrow(props) {
      const { className, onClick } = props;
      return (
        <div
        style={{marginTop:"-50px"}}
          className={className}
          onClick={onClick}
        >
          <ArrowPrevious />
        </div>
      );
    }
    function ArrowForward(){
      return (
        <Icon color="blue" w="30px" h="100px" border="1px solid gray" fontSize="30px" as={GrCaretNext} />
      )
    }
    function ArrowPrevious(){
      return (
        <Icon color="blue" w="30px" mr="10px" h="100px" border="1px solid gray" fontSize="30px" as={GrCaretPrevious} />
      )
    }
    const settings = {
        dots:true,
        infinite: false,
        speed: 500,
        slidesToShow:5,
        swipeToSlide: true,
        slidesToScroll:5,
        nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
        initialSlide: 0,
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
  
     {arrOfObj1.map(({img},i)=><MultipleItems key={i} img={img}/>)}
   
    </Slider>
    </Box>
 )
}