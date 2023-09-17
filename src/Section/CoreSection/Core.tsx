import { Box, Container } from "@chakra-ui/react";
import Headingss from "../../../components/HeadingTexts/Headingss";
import CoreBody from "./CoreBody";
import PreBuiltSec from "./PreBuiltSec";


export default function Core() {
  return (
    <Box py={"3rem"}>
       <Container maxWidth={"7xl"}>
        <Box textAlign={"center"}>  
          <Headingss texts="Our Core" />
        </Box>
        <CoreBody />
        <PreBuiltSec />
       </Container>
    </Box>
  )
}
