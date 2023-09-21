import { Box, Container, Heading, Text } from "@chakra-ui/react";
import CommunityFlex1 from "./CommunityFlex1";
import CommunityFlextw from "./CommunityFlextw";

export default function Communitysec() {
  return (
    <Box py={"3rem"}>
       <Container maxWidth={"7xl"}>
          <Box margin={"auto"}>
              <Heading mb={".5rem"} textAlign={"center"} color={"#16054E"}>And there is more</Heading>
              <Text mt={".5rem"} textAlign={"center"} color={"#8B82A7"}>We have re-imagined the African investment experience for you </Text>
          </Box>

          <CommunityFlex1 />
          <CommunityFlextw />
       </Container>
    </Box>
  )
}
