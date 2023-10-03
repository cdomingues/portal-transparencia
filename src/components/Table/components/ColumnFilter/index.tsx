import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { useFontSizeAccessibilityContext } from "../../../../context/fontSizeAccessibility";

function ColumnFilter({ column }: any) {
  const accessibility = useFontSizeAccessibilityContext()
  const { filterValue, setFilter } = column;
  return (
    <Input
      onChange={(e) => setFilter(e.target.value)}
      value={filterValue}
      mt={1}
      color="text.dark"
      bg="white"
      size="xs"
      fontSize={accessibility?.fonts?.small}
    />
  );
}

export default ColumnFilter;
