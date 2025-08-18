import { IContentDetails } from "../../types/interfaces";

export interface Template5RenderProps {
  titleWidth: number;
  iconSize: number;
  height: number;
  boxHeight: number;
  contentWidth: number;
  columnGap: number;
  title?: string;
  contentDetailsLs?: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}
