import { Box,Image } from "@chakra-ui/react";
import Singlepic from "../Images/Singlepic.png"
export default function BigSingleImage(){
    return<Box ml="40px" mt="60px" mb='60px'>
        <Image src={Singlepic} alt="err"/>
    </Box>
}