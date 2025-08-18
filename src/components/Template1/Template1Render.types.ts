import { IContentDetails } from "../../types/interfaces";

export interface Template1RenderProps {
  titleWidth: number;
  iconSize: number;
  squareSize: number;
  contentWidth: number;
  centerGap: number;
  rowGap: number;
  title?: string;
  contentDetailsLs?: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}
