import { IContentDetails } from "../../types/interfaces";

export interface Template3CardProps {
  index: number;
  iconSize: number;
  contentDetails: IContentDetails;
  prevIcon: () => void;
  nextIcon: () => void;
}
