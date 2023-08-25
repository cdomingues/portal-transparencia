import Image from "next/image";
import { IconType } from "react-icons";
import styled from "styled-components"; 

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
  icon: IconType ;
  link?: string;
  group?: any[];
}>;

export type GroupRoutes = Array<{
  name: string;
  path?: string;
  element?: JSX.Element;
  icon: IconType  ;
  link?: string;
  group?: Array<{
    name: string;
    path: string;
    element?: JSX.Element;
    icon: IconType;
    link?: string;
  }>;
}>;

export interface IPublicRoute {
  name: string;
  path: string;
  icon: IconType ;
  element?: any;
  defaultPath?: string;
  link?: string;
  group?: IPublicRoute[];
  titlePage?: String;
  description?: String;
  subgroup?: boolean;
}
