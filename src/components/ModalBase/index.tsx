import { ModalProvider } from "styled-react-modal";

import { StyledModal } from "./styles";

interface OwnProps {
  isOpen: boolean;
  onClick: Function;
  modalBody: any;
}

const ModalRNC = ({ isOpen, onClick, modalBody }: OwnProps) => {
  return (
    <ModalProvider>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => onClick()}
        onEscapeKeydown={() => onClick()}
      >
        {modalBody}
      </StyledModal>
    </ModalProvider>
  );
};

export default ModalRNC;
