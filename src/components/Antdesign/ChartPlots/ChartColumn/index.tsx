import React from "react";
import { Column } from "@ant-design/plots";

function ChartColumn({ config = {} }: { config: any }) {
  return <Column {...(config as any)} />;
}

export default ChartColumn;
