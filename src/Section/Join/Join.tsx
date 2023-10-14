import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Join() {
  return (
    <Box bgColor={"rgba(6, 1, 37, 1)"}>
       <Flex justifyContent={"space-between"}>
         <Box>
            <Flex flexDir={"column"}>
                <Box w={"566px"}>
                    <Heading color={"white"} fontWeight={700} fontSize={"48px"} lineHeight={"72px"}> 
                      Sign up today and join the future of investing in Africa
                    </Heading>
                </Box>

                <Box>
                    <Text fontWeight={400} fontSize={"24px"} lineHeight={"36px"} color={"white"}>
                    Ready to take your African investment game to the next level?  Get a piece of the biggest opportunity of our lifetime with daba!
                    </Text>
                </Box>
            </Flex>
         </Box>

         <Box>
            <Image 
             alt={"#"}
             src={"/download screens 1.png"}
             objectFit={"contain"}
            />
         </Box>
       </Flex>
    </Box>
  )
}
