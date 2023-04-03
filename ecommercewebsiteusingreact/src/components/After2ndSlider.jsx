import { Box, HStack,Image } from "@chakra-ui/react";

export default function After2ndSlider(){
    return(
        <HStack  m='40px 40px' >
            <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_03a_TB_Staud.jpg?scl=1&fmt=webp&wid=720" alt='imageafterslide'/>
          <Image src="https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0324_0402_D_03b_TB_LAgence.jpg?scl=1&fmt=webp&wid=720" alt="secondImage"/>
        </HStack>
    )
}