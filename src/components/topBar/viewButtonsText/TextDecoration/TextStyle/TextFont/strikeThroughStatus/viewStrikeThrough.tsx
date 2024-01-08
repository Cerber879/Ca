import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../../panel.module.css";
import TextStrikeThrough from "./iconStrikeThrough";
import { RootState } from "../../../../../../../ReduxStore";
import {
  setActiveTextStrikeThrough,
  setBtnStyleTextStrikeThrough,
} from "./strikeThroughSettings";

const ButtonTextStrikeThrough = () => {
  const dispatch = useDispatch();
  const textStrikeThroughSettSlice = useSelector(
    (state: RootState) => state.textStrikeThroughSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (textStrikeThroughSettSlice.activeTextStrikeThrough === false) {
      dispatch(setActiveTextStrikeThrough(true));
    } else {
      dispatch(setActiveTextStrikeThrough(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !textStrikeThroughSettSlice.activeTextStrikeThrough
      ? textStrikeThroughSettSlice.btnStyleTextStrikeThrough.backgroundColor
      : "#ffffff",
  };

  const textStrikeThroughFillColor =
    !textStrikeThroughSettSlice.activeTextStrikeThrough ? "#ffffff" : "#3f51b5";

  return (
    <button
      className={`${styles.text} ${styles.svg_btn}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      <TextStrikeThrough fill={textStrikeThroughFillColor} />
    </button>
  );
};

export default ButtonTextStrikeThrough;
