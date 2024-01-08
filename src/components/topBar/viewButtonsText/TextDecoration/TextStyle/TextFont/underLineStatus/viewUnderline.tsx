import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../../panel.module.css";
import TextUnderLine from "./iconUnderline";
import { RootState } from "../../../../../../../ReduxStore";
import {
  setActiveTextUnderLine,
  setBtnStyleTextUnderLine,
} from "./underLineSettings";

const ButtonTextUnderLine = () => {
  const dispatch = useDispatch();
  const textUnderLineSettSlice = useSelector(
    (state: RootState) => state.textUnderLineSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleTextUnderLine({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleTextUnderLine({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (textUnderLineSettSlice.activeTextUnderLine === false) {
      dispatch(setActiveTextUnderLine(true));
    } else {
      dispatch(setActiveTextUnderLine(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !textUnderLineSettSlice.activeTextUnderLine
      ? textUnderLineSettSlice.btnStyleTextUnderLine.backgroundColor
      : "#ffffff",
  };

  const textUnderLineFillColor = !textUnderLineSettSlice.activeTextUnderLine
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
      <TextUnderLine fill={textUnderLineFillColor} />
    </button>
  );
};

export default ButtonTextUnderLine;
