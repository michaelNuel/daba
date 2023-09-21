import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function CommunityFlextw() {
  return (
    <Box mt={"3rem"} >
       <Flex justifyContent={"space-around"}>
       <Box w={400} alignSelf={"center"}>
          <Heading mb={".5rem"} color={"#16054E"}>Stay Updated</Heading>
         <Text mt={".5rem"} color={"#8B82A7"}>Get all the latest news and curated investor updates in one place - so you can stay on top of what matters and maximize your investments.</Text>
      </Box>

      <Box>
        <Image 
         alt={"#"}
         height={500}
         src={"/CommunityPics/coolGuywithbeard.svg"}
        />
      </Box>
       </Flex>
    </Box>
  )
}
