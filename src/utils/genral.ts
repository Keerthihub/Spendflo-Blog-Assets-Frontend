import { colors } from "../constants/colors";

export const getRandomNumber = (length: number) => {
  const randomIndex = Math.floor(Math.random() * length);
  return randomIndex;
};

export const getRandomColor = () => {
  const colorsLen = colors.length;
  return colors[getRandomNumber(colorsLen)];
};
