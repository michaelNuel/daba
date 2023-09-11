import { Box, Flex, Image, Text } from '@chakra-ui/react'
import HeadingText from '../../../components/HeadingTexts/HeadingText'

export default function HeroContent() {
  return (
    <Flex justifyContent={"space-between"}>
        <Box>
           <HeadingText texts='Your All-In-One Tool For' coloredText='Smart Investing' textEnding='In Africa' />
            <Box w={500} marginTop={"1rem"}>
              <Text fontSize={"24px"} lineHeight={"40px"} color={"#8B82A7"}>daba is a simple app to access investment strategies and build wealth by investing in Africa's best private and public market opportunities</Text>
            </Box>
        </Box>
        <Box>
            <Image
             alt={"hero_Image"}
             src={"/Img/Flying iPhone X Mockups copy 1.svg"}
             height={500}
            />
        </Box>

    </Flex>
  )
}
