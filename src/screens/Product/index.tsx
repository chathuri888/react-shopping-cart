import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import ModalProduct from "../../components/ProductListModal";
import TextArea from "../../components/TextArea";
import { Product as ProductModel } from "../../entities/Product";
import { normalizeItem } from "../../library/Normalize";
import { addProduct } from "../../store/cart/actions";
import { CartStateItem } from "../../store/cart/types";
import { Container, Image, Name, Price, Input } from "./styles";

interface ProductProps {
  product: ProductModel;
  selectedItems: CartStateItem[];
}

const PLACEHOLDERIMG = "https://via.placeholder.com/150x200";

const Product: React.FC<ProductProps> = ({ product, selectedItems }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [srcImg, setImg] = useState("");
  const [isImgSet, setPlaceImg] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const formattedPrice = useMemo(() => `LKR ${product.price}`, [product.price]);
  const productId = product?.id ? product?.id : 0;
  const selectedItemCount = normalizeItem(selectedItems, productId);
  const addCardItem =
    selectedItemCount < product.stock && quantity <= product.stock;

  const handleImageLoad = useCallback(() => {
    if (!isImgSet) {
      setImg(product.imageUrl);
      setPlaceImg(true);
    }
  }, [srcImg]);

  const handleImageError = useCallback(() => {
    setImg(PLACEHOLDERIMG);
  }, [srcImg]);

  const handleAddToCart = (value: string) => {
    const quantityCount = value === "modal" ? 1 : quantity;
    dispatch(addProduct(product, quantityCount));
    setQuantity(0);
  };

  const onChangeText = useCallback(
    (value: string) => {
      const valueFormat = parseInt(value);
      setQuantity(valueFormat);
    },
    [quantity]
  );

  const addCartButtonShow = quantity > 0;

  return (
    <Container>
      <ModalProduct
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        product={product}
        handleAddToCart={() => handleAddToCart("modal")}
        formattedPrice={formattedPrice}
        srcImg={srcImg}
        addCardItem={addCardItem}
      />

      <Image
        src={srcImg}
        title={product.name}
        onLoad={handleImageLoad}
        onError={handleImageError}
        alt={product.name}
      />
      <Name>{product.name}</Name>
      <Price>{formattedPrice}</Price>
      <label className="price">
        <Input
          value={quantity}
          onChange={(e: { target: { value: string } }) =>
            onChangeText(e.target.value)
          }
        />
      </label>

      <Button onPress={() => setIsOpen(!isOpen)} lable="View" />
      {!addCardItem ? (
        <TextArea color="#e20c16" lable="No item" />
      ) : (
        <>
          {!addCartButtonShow ? (
            <TextArea lable="please quantity add" />
          ) : (
            <Button
              onPress={() => handleAddToCart("productList")}
              lable="Add to cart"
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Product;
