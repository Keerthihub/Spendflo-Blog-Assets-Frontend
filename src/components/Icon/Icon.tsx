import React from "react";
import * as PhosphorIcons from "phosphor-react";
import { IconProps } from "./Icon.types";

const Icon: React.FC<IconProps> = ({ iconName, iconSize, color }) => {
  const IconComponent = PhosphorIcons[iconName] as React.FC<any>;
  return <IconComponent size={iconSize} color={color} />;
};

export default Icon;
