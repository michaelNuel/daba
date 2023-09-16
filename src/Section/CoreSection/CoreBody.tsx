import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MiniImgCore from "./MiniImgCore";


export default function CoreBody() {
    const stocks = [
        {
            id:'1',
            imgs:"/Img/miniImg/bar.svg"
        },
        {
            id:"2",
            imgs:"/Img/miniImg/w.svg"
        },
        {
            id:"3",
            imgs:"/Img/miniImg/hk 1.svg"
        },
        {
            id:"4",
            imgs:"/Img/miniImg/na 1.svg"
        }
    ]
  return (
    <Box 
      backgroundColor={"#9070F6"} 
      mt={"3rem"} border={"1px"} 
      borderColor={"transparent"}
      borderRadius={"20px"}
      height={400}
      mx={"4rem"}
    >
      <Flex justifyContent={"space-around"}>
        <Box 
          alignSelf={"center"} 
          mt={"8.6rem"} 
          // m={"auto"}
          width={300}>
            <Heading color={"white"}>Diversified Assets</Heading>
            <Text mt={"1rem"} lineHeight={"30px"} color={"white"}>Your first mobile app for investing and trading the best African startups, stocks and digital assets at once.</Text>
        </Box>

        <Box>
            <Image 
             translateY={"-60%"}
             src={"/Img/portrait-cool-man-with-sunglasses-copy-space-removebg-preview 2.svg"}
             alt={"potrait-cool-man-with-sunglasses"}
             height={330}
             mt={"4.3rem"}
            />
              <Box mt={"-20rem"}>
                <MiniImgCore stock={stocks} />
             </Box>
        </Box>
              {/* <Box>
                <MiniImgCore stock={stocks} />
             </Box> */}
      </Flex>
    </Box>
  )
}
