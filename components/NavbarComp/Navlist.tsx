import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

 


export default function Navlist() {
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
    <Box>
      <Navbar linkstitle ={linksTitle} />
    </Box>
  )
}
