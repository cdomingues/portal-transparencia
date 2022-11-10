import React from "react";
import { Input } from "@chakra-ui/react";

function ColumnFilter({ column }: any) {
  const { filterValue, setFilter } = column;
  return (
    <Input
      onChange={(e) => setFilter(e.target.value)}
      value={filterValue}
      mt={1}
      color="text.dark"
      bg="white"
      size="xs"
    />
  );
}

export default ColumnFilter;
