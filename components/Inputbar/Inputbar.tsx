import {  Flex, Input } from "@chakra-ui/react";
import Buttons from "../ButtonComp/Buttons";

export default function Inputbar() {
  return (
    <Flex justifyContent={"space-between"} mt={"2rem"}>
       <Input 
        placeholder="Enter Email Addresss"
        backgroundColor={"white"}
        mr={"1rem"}
        fontSize={".7rem"}
       />

       <Buttons />
    </Flex>
  )
}
