import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";


export default function CommunityFlex1() {
  return (
    <Box mt={"3rem"}>
       <Flex justifyContent={"space-around"}>
        <Box>
            <Image
             alt={"#"}
             height={500}
             src={"/CommunityPics/GroupofChicks.svg"}
            />
        </Box>

        <Box alignSelf={"center"} w={400}>
              <Heading mb={".5rem"} color={"#16054E"}>Build Community</Heading>
              <Text mt={".5rem"} color={"#8B82A7"}>We're on a mission to build Africa’s largest online community of investors and enthusiasts interested in investing in Africa. Join groups that match your interests and discuss the latest investing trends.</Text>
          </Box>
       </Flex>
    </Box>
  )
}
