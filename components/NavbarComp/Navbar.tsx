import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Buttons from "../ButtonComp/Buttons";


type NavbarProps ={
  linkstitle :{
    title:string
    id: string
  }[]
}


export default function Navbar(props:NavbarProps) {
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
          height={5}
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
          {props.linkstitle.map( titles => {
             return (
              <Box as={"li"} key={titles.id}>
                <Link 
                 fontSize={"16px"}
                >{titles.title}</Link>
              </Box>
             )
          })}
        </Flex>

        <Buttons />
      </Flex>

    </Flex>
  )
}
