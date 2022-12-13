import React from "react";
import { baseTheme } from "../src/theme";

interface IColourTile {
  colour: string;
  name: string;
}

const ColourTile: React.FC<IColourTile> = ({ colour, name }) => {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: colour,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ textAlign: "center" }}>{name}</span>
    </div>
  );
};

const colors = baseTheme.colors as Record<string, string>;

const ColourTiles: React.FC = () => {
  const tiles = Object.keys(colors).map((key) => {
    return <ColourTile colour={colors[key] as string} name={key} key={key} />;
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>{tiles}</div>
  );
};

export { ColourTile, ColourTiles };
