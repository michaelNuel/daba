import { SimpleGrid } from "@chakra-ui/react";
import Cardss from "../../../components/CardComp/Cardss";

export default function ProsGrid() {
  const prosGrid=  [
    {
      id:"1",
      imageIcon:"/Cardss/Group.svg",
      cardHeader:"Accessible",
      cardText:"We democratize investing in Africa by making available the best opportunities across multiple African countries"
    },
    {
      id:"2",
      imageIcon:"/Cardss/Puzzle.svg",
      cardHeader:"SEC and FINRA Regulated *",
      cardText: "We a seek and hold all necessary financial service provider licenses to ensure we offer a platform that is compliant and has our users' best interest at hand."
    },
    {
      id:"3",
      imageIcon:"/Cardss/Guaranteed.svg",
      cardHeader:"Dilligent",
      cardText: "We ensure regulatory compliance, thorough due diligence and rigorous vetting of opportunities so you can invest with confidence."
    }
  ]
  return (
    <SimpleGrid mt={"11rem"} column={1} minChildWidth={"300px"} gap={3}>
        <Cardss prosCard={prosGrid}/>
    </SimpleGrid>
  )
}
