import { Box, Flex, Image } from "@chakra-ui/react"

type MiniImgCoreProps ={
    stock :{
        id:string
        imgs:string
    }[]
}

export default function MiniImgCore(props:MiniImgCoreProps) {
  return (
    <Flex justify={"space-evenly"} bgColor={"white"} py={"1rem"} borderRadius={"20px"} zIndex={-1}>
      {props.stock.map( images => {
        return (
            <Box alignSelf={"center"} key={images.id}>
                <Image 
                src={images.imgs}
                 alt="mini img"
                 height={8}
                />
            </Box>
        )
      })}
    </Flex>
  )
}
