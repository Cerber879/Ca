import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../../panel.module.css";
import TextItalic from "./iconItalic";
import { RootState } from "../../../../../../../ReduxStore";
import { setActiveTextItalic, setBtnStyleTextItalic } from "./italicSettings";

const ButtonTextItalic = () => {
  const dispatch = useDispatch();
  const textItalicSettSlice = useSelector(
    (state: RootState) => state.textItalicSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleTextItalic({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleTextItalic({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (textItalicSettSlice.activeTextItalic === false) {
      dispatch(setActiveTextItalic(true));
    } else {
      dispatch(setActiveTextItalic(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !textItalicSettSlice.activeTextItalic
      ? textItalicSettSlice.btnStyleTextItalic.backgroundColor
      : "#ffffff",
  };

  const textItalicFillColor = !textItalicSettSlice.activeTextItalic
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
      <TextItalic fill={textItalicFillColor} />
    </button>
  );
};

export default ButtonTextItalic;
