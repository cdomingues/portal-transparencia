import { Box, Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

interface PaginationComponentProps {
  pages: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage, pages, setCurrentPage }) => {
  const onNextClick = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box  display="flex" justifyContent="center" alignItems="center" paddingBottom="10px" width='100%'>
      <Button border='1px solid red' width='50px' onClick={onPrevClick} disabled={currentPage === 1} variant="ghost">
        <Icon color="red" fontSize="18" as={AiOutlineDoubleLeft} />
      </Button>

      <Text  bg="transparent" fontWeight="600" mx="20px">
        {currentPage} - {pages}
      </Text>

      <Button border='1px solid red' onClick={onNextClick} disabled={currentPage === pages} variant="ghost">
        <Icon color="red" fontSize="18" as={AiOutlineDoubleRight} />
      </Button>
    </Box>
  );
};

export default PaginationComponent;
