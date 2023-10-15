import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Inputbar from '../../../components/Inputbar/Inputbar'

export default function Join() {
  return (
    <Box bgColor={"rgba(6, 1, 37, 1)"} py={"2rem"}>
        <Container maxW={"7xl"}>
       <Flex justifyContent={"space-between"} gap={7}>
         <Box>
            <Flex flexDir={"column"}>
                <Box w={"566px"}>
                    <Heading color={"white"} fontWeight={700} fontSize={"48px"} lineHeight={"72px"}> 
                      Sign up today and join the future of investing in Africa
                    </Heading>
                </Box>

                <Box w={"580px"}>
                    <Text fontWeight={400} fontSize={"24px"} lineHeight={"36px"} color={"white"}>
                    Ready to take your African investment game to the next level?  Get a piece of the biggest opportunity of our lifetime with daba!
                    </Text>
                </Box>

                <Box>
                    <Inputbar />
                </Box>
            </Flex>
         </Box>

         <Box>
            <Image 
             alt={"#"}
             src={"/download screens 1.png"}
             objectFit={"contain"}
             height={500}
            />
         </Box>
       </Flex>
       </Container>
    </Box>
  )
}
