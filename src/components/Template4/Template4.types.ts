import { IContentDetails } from "../../types/interfaces";

export interface Template4Props {
  title: string;
  contentDetailsLs: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}

export interface Template4DesignVarsProps {
  titleWidth: number;
  iconSize: number;
  height: number;
  contentWidth: number;
  centerGap: number;
  rowGap: number;
  title?: string;
  contentDetailsLs?: IContentDetails[];
}
