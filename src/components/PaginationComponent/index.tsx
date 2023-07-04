import { Box, Button } from "@chakra-ui/react";
import React from "react";

interface PaginationComponentProps {
  pages: number;
  setCurrentPage: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ pages, setCurrentPage }) => {
  return (
    <Box width="100%" alignContent="center" flexDirection="row" paddingBottom="10px">
      {Array.from(Array(pages), (_item, index) => (
        <Button
          key={index}
          marginLeft="20px"
          marginRight="20px"
          color="gray.500"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => setCurrentPage(Number(e.currentTarget.value))}
          value={index}
        >
          {index + 1}
        </Button>
      ))}
    </Box>
  );
};

export default PaginationComponent;
