import {  Flex, Input } from "@chakra-ui/react";
import Buttons from "../ButtonComp/Buttons";

export default function Inputbar() {
  return (
    <Flex justifyContent={"space-between"} mt={{base:"2rem", lg:"2rem"}} mr={{base:"1rem", lg:"none"}}>
       <Input 
        placeholder="Enter Email Addresss"
        backgroundColor={"white"}
        mr={"1rem"}
        fontSize={".7rem"}
       />

       <Buttons buttons="Join waitlist" />
    </Flex>
  )
}
