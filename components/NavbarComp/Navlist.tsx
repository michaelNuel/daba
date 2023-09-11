import { Box, Link } from "@chakra-ui/react";

type NavlistProps ={
  linkstitle :{
    id: string
    title: string
  }[]
}
 
export default function Navlist(props:NavlistProps) {

  return (
    <>
      {props.linkstitle.map( titles => {
        return (
          <Box key={titles.id} as="li">
            <Link color={"#16054E"} fontSize={"16px"}>{titles.title}</Link>
          </Box>
        )
      })}
    </>
  )
}
