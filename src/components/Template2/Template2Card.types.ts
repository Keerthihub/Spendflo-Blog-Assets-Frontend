import { IContentDetails } from "../../types/interfaces";

export interface Template2CardProps {
  index: number;
  iconSize: number;
  designHeight: number;
  contentWidth: number;
  contentDetails: IContentDetails;
  prevIcon: () => void;
  nextIcon: () => void;
}
