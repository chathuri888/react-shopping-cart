import { Container, Image, Discription } from "./styles";
import { Product } from "../../entities/Product";
import Button from "../Button";
import TextArea from "../TextArea";
import Modal from "../ModalBase";

interface OwnProps {
  onClick: Function;
  isOpen: boolean;
  product: Product;
  handleAddToCart: Function;
  srcImg: string;
  formattedPrice: string;
  addCardItem: boolean;
}

const ModalProductList = ({
  isOpen,
  onClick,
  srcImg,
  product,
  formattedPrice,
  handleAddToCart,
  addCardItem,
}: OwnProps) => {
  const modalBody = () => {
    return (
      <Container>
        <Image src={srcImg} alt={product?.name} />
        <TextArea lable={product?.name} />
        <TextArea lable={formattedPrice} />
        <Discription>{product?.description}</Discription>

        {!addCardItem ? (
          <TextArea color="#e20c16" lable="No item" />
        ) : (
          <Button onPress={() => handleAddToCart()} lable="Add to cart" />
        )}
        <Button onPress={() => onClick()} lable="Close" color="#ccc" />
      </Container>
    );
  };
  return (
    <Modal
      isOpen={isOpen}
      onClick={() => onClick()}
      modalBody={modalBody()}
    ></Modal>
  );
};

export default ModalProductList;
