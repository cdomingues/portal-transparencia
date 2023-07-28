// import { Box, Button } from "@chakra-ui/react";
// import React from "react";

// interface PaginationComponentProps {
//   pages: number;
//   setCurrentPage: (page: number) => void;
// }

// const PaginationComponent: React.FC<PaginationComponentProps> = ({ pages, setCurrentPage }) => {
//   return (
//     <Box width="100%" alignContent="center" flexDirection="row" paddingBottom="10px">
//       {Array.from(Array(pages), (_item, index) => (
//         <Button
//           key={index}
//           marginLeft="20px"
//           marginRight="20px"
//           color="gray.500"
//           onClick={(e: React.MouseEvent<HTMLButtonElement>) => setCurrentPage(Number(e.currentTarget.value))}
//           value={index}
//         >
//           {index + 1}
//         </Button>
//       ))}
//     </Box>
//   );
// };

// export default PaginationComponent;
import { Box, Button,Icon , Text} from "@chakra-ui/react";
import React from "react";
import pages from "../../pages";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

interface PaginationComponentProps {
  pages: number;
  setCurrentPage: (page: number) => void;
  currentPage: any;
  onNextClick:any;
  onPrevClick:any;
  
}


/* const onPageChange= ({ pages, setCurrentPage })=>{
  setCurrentPage(page);
} */


    
const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPage,pages, setCurrentPage , onNextClick,onPrevClick}) => {
  return (
    <Box display="flex" width="50%" alignContent="center"  paddingBottom="10px" >
      
      <button onClick={onPrevClick} 
      disabled= {currentPage === 0}
      > <Icon
              color="table.primary"
              fontSize="18"
              _groupHover={{
                color: "primary",
              }}
              as={AiOutlineDoubleLeft}
            /></button>

            <Text color="table.primary" bg="transparent" alignSelf="center" fontWeight="600" marginLeft="20px"
                marginRight="20px">
                {currentPage +1 } - {pages}
          </Text>
      

<button onClick={onNextClick} 
 disabled= {currentPage === pages - 1} 
  
><Icon
              color="table.primary"
              fontSize="18"
              _groupHover={{
                color: "primary"
                
              }}
              as={AiOutlineDoubleRight}
            /></button>
    </Box>
  );
};

export default PaginationComponent;