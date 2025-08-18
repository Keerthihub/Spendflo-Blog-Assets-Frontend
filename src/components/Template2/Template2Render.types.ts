import { IContentDetails } from "../../types/interfaces";

export interface Template2RenderProps {
  titleWidth: number;
  iconSize: number;
  colCount: number;
  designHeight: number;
  contentWidth: number;
  columnGap: number;
  rowGap: number;
  title?: string;
  contentDetailsLs?: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}
