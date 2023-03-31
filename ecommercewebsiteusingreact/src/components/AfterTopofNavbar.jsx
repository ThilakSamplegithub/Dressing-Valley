import { Box,Link,Text,Spacer,Image, Flex } from "@chakra-ui/react";

export default function AfterTopofNavbar(){
    return(
        <Flex justify={'flex-end'} pr='20px'>
            <Text  style={{display:"flex",justifyContent:"flex-end"}} pt="12px" fontFamily={"sans-serif"} fontSize={'12px'} color="#222222"><Link mr='30px'>Stores & Events</Link><Link mr='30px'>Shopping Services</Link>
            <Image src="https://assets.bloomingdales.com/feature/header-bcom/latest/images/flags/IN.png" alt="error"/><Link>INR</Link> </Text>
        </Flex>
    )
}