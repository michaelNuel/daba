import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Headingss from "../../../components/HeadingTexts/Headingss";
import Buttons from "../../../components/ButtonComp/Buttons";


export default function Investt() {
  return (
    <Box bgColor={"white"} py={"3rem"}>
       <Container maxW={"7xl"}>
          <Flex justifyContent={"space-between"}>
            <Box alignSelf={"center"} > 
               <Headingss texts="New to Investing in Africa?"/>
               <Text w={400} mb={"2rem"} mt={"1rem"}>Download Free Ebook now to learn more about investing in Africa 101</Text>
               <Buttons buttons="Download For Free" />
             </Box>
             <Box>
                <Image 
                  alt="#"
                  src={"/book.svg"}
                />
             </Box>
          </Flex>
       </Container>
    </Box>
  )
}
