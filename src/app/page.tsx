'use client'
import Communitysec from "@/Section/Community/Communitysec";
import Core from "@/Section/CoreSection/Core";
import Darkbluesec from "@/Section/DarkBlue/Darkbluesec";
import Heropage from "@/Section/HeroFollder/Heropage";
import Investsec from "@/Section/Investt/Investsec";
import Investt from "@/Section/Investt/Investtt";
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
       <Communitysec />
       <Investsec />
       <Investt />
    </Box>
  )
}
