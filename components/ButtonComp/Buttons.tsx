import { Button } from "@chakra-ui/react";
type ButtonsProps ={
  buttons: string
}

export default function Buttons(props:ButtonsProps) {
  return (
    <Button
    bgColor={"#8D6CFA"}
    py={"1.3rem"}
    color={"white"}
    px={"2rem"}
    border={"1px"}
    fontSize={"10px"}
    borderRadius={"20px"}
    >
      {props.buttons}
    </Button>
  )
}
 