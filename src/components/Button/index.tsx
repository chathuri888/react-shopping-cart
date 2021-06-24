import { Button } from "./styles";

interface OwnProps {
  onPress: Function;
  lable?: any;
  color?: string;
}

const DefaultButton = ({ onPress, lable, color }: OwnProps) => {
  return (
    <Button onClick={() => onPress()} color={color}>
      {lable}
    </Button>
  );
};

export default DefaultButton;
