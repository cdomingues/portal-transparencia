import { IconType } from "react-icons";

export type Totalizer = {
  title: string;
  amount: string;
  percentage: string;
  indicatorType?: "increase" | "decrease";
  amountProvided: string;
};

export type News = {
  title: string;
  description: string;
  link: string;
  image: string;
  date: string;
};

export type Routes = Array<{
  name: string;
  path: string;
  element?: JSX.Element;
  icon: IconType;
  link?: string;
}>;

export type GroupRoutes = Array<{
  name: string;
  path?: string;
  element?: JSX.Element;
  icon: IconType;
  link?: string;
  group?: Array<{
    name: string;
    path: string;
    element?: JSX.Element;
    icon: IconType;
    link?: string;
  }>;
}>;
