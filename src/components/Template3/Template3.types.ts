import { IContentDetails } from "../../types/interfaces";

export interface Template3Props {
  title: string;
  contentDetailsLs: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}

export interface Template3DesignVarsProps {
  titleWidth: number;
  iconSize: number;
  boxHeight: number;
  boxWidth: number;
  gap: number;
  title?: string;
  contentDetailsLs?: IContentDetails[];
}
