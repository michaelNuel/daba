import { Box, Flex, Text } from "@chakra-ui/react";
import Buttons from "../../../components/ButtonComp/Buttons";

export default function Dabacity() {
  return (
    <Box bgImage={"/daba city 1.png"} bgRepeat={"none"} h={"90vh"} >
        <Box >
         <Flex flexDir={"column"} gap={3} alignSelf={"center"} >
          <Box w={"703px"} mt={"14rem"}  mx={"auto"} >
           <Text 
            fontWeight={700}
            fontSize={"48px"}
            lineHeight={"72px"}
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
