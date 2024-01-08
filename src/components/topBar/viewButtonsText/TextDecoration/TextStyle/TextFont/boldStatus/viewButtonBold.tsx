import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../../../panel.module.css";
import TextBold from "./iconBold";
import { RootState } from "../../../../../../../ReduxStore";
import { setActiveTextBold, setBtnStyleTextBold } from "./boldSettings";

const ButtonTextBold = () => {
  const dispatch = useDispatch();
  const textBoldSettSlice = useSelector(
    (state: RootState) => state.textBoldSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleTextBold({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleTextBold({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (textBoldSettSlice.activeTextBold === false) {
      dispatch(setActiveTextBold(true));
    } else {
      dispatch(setActiveTextBold(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !textBoldSettSlice.activeTextBold
      ? textBoldSettSlice.btnStyleTextBold.backgroundColor
      : "#ffffff",
  };

  const textBoldFillColor = !textBoldSettSlice.activeTextBold
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
      <TextBold fill={textBoldFillColor} />
    </button>
  );
};

export default ButtonTextBold;
