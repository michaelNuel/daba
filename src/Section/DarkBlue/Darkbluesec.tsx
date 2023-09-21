import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Buttons from "../../../components/ButtonComp/Buttons";

export default function Darkbluesec() {
  return (
    <Box bgColor={"#060125"} bgImage={"/Vector.svg"}>
      <Container maxWidth={"7xl"}>
         <Flex justifyContent={"space-between"} pt={"3rem"}>
            <Flex flexDir={"column"} alignSelf={"center"}>
                 <Heading w={400} fontSize={"2rem"} lineHeight={"40px"} color={"white"}>African investment intelligence at your fingertips.</Heading>
                 <Box w={300}>
                   <Text mt={"2rem"} color={"white"}>Access exclusive, comprehensive and easy to understand market intelligence and investment research reprots</Text>
                 </Box>
                  <Box mt={"2rem"}>
                     <Buttons buttons="Join waitlist" />
                 </Box>
            </Flex>

            <Box>
                <Image 
                 alt={"#"}
                 src={"/bluePage/Woman hand.svg"}
                 height ={500}
                />
            </Box>
         </Flex>
      </Container>
    </Box>
  )
}
