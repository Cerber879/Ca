import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleTriangle, setActiveObjTriangle } from "./triangleSettings";
import styles from "../../../../panel.module.css";
import Triangle from "./iconTriangle";
import { RootState } from "../../../../../../ReduxStore";
import { setIsActive } from "../../../../../../reducers/setBar/activeButton";

const ButtonTriangle = () => {
  const dispatch = useDispatch();

  const triangleSettSlice = useSelector(
    (state: RootState) => state.triangleSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleTriangle({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleTriangle({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (triangleSettSlice.activeObjTriangle === false) {
      dispatch(setIsActive("Triangle"));
      dispatch(setActiveObjTriangle(true));
    } else {
      dispatch(setActiveObjTriangle(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !triangleSettSlice.activeObjTriangle
      ? triangleSettSlice.btnStyleTriangle.backgroundColor
      : "#ffffff",
  };

  const triangleFillColor = !triangleSettSlice.activeObjTriangle
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
      <Triangle fill={triangleFillColor} />
    </button>
  );
};

export default ButtonTriangle;
