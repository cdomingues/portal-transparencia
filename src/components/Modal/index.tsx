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
  
   </div>
  );
};

export default ModalPopup;
