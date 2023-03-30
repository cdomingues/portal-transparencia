import { CSSProperties, ReactNode } from "react";

export function ChartWrapper({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <div style={{ height: "400px", ...style }}>{children}</div>;
}
