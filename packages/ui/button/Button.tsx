import React from "react";
import Button from "@mui/material/Button";

export interface IButtonProps {
  text?: string;
}

export const AlzaButton: React.FC<IButtonProps> = ({ text = "Tlacitko" }) => {
  return <Button variant="contained">{text}</Button>;
};
