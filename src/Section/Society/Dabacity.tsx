import { Box, Flex, Text } from "@chakra-ui/react";
import Buttons from "../../../components/ButtonComp/Buttons";

export default function Dabacity() {
  return (
    <Box bgImage={"/daba city 1.png"} bgRepeat={"none"} h={"90vh"} >
        <Box >
         <Flex flexDir={"column"} gap={3} alignSelf={"center"} >
          <Box w={{base:"358px", md:"503px", lg:"703px"}} mt={{base:"22rem", lg:"14rem"}}  mx={"auto"} >
           <Text 
            fontWeight={700}
            fontSize={{base:"24px", md:"36px", lg:"48px"}}
            lineHeight={{base:"30px", md:"40px", lg:"72px"}}
            textAlign={"center"}
            color={"white"}
           >Bringing the African Capital Markets straight to you</Text>
         </Box>

          <Box margin={"auto"}>
          <Buttons buttons="Get Started" />
          </Box>
         </Flex>
       </Box>
    </Box>
  )
}
