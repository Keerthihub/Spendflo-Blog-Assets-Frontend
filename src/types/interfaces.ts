import { IconName } from "../components/Icon/Icon.types";

export interface ICompleteContentDetails {
  sentence: string;
  iconLs: IconName[];
  iconPos: number;
  color: string;
}

export interface IContentDetails {
  sentence: string;
  icon: IconName;
  color: string;
}
