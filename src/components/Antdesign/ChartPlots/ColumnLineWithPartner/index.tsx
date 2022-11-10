import React from "react";
import { DualAxes } from "@ant-design/plots";

function ChartColumnLineWithPartner({ config = {} }: { config: any }) {
  return <DualAxes {...(config as any)} />;
}

export default ChartColumnLineWithPartner;
