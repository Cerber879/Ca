import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleObjFill, setActiveObjFill } from "./fillSettings";
import styles from "../../../../panel.module.css";
import ObjFill from "./iconFill";
import { RootState } from "../../../../../../ReduxStore";
import { setActiveObjStrokeFill } from "../strokeAndFillStatus/strokeFillSettings";
import { setActiveObjStroke } from "../strokeStatus/strokeSettings";

const ButtonObjFill = () => {
  const dispatch = useDispatch();
  const activeObjStroke = useSelector(
    (state: RootState) => state.objStrokeSettSlice.activeObjStroke
  );
  const objFillSettSlice = useSelector(
    (state: RootState) => state.objFillSettSlice
  );
  const activeObjStrokeFill = useSelector(
    (state: RootState) => state.objStrokeFillSettSlice.activeObjStrokeFill
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleObjFill({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleObjFill({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (objFillSettSlice.activeObjFill === false) {
      if (activeObjStrokeFill) dispatch(setActiveObjStrokeFill(false));
      if (activeObjStroke) dispatch(setActiveObjStroke(false));
      dispatch(setActiveObjFill(true));
    }
  };

  const buttonStyle = {
    backgroundColor: !objFillSettSlice.activeObjFill
      ? objFillSettSlice.btnStyleFill.backgroundColor
      : "#ffffff",
  };

  const objFillFillColor = !objFillSettSlice.activeObjFill
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
      <ObjFill fill={objFillFillColor} />
    </button>
  );
};

export default ButtonObjFill;
