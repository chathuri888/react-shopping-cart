import React from 'react';
import { useDispatch } from 'react-redux';

import LinkButton from '../../components/LinkButton';
import TextArea from '../../components/TextArea';
import { resetCartData } from '../../store/cart/actions';
import { Container } from './styles';

const Success: React.FC = () => {
  const dispatch = useDispatch();
  const dataReset = () => {
    dispatch(resetCartData());
  };

  return (
    <Container>
      <TextArea lable="PAYMENT SUCCESS" />
      <LinkButton to="/" onClick={dataReset}>
        Continue Shopping
      </LinkButton>
    </Container>
  );
};

export default Success;
