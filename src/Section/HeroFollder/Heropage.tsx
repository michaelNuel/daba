import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../../components/NavbarComp/Navbar'
import HeroContent from './HeroContent'

export default function Heropage() {
  return (
    <Box>
      <Container maxWidth={"7xl"}>
         <Navbar />
          <HeroContent />
     </Container>
    </Box>
  )
}
