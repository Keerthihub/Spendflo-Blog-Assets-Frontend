import { IContentDetails } from "../../types/interfaces";

export interface Template4RenderProps {
  titleWidth: number;
  iconSize: number;
  height: number;
  contentWidth: number;
  centerGap: number;
  rowGap: number;
  title?: string;
  contentDetailsLs?: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}
