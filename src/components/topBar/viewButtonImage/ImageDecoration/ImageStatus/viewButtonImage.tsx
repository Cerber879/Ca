import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBtnStyleImage, setActiveImage } from "./imageSettings";
import styles from "../../../panel.module.css";
import Image from "./iconImage";
import { RootState } from "../../../../../ReduxStore";
import { setIsActive } from "../../../../../reducers/setBar/activeButton";

const ButtonImage = () => {
  const dispatch = useDispatch();
  const imageSettSlice = useSelector((state: RootState) => state.imageSettSlice);

  const handleMouseEnter = () => {
    dispatch(setBtnStyleImage({ backgroundColor: "#6489ef" }));
  };

  const handleMouseLeave = () => {
    dispatch(setBtnStyleImage({ backgroundColor: "#3f51b5" }));
  };

  const handleClick = () => {
    if (imageSettSlice.activeImage === false) {
      dispatch(setIsActive("Image"));
      dispatch(setActiveImage(true));
    } else {
      dispatch(setActiveImage(false));
    }
  };

  const buttonStyle = {
    backgroundColor: !imageSettSlice.activeImage
      ? imageSettSlice.btnStyleImage.backgroundColor
      : "#ffffff",
  };

  const imageFillColor = !imageSettSlice.activeImage ? "#ffffff" : "#2d44f0";

  return (
    <button
      className={`${styles.text} ${styles.svg_btn}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={buttonStyle}
    >
      <Image fill={imageFillColor} />
    </button>
  );
};

export default ButtonImage;
