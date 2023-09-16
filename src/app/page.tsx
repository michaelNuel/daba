'use client'
import Core from "@/Section/CoreSection/Core";
import Heropage from "@/Section/HeroFollder/Heropage";
import { Box, Text } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box
      bgColor={"#F8F8FD"}
      overflow={"hidden"}
    >
       <Heropage />
       <Core />
    </Box>
  )
}
