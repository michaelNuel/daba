import { Box, Card, CardBody, Container, Flex, Heading, Image,  SimpleGrid, Text } from "@chakra-ui/react";
import Headingss from "../../../components/HeadingTexts/Headingss";
import StartupBar from "../../../components/StartupBar";
// need to come back and make some chnages 
export default function PreBuiltSec() {
  return (
    <SimpleGrid 
    column={1} 
    minChildWidth={"300px"}
     gap={4} 
     mt={{base:"2rem", lg:"none"}}
     py={{base:"1rem", lg:"3rem"}}>
            <Card  borderRadius={"20px"} pt={"3rem"}>
               <CardBody alignSelf={"center"}>
               <Box w={{base:290, lg:408}} alignSelf={"center"} mx={{base:"none", lg:"4rem"}}>
                 <Headingss texts="Pre-Built Portfolios" />
                 <Text py={"2rem"} lineHeight={"30px"} color={"#8B82A7"}>With borderless, quick, and low-cost crypto transactions, you can expand your business worldwide.</Text>
               </Box>
                <Flex mx={"4rem"} >
                  <Box display={{base:"none", lg:"block"}}>
                    <Image 
                     alt={"#"}
                     src={"/woman.svg"}
                     height={250}
                    />
                   </Box>
                 <Box>  
                  <Flex flexDir={"column"} bgColor={"#F8F8FD"} height={180} w={150} p={"1rem"} borderRadius={"20px"}>
                     <Box margin={"auto"} >
                        <Image 
                         src={"/Group 11520.svg"}
                         height={70}
                         alt={"#"}
                         />  
                     </Box>
                     <Box>
                        <StartupBar textVar="Fintech" colorVar="green" numberString="60%"  />
                        <StartupBar textVar="EduTech" colorVar="blue" numberString="25%"  />
                        <StartupBar textVar="Gome" colorVar="orange" numberString="50%"  />
                     </Box>
                  </Flex>
                 </Box>
                </Flex>
                </CardBody>
            </Card>

          
            <Card bgColor={"#4ECC4E"}  borderRadius={"20px"} pt={"3rem"}>
               <CardBody>
                <Box w={300} mx={"4rem"}>
                <Heading color={"white"}>Social Investing</Heading>
                <Text py={"2rem"} lineHeight={"30px"} color={"white"}>Follow experts and invest with your friends. Discuss and share investment ideas and strategies</Text>
                </Box>
                 <Flex mx={"4rem"} display={{base:"none", lg:"flex"}}>
                    <Image 
                    alt={"#"}
                    src={"/women.svg"}
                    height={250}
                     objectFit={"contain"}
                    />
                 </Flex>
               </CardBody>
            </Card>
    </SimpleGrid>
  )
}
