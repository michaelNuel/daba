'use client'
import Core from "@/Section/CoreSection/Core";
import Darkbluesec from "@/Section/DarkBlue/Darkbluesec";
import Heropage from "@/Section/HeroFollder/Heropage";
import Pros from "@/Section/Pros/Pros";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      bgColor={"#F8F8FD"}
      overflow={"hidden"}
    >
       <Heropage />
       <Core />
       <Pros />
       <Darkbluesec />
    </Box>
  )
}
