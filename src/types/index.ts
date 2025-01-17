import Image from "next/image";
//import { JSX } from "react";
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
  path?: string;
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
    path?: string;
    element?: JSX.Element;
    icon: IconType;
    link?: string;
  }>;
}>;

export interface IPublicRoute {
  name: string;
  path?:  any;
  icon: IconType ;
  element?: any;
  defaultPath?: string;
  link?: string;
  group?: IPublicRoute[];
  titlePage?: String;
  description?: String;
  subgroup?: boolean;
}


// Arquivo: src/types/concursos.ts

export interface Resource {
  cache_last_updated: null | string;
  cache_url: null | string;
  created: string;
  datastore_active: boolean;
  description: string;
  format: string;
  hash: string;
  id: string;
  last_modified: string;
  metadata_modified: string;
  mimetype: string;
  mimetype_inner: null | string;
  name: string;
  package_id: string;
  position: number;
  resource_type: null | string;
  size: number;
  state: string;
  url: string;
  url_type: string;
}

export interface Organization {
  id: string;
  name: string;
  title: string;
  type: string;
  description: string;
  image_url: string;
  created: string;
  is_organization: boolean;
  approval_status: string;
  state: string;
}

export interface Concurso {
  author: string;
  author_email: string;
  creator_user_id: string;
  id: string;
  isopen: boolean;
  license_id: string;
  license_title: string;
  maintainer: string;
  maintainer_email: string;
  metadata_created: string;
  metadata_modified: string;
  name: string;
  notes: string;
  num_resources: number;
  num_tags: number;
  organization: Organization;
  owner_org: string;
  private: boolean;
  state: string;
  title: string;
  type: string;
  url: string;
  version: string;
  resources: Resource[];
  tags: any[]; // Pode ser ajustado conforme necessário
  extras: any[]; // Pode ser ajustado conforme necessário
  groups: any[]; // Pode ser ajustado conforme necessário
  relationships_as_subject: any[]; // Pode ser ajustado conforme necessário
  relationships_as_object: any[]; // Pode ser ajustado conforme necessário
}


