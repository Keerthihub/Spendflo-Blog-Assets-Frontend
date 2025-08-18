import { IContentDetails } from "../../types/interfaces";

export interface Template5CardProps {
  index: number;
  iconSize: number;
  height: number;
  boxHeight: number;
  contentWidth: number;
  contentDetails: IContentDetails;
  prevIcon: () => void;
  nextIcon: () => void;
}
