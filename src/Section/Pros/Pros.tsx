import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import ProsGrid from './ProsGrid'


export default function Pros() {
  return (
    <Box mb={"4rem"}>
       <Container maxWidth={"7xl"} >
         <Box display={"grid"} placeItems={"center"} margin={"auto"} >
           <Flex py={".3rem"}>
            <Heading px={".2rem"} color={"#16054E"}>You will</Heading>
            <Heading px={".2rem"} color={"#8D6CFA"} >Love investing</Heading>
            <Heading px={".2rem"} color={"#16054E"}>in</Heading>
           </Flex>
           <Heading color={"#16054E"}>Africa with us</Heading>
         </Box>

         <ProsGrid />
       </Container>
    </Box>
  )
}
