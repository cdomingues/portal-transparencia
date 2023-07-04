import { Box, Text } from "@chakra-ui/react"
import React from "react"
const PaginationSelector = ({itensPerPage,setItensPerPage}:any)=>{
    return(
        <Box display="flex" marginLeft="20px" paddingBottom="10px" alignContent="row">
            <Text paddingRight="10px">Itens por página:  </Text>
          <select value={itensPerPage} onChange={(e)=>setItensPerPage(Number(e.target.value))}>
          <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            
        </select>
      </Box>
    ) 
}
export default PaginationSelector

