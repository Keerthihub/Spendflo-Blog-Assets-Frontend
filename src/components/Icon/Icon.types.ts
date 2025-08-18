import * as PhosphorIcons from "phosphor-react";

export type IconName = keyof typeof PhosphorIcons;

export interface IconProps {
  iconSize: number;
  iconName: IconName;
  color: string;
}
