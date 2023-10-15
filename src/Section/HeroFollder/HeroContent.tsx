import { Box, Flex, Image, Text } from '@chakra-ui/react'
import HeadingText from '../../../components/HeadingTexts/HeadingText'
import Inputbar from '../../../components/Inputbar/Inputbar'

export default function HeroContent() {
  return (
    <Flex justifyContent={"space-between"}>
        <Box alignSelf={"center"}>
           <HeadingText texts='Your All-In-One Tool For' coloredText='Smart Investing' textEnding='In Africa' />
            <Box w={350} marginTop={"1rem"}>
              <Text fontSize={"14px"} lineHeight={"30px"} color={"#8B82A7"}>daba is a simple app to access investment strategies and build wealth by investing in Africa's best private and public market opportunities</Text>
            </Box>
            <Inputbar />
        </Box>
        <Box display={{base:"none", md:"none", lg:"block"}}>
            <Image
             alt={"hero_Image"}
             src={"/Img/Flying iPhone X Mockups copy 1.svg"}
             height={500}
            />
        </Box>

    </Flex>
  )
}
