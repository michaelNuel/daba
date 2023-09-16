import { Box, Heading } from '@chakra-ui/react'
type HeadingTextProps = {
    texts: string
    coloredText: string
    textEnding: string 
}

export default function HeadingText(props:HeadingTextProps) {
  return (
    <Box width={400} lineHeight={"64px"}>
      <Heading lineHeight={"64px"} fontSize={"48px"} color={"#16054E"}>{props.texts}</Heading>
      <Heading lineHeight={"64px"} fontSize={"48px"} color={"#8D6CFA"}>{props.coloredText}</Heading>
      <Heading   fontSize={"48px"} color={"#16054E"}>{props.textEnding}</Heading>
    </Box>
  )
}
