import { IContentDetails } from "../../types/interfaces";

export interface Template4CardProps {
  index: number;
  iconSize: number;
  height: number;
  contentWidth: number;
  contentDetails: IContentDetails;
  prevIcon: () => void;
  nextIcon: () => void;
}
