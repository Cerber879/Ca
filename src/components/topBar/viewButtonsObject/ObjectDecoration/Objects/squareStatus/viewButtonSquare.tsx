import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleSquare, setActiveObjSquare } from "./squareSettings";
import styles from "../../../../panel.module.css";
import Square from "./iconSquare";
import { RootState } from "../../../../../../ReduxStore";
import { setIsActive } from "../../../../../../reducers/setBar/activeButton";

const ButtonSquare = () => {
  const dispatch = useDispatch();

  const squareSettSlice = useSelector(
    (state: RootState) => state.squareSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleSquare({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleSquare({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (squareSettSlice.activeObjSquare === false) {
      dispatch(setIsActive("Square"));
      dispatch(setActiveObjSquare(true));
    } else {
      dispatch(setActiveObjSquare(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !squareSettSlice.activeObjSquare
      ? squareSettSlice.btnStyleSquare.backgroundColor
      : "#ffffff",
  };

  const squareFillColor = !squareSettSlice.activeObjSquare
    ? "#ffffff"
    : "#2d44f0";

  return (
    <button
      className={`${styles.text} ${styles.svg_btn}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      <Square fill={squareFillColor} />
    </button>
  );
};

export default ButtonSquare;
