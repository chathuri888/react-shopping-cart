import { Text } from './styles';

interface OwnProps {
  lable?: string;
}

const TextArea = ({ lable }: OwnProps) => {
  return <Text>{lable}</Text>;
};

export default TextArea;
