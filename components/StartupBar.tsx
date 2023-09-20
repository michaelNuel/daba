import { Box, Flex, Text } from "@chakra-ui/react";
type StartupBarProps = {
  textVar: string
  colorVar: string
  numberString: string
}
export default function StartupBar(props:StartupBarProps) {
  return (
    <Flex justifyContent={"space-between"} py={".4rem"}>
    <Flex alignItems={"center"}>
      <Box height={".4rem"} width={".4rem"} borderRadius={"50%"} bgColor={props.colorVar}></Box>
      <Text fontSize={".6rem"}>{props.textVar}</Text>
    </Flex>
    <Box>
       <Text fontSize={".6rem"}>{props.numberString}</Text>
    </Box>
  </Flex>
  )
}
