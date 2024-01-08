import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleObjStroke, setActiveObjStroke } from "./strokeSettings";
import styles from "../../../../panel.module.css";
import ObjStroke from "./iconStroke";
import { RootState } from "../../../../../../ReduxStore";
import { setActiveObjFill } from "../fillStatus/fillSettings";
import { setActiveObjStrokeFill } from "../strokeAndFillStatus/strokeFillSettings";

const ButtonObjStroke = () => {
  const dispatch = useDispatch();
  const objStrokeSettSlice = useSelector(
    (state: RootState) => state.objStrokeSettSlice
  );
  const activeObjFill = useSelector(
    (state: RootState) => state.objFillSettSlice.activeObjFill
  );
  const objStrokeFillSettSlice = useSelector(
    (state: RootState) => state.objStrokeFillSettSlice.activeObjStrokeFill
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleObjStroke({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleObjStroke({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (objStrokeSettSlice.activeObjStroke === false) {
      if (activeObjFill) dispatch(setActiveObjFill(false));
      if (objStrokeFillSettSlice) dispatch(setActiveObjStrokeFill(false));
      dispatch(setActiveObjStroke(true));
    }
  };

  const buttonStyle = {
    backgroundColor: !objStrokeSettSlice.activeObjStroke
      ? objStrokeSettSlice.btnStyleStroke.backgroundColor
      : "#ffffff",
  };

  const objStrokeFillColor = !objStrokeSettSlice.activeObjStroke
    ? "#ffffff"
    : "#3f51b5";

  return (
    <button
      className={`${styles.text} ${styles.svg_btn}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      <ObjStroke fill={objStrokeFillColor} />
    </button>
  );
};

export default ButtonObjStroke;
