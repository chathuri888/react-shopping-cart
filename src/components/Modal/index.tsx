import { ModalProvider } from 'styled-react-modal';

import { Container, Image, Discription, StyledModal } from './styles';
import { Product } from '../../entities/Product';
import Button from '../Button';
import TextArea from '../TextArea';


interface OwnProps {
  onClick: Function;
  isOpen: boolean;
  product: Product;
  handleAddToCart: Function;
  srcImg: string;
  formattedPrice: string;
  addCardItem: boolean;
}

const ModalRNC = ({
  isOpen,
  onClick,
  srcImg,
  product,
  formattedPrice,
  handleAddToCart,
  addCardItem,
}: OwnProps) => {
  return (
    <ModalProvider>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => onClick()}
        onEscapeKeydown={() => onClick()}>
        <Container>
          <Image src={srcImg} title={product?.name} />
          <TextArea lable={product?.name} />
          <TextArea lable={formattedPrice} />
          <Discription>{product?.description}</Discription>

          {!addCardItem ? (
            <TextArea lable="No item" />
          ) : (
            <Button onPress={() => handleAddToCart()} lable="Add to cart" />
          )}
          <Button onPress={() => onClick()} lable="Close" color="#ccc" />
        </Container>
      </StyledModal>
    </ModalProvider>
  );
};

export default ModalRNC;
