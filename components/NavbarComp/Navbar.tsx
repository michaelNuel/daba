import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Buttons from "../ButtonComp/Buttons";
import Navlist from "./Navlist";




export default function Navbar() {
  const linksTitle = [
    {
      id:"1",
      title: "Blog"
    },
    {
      id:"2",
      title:"Investors Update"
    }, 
    {
      id:"3",
      title:"Patner with us"
    },
    {
      id:"4",
      title:"Raise on daba"
    }, 
    
  ]
  return (
    <Flex
    py={"2rem"}
    alignItems={"center"}
     as={"nav"}
     justifyContent={"space-between"}
    >
      <Box>
        <Image 
          src="Img/LogoImg/Group.svg"
          alt="logo"
          height={7}
          objectFit={"contain"}
        />
      </Box>     

      <Flex 
       flexDirection={"row"}
       gap={"4rem"}
       alignItems={"center"}
      >
        <Flex
         as={"ul"}
         flexDir={"row"}
         gap={"2rem"}
         listStyleType={"none"}
         >
         <Navlist linkstitle={linksTitle} />
        </Flex>

        <Buttons buttons="Join waitlist"/>
      </Flex>

    </Flex>
  )
}
