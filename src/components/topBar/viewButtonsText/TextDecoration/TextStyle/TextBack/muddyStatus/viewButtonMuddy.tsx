import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleTextMuddy, setActiveTextMuddy } from "./muddySettings";
import styles from "../../../../../panel.module.css";
import TextMuddy from "./iconMuddy";
import { RootState } from "../../../../../../../ReduxStore";
import { setActiveTextTransparent } from "../tranparentStatus/transparentSettings";

const ButtonTextMuddy = () => {
  const dispatch = useDispatch();
  const textMuddySettSlice = useSelector(
    (state: RootState) => state.textMuddySlice
  );
  const textTransparentSettSlice = useSelector(
    (state: RootState) => state.textTransparentSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleTextMuddy({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleTextMuddy({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (textMuddySettSlice.activeTextMuddy === false) {
      if (textTransparentSettSlice.activeTextTransparent)
        dispatch(setActiveTextTransparent(false));
      dispatch(setActiveTextMuddy(true));
    }
  };

  const buttonStyle = {
    backgroundColor: !textMuddySettSlice.activeTextMuddy
      ? textMuddySettSlice.btnStyleTextMuddy.backgroundColor
      : "#ffffff",
  };

  const textMuddyFillColor = !textMuddySettSlice.activeTextMuddy
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
      <TextMuddy fill={textMuddyFillColor} />
    </button>
  );
};

export default ButtonTextMuddy;
