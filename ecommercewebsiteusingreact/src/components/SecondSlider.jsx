// import React, { Component } from "react";

import { Box,Image } from "@chakra-ui/react";
// import styles from "./SecondSlider.module.css"
// import SlidingOne from "../Images/SlidingOne.png"
// export default class MultipleItems extends Component {
  // render() {
  export default function MultipleItems({img}){
    console.log(img,"is")
 
    return (
      <Box >
     
            <Image src={img} alt="error"/>
 

      </Box>
    );
  }
