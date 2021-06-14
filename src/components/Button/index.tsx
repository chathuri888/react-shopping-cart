import { Button } from './styles';

interface OwnProps {
  onPress: Function;
  lable?: string;
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
