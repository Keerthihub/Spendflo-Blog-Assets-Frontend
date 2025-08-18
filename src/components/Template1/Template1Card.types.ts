import { IContentDetails } from "../../types/interfaces";

export interface Template1CardProps {
  index: number;
  iconSize: number;
  squareSize: number;
  contentWidth: number;
  contentDetails: IContentDetails;
  prevIcon: () => void;
  nextIcon: () => void;
}
