import React from 'react'
import { Box, Card, CardBody, CardHeader,Heading, Image, Text } from '@chakra-ui/react'
// import { Horse, Heart, Cube } from "phosphor-react";
 type CardssProps ={
   prosCard:{
    id:string
    imageIcon: string
    cardHeader: string
    cardText: string
   }[]
 }
export default function Cardss(props:CardssProps) {
  return (
    <>
    {props.prosCard.map( gridCards => {
      return (
        <Card borderRadius={"20px"}>
        <CardHeader margin={"auto"}>
          <Box as={"div"} position={"absolute"} top={-20} right={105}  left={105}   margin={"auto"} className='card_container'>
             <Image 
              alt={"#"}
              height={130}
              src={gridCards.imageIcon}
             />
          </Box>
        </CardHeader>
        <CardBody mt={"2rem"}>
           <Heading textAlign={"center"} fontSize={"1.6rem"} color={"#16054E"}>{gridCards.cardHeader}</Heading>
           <Text textAlign={"center"} mt={"1rem"}>{gridCards.cardText}</Text>
        </CardBody>
      </Card>
      )
    })}
    </>
  )
}
