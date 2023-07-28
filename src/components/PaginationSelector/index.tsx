// import { Box, Text } from "@chakra-ui/react"
// import React from "react"
// const PaginationSelector = ({itensPerPage,setItensPerPage}:any)=>{
//     return(
//         <Box display="flex" marginLeft="20px" paddingBottom="10px" alignContent="row">
//             <Text paddingRight="10px">Itens por página:  </Text>
//           <select value={itensPerPage} onChange={(e)=>setItensPerPage(Number(e.target.value))}>
//           <option value={3}>3</option>
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={15}>15</option>
            
//         </select>
//       </Box>
//     ) 
// }
// export default PaginationSelector

import { Box, Select, Text } from "@chakra-ui/react"
import React from "react"
const PaginationSelector = ({itensPerPage,setItensPerPage}:any)=>{
    return(
        <Box display="flex" marginLeft="20px" paddingBottom="10px" alignContent="row">
           
          <Select alignSelf="center" paddingTop="10px" bg="white" 
          ml={5}
          mb={5}
          minWidth={130}
          width={130}
           value={itensPerPage} onChange={(e)=>setItensPerPage(Number(e.target.value))}>
          <option value={3}>Mostrar 3</option>
            <option value={5}>Mostrar 5</option>
            <option value={10}>Mostrar 10</option>
            <option value={15}>Mostrar 15</option>
            
        </Select>
      </Box>
    ) 
}
export default PaginationSelector