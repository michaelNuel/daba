import { Box, Heading } from "@chakra-ui/react";
type HeadingsProps ={
    texts: string
}

export default function Headingss(props:HeadingsProps) {
  return (
    <Box>
      <Heading color={"#16054E"}>{props.texts}</Heading>
    </Box>
  )
}
