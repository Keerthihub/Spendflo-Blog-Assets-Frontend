import { IContentDetails } from "../../types/interfaces";

export interface Template2Props {
  title: string;
  contentDetailsLs: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}

export interface Template2DesignVarsProps {
  titleWidth: number;
  iconSize: number;
  colCount: number;
  designHeight: number;
  contentWidth: number;
  columnGap: number;
  rowGap: number;
}
