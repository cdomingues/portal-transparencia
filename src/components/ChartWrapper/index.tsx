import { ReactNode } from "react";

export function ChartWrapper({ children }: { children: ReactNode }) {
  return <div style={{ height: "400px" }}>{children}</div>;
}
