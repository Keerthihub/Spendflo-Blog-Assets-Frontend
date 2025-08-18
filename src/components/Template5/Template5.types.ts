import { IContentDetails } from "../../types/interfaces";

export interface Template5Props {
  title: string;
  contentDetailsLs: IContentDetails[];
  prevIcon: (contentPos: number) => void;
  nextIcon: (contentPos: number) => void;
}

export interface Template5DesignVarsProps {
  titleWidth: number;
  iconSize: number;
  height: number;
  boxHeight: number;
  contentWidth: number;
  columnGap: number;
}
