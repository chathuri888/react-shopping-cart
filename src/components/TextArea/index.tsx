import { Text } from "./styles";

interface OwnProps {
  lable?: string;
  color?: string;
}

const TextArea = ({ lable, color }: OwnProps) => {
  return <Text color={color}>{lable}</Text>;
};

export default TextArea;
