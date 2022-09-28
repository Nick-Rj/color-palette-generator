import React from "react";
import PaletteModal from "./PaletteModal";

function CardPalette({ element }) {
  const [modalShow, setModalShow] = React.useState(false);
  const paletteColor = {
    width: "5rem",
    height: "3rem",
  };
  const rgbParams = element.rgbVal.split(":");
  const rgbString =
    "rgb(" + `${rgbParams[0]},${rgbParams[1]},${rgbParams[2]}` + ")";
  return (
    <div style={{ padding: ".5rem" }}>
      <div
        style={{
          ...paletteColor,
          backgroundColor: `${element.hexVal}`,
          cursor: "pointer",
        }}
        onClick={() => setModalShow(true)}
      ></div>
      <span
        style={{
          fontSize: ".7rem",
          marginTop: 0,
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        {rgbString}
      </span>
      <PaletteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        element={element}
        rgbString={rgbString}
      />
    </div>
  );
}

export default CardPalette;
