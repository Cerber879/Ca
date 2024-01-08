import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleText, setActiveText } from "./textSettings";
import styles from "../../../panel.module.css";
import Text from "./iconText";
import { RootState } from "../../../../../ReduxStore";
import { setIsActive } from "../../../../../reducers/setBar/activeButton";

const ButtonText = () => {
  const dispatch = useDispatch();
  const textSettSlice = useSelector((state: RootState) => state.textSettSlice);

  const handleMouseEnter = () => {
    dispatch(setBtnStyleText({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleText({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (textSettSlice.activeText === false) {
      dispatch(setIsActive("Text"));
      dispatch(setActiveText(true));
    } else {
      dispatch(setActiveText(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !textSettSlice.activeText
      ? textSettSlice.btnStyleText.backgroundColor
      : "#ffffff",
  };

  const textFillColor = !textSettSlice.activeText ? "#ffffff" : "#2d44f0";

  return (
    <button
      className={`${styles.text} ${styles.svg_btn}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      <Text fill={textFillColor} />
    </button>
  );
};

export default ButtonText;
