import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBtnStyleObjStrokeFill,
  setActiveObjStrokeFill,
} from "./strokeFillSettings";
import styles from "../../../../panel.module.css";
import ObjStrokeFill from "./iconStrokeFill";
import { RootState } from "../../../../../../ReduxStore";
import { setActiveObjStroke } from "../strokeStatus/strokeSettings";
import { setActiveObjFill } from "../fillStatus/fillSettings";

const ButtonObjStrokeFill = () => {
  const dispatch = useDispatch();
  const activeObjStroke = useSelector(
    (state: RootState) => state.objStrokeSettSlice.activeObjStroke
  );
  const activeObjFill = useSelector(
    (state: RootState) => state.objFillSettSlice.activeObjFill
  );
  const objStrokeFillSettSlice = useSelector(
    (state: RootState) => state.objStrokeFillSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleObjStrokeFill({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleObjStrokeFill({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (objStrokeFillSettSlice.activeObjStrokeFill === false) {
      if (activeObjStroke) dispatch(setActiveObjStroke(false));
      if (activeObjFill) dispatch(setActiveObjFill(false));
      dispatch(setActiveObjStrokeFill(true));
    }
  };

  const buttonStyle = {
    backgroundColor: !objStrokeFillSettSlice.activeObjStrokeFill
      ? objStrokeFillSettSlice.btnStyleStrokeFill.backgroundColor
      : "#ffffff",
  };

  const objStrokeFillFillColor = !objStrokeFillSettSlice.activeObjStrokeFill
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
      <ObjStrokeFill fill={objStrokeFillFillColor} />
    </button>
  );
};

export default ButtonObjStrokeFill;
