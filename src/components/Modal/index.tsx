// ModalPopup.tsx
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

const ModalPopup: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={["full", "700px"]} height={["full", "400px"]}>
        <ModalHeader>
          Sistemas da Prefeitura em Manutenção
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Nos próximos dias, os servidores da prefeitura estarão em manutenção, portanto o Portal da Transparência poderá sofrer alguma instabilidade <br />
          
          <br /><br />
          Agradecemos sua paciência e compreensão enquanto trabalhamos para
          melhorar sua experiência.
          <br />
          <br />
          
          
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalPopup;
