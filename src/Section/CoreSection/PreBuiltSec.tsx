import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Headingss from "../../../components/HeadingTexts/Headingss";

export default function () {
  return (
    <Box py={"3rem"}>
      <Flex alignSelf={"center"} justifyContent={"space-between"}>
            <Container bgColor={"white"} w={600} borderRadius={"20px"} pt={"3rem"}>
               <Box w={408} alignSelf={"center"} mx={"4rem"}>
                 <Headingss texts="Pre-Built Portfolios" />
                 <Text py={"1rem"} lineHeight={"30px"} color={"#8B82A7"}>With borderless, quick, and low-cost crypto transactions, you can expand your business worldwide.</Text>
               </Box>
                <Flex mx={"4rem"}>
                    <Image 
                     alt={"#"}
                     src={"/woman.svg"}
                     height={250}
                    />
                   
                 <Box>  
                  <Flex flexDir={"column"} bgColor={"#F8F8FD"} height={150} w={150} p={"1rem"} borderRadius={"20px"}>
                     <Box margin={"auto"} >
                        <Image 
                         src={"/Group 11520.svg"}
                         height={70}
                         alt={"#"}
                         />  
                     </Box>
                     <Box>
                        <Flex justifyContent={"space-between"}>
                          <Flex alignItems={"center"}>
                            <Box height={".4rem"} width={".4rem"} borderRadius={"50%"} bgColor={"green"}></Box>
                            <Text fontSize={".6rem"}>Fintech</Text>
                          </Flex>
                          <Box>
                             <Text fontSize={".6rem"}>60%</Text>
                          </Box>
                        </Flex>
                     </Box>
                     <Box>
                        <Flex justifyContent={"space-between"}>
                          <Flex alignItems={"center"}>
                            <Box height={".4rem"} width={".4rem"} borderRadius={"50%"} bgColor={"blue"}></Box>
                            <Text fontSize={".6rem"}>EduTech</Text>
                          </Flex>
                          <Box>
                             <Text fontSize={".6rem"}>25%</Text>
                          </Box>
                        </Flex>
                     </Box>
                     <Box>
                        <Flex justifyContent={"space-between"}>
                          <Flex alignItems={"center"}>
                            <Box height={".4rem"} width={".4rem"} borderRadius={"50%"} bgColor={"orange"}></Box>
                            <Text fontSize={".6rem"}>Gome</Text>
                          </Flex>
                          <Box>
                             <Text fontSize={".6rem"}>15%</Text>
                          </Box>
                        </Flex>
                     </Box>
                  </Flex>
                 </Box>
                </Flex>
            </Container>

          
            <Container bgColor={"#4ECC4E"} w={600} borderRadius={"20px"} pt={"3rem"}>
                <Box w={300} mx={"4rem"}>
                <Heading color={"white"}>Social Investing</Heading>
                <Text py={"1rem"} lineHeight={"30px"} color={"white"}>Follow experts and invest with your friends. Discuss and share investment ideas and strategies</Text>
                </Box>
                 <Flex mx={"4rem"}>
                    <Image 
                    alt={"#"}
                    src={"/women.svg"}
                    height={250}
                    />
                 </Flex>
            </Container>
      </Flex>
    </Box>
  )
}
