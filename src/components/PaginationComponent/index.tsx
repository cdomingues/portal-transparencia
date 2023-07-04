import { Box, Button } from "@chakra-ui/react";
import React from "react";


const PaginationComponent = ({pages, setCurrentPage}: any) =>{
    return(
        <Box width="100%"  alignContent="center" flexDirection="row" paddingBottom="10px">{Array.from(Array(pages),(item, index)=>{
            return <Button marginLeft="20px" marginRight="20px" color="gray.500" value={index} onClick={(e)=>setCurrentPage(Number(e.target.value))}>{index + 1}</Button>
          })}</Box>
    )
}

export default PaginationComponent