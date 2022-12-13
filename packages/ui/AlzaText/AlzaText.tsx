import React from "react";

export interface ITextProps {
  text?: string;
}

export const AlzaText: React.FC<ITextProps> = ({ text = "AlzaText" }) => {
  return <p>{text}</p>;
};
