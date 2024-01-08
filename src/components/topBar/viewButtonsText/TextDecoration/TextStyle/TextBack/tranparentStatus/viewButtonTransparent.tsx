import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBtnStyleTextTransparent,
  setActiveTextTransparent,
} from "./transparentSettings";
import styles from "../../../../../panel.module.css";
import TextTransparent from "./iconTransparent";
import { RootState } from "../../../../../../../ReduxStore";
import { setActiveTextMuddy } from "../muddyStatus/muddySettings";

const ButtonTextTransparent = () => {
  const dispatch = useDispatch();
  const textMuddySettSlice = useSelector(
    (state: RootState) => state.textMuddySlice
  );
  const textTransparentSettSlice = useSelector(
    (state: RootState) => state.textTransparentSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleTextTransparent({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleTextTransparent({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (textTransparentSettSlice.activeTextTransparent === false) {
      if (textMuddySettSlice.activeTextMuddy)
        dispatch(setActiveTextMuddy(false));
      dispatch(setActiveTextTransparent(true));
    }
  };

  const buttonStyle = {
    backgroundColor: !textTransparentSettSlice.activeTextTransparent
      ? textTransparentSettSlice.btnStyleTextTransparent.backgroundColor
      : "#ffffff",
  };

  const textTransparentFillColor =
    !textTransparentSettSlice.activeTextTransparent ? "#ffffff" : "#2d44f0";

  return (
    <button
      className={`${styles.text} ${styles.svg_btn}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      <TextTransparent fill={textTransparentFillColor} />
    </button>
  );
};

export default ButtonTextTransparent;
