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
  Text,
  ModalFooter,
  Link,
  Button,
} from "@chakra-ui/react";

const ModalPopup: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
   <div>
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aviso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
             Devido a manutenção nos sistemas da prefeitura, nos próximos dias o portal pode passar por alguma estabilidade
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   </div>
  );
};

export default ModalPopup;
