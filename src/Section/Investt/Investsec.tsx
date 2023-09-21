import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";


export default function Investsec() {
  return (
    <Box bgColor={"#EAF9EA"} bgImage={"/Invest/line2.svg"} py={"3rem"}>
       <Container maxWidth={"7xl"}>
          <Box py={"5rem"} w={400}>
            <Heading color={"#16054E"}>Your Time to Invest in Africa is <span id="Now! Hop on!" className="span">  Now! Hop on!</span></Heading>
          </Box>

          <Flex justifyContent={"space-around"}>
            <Box position={"relative"}>
               <Image
                alt={"#"}
                height={350}
                src={"/Invest/dudeWithVr.svg"}
               />
               <Box position={"absolute"} top={3} right={15} zIndex={100000}><PlusCircle size={26}  color={"white"} /></Box>
            </Box>
            <Box position={"relative"}>
                <Image 
                 alt={"#"}
                 height={350}
                 src={"/Invest/Steps.svg"}
                />
                 <Box position={"absolute"} top={3} right={15} zIndex={100000}><PlusCircle size={26} color={"white"} /></Box>
            </Box>
          </Flex>
       </Container>
    </Box>
  )
}
