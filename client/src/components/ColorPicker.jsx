import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = ({ setPrompt}) => {
  const snap = useSnapshot(state);
  const onColorChange = (color) => {
    state.color = color.hex
    setPrompt("For logos, set background color to " + state.color)
  }
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => onColorChange(color)}
      />
    </div>
  );
};

export default ColorPicker;
