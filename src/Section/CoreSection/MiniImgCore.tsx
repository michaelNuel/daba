import { Box, Flex, Image } from "@chakra-ui/react"

type MiniImgCoreProps ={
    stock :{
        id:string
        imgs:string
    }[]
}

export default function MiniImgCore(props:MiniImgCoreProps) {
  return (
    <Flex justify={"space-around"} bgColor={"white"} py={"1rem"} borderRadius={"20px"} zIndex={100000} position={"relative"}>
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
