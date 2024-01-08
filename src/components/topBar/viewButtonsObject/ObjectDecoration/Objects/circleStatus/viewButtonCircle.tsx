import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleCircle, setActiveObjCircle } from "./circleSettings";
import styles from "../../../../panel.module.css";
import Circle from "./iconCircle";
import { RootState } from "../../../../../../ReduxStore";
import { setIsActive } from "../../../../../../reducers/setBar/activeButton";

const ButtonCircle = () => {
  const dispatch = useDispatch();

  const circleSettSlice = useSelector(
    (state: RootState) => state.circleSettSlice
  );

  const handleMouseEnter = () => {
    dispatch(setBtnStyleCircle({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleCircle({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (circleSettSlice.activeObjCircle === false) {
      dispatch(setIsActive("Circle"));
      dispatch(setActiveObjCircle(true));
    } else {
      dispatch(setActiveObjCircle(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !circleSettSlice.activeObjCircle
      ? circleSettSlice.btnStyleCircle.backgroundColor
      : "#ffffff",
  };

  const circleFillColor = !circleSettSlice.activeObjCircle
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
      <Circle fill={circleFillColor} />
    </button>
  );
};

export default ButtonCircle;
