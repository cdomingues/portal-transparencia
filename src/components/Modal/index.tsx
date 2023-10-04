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
          Transição para o Novo Portal de Transparência em Andamento
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Estamos atualmente em processo de transição para nosso novo Portal de
          Transparência. <br />
          Durante essa fase, você poderá experienciar algumas interrupções no
          serviço ou lentidão na navegação.
          <br /><br />
          Agradecemos sua paciência e compreensão enquanto trabalhamos para
          melhorar sua experiência.
          <br />
          <br />
          Caso queira acessar o conteúdo do portal anterior, acesse o link{" "}
          <Link
            color="blue.500"
            href="https://portaldatransparencia.mogidascruzes.sp.gov.br/"
            isExternal
          >
            Portal versão anterior
          </Link>
          .
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalPopup;
