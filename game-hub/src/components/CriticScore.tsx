import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 75 ? "green" : score > 60 ? "yellow" : score < 60 ? "red" : "";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={3} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
