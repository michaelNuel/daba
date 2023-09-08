import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../../components/NavbarComp/Navbar'

export default function Heropage() {
  return (
    <Box>
      <Container maxWidth={"7xl"}>
         <Navbar />
     </Container>
    </Box>
  )
}
