<<<<<<< HEAD
import React from 'react';
import styles from "../../../index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxStore";
import { setTypeColor } from "../../../reducers/setBar/colorSettings";
import { PopupStatus } from "../../PopupBlocks/PopupStatus";
import { ColorStatus } from "../colorBlocks/colorStatus";

export function Colors() {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const popupSLice = useSelector((state: RootState) => state.popupSLice);
  const elStyle = useSelector((state: RootState) => state.styleElements);
  const typeColor = useSelector(
    (state: RootState) => state.typeColor.typeColor
  );

  return (
    <div className={styles.flex_block}>
      <button
        className={styles.activeColor}
        onClick={() => PopupStatus("colors", dispatch, popupSLice.isColorsOpen)}
        style={{
          backgroundColor: elStyle.activeColor,
          border: `5px solid ${elStyle.activeColorBorder}`,
        }}
      ></button>
      <button
        onClick={() => {
          if (typeColor) {
            dispatch(setTypeColor(false));
          } else {
            dispatch(setTypeColor(true));
          }
        }}
        style={{
          paddingRight: "1px",
          marginRight: "-5px",
          marginLeft: "-10px",
        }}
        className={`${styles.colorButton} ${styles.hover}`}
      >
        <img
          className={styles.svg_icon_color}
          src="/images/refresh.svg"
          alt="Icon"
          width="18"
          height="18"
        />
      </button>
      <button
        onClick={() => ColorStatus("black", dispatch, typeColor)}
        className={`${styles.colorButton} ${styles.hover}`}
      >
        <img
          className={styles.svg_icon_color}
          src="/images/black.svg"
          alt="Icon"
          width="18"
          height="18"
        />
      </button>
      <button
        onClick={() => ColorStatus("white", dispatch, typeColor)}
        className={`${styles.colorButton} ${styles.hover}`}
      >
        <img
          className={styles.svg_icon_color}
          src="/images/white.svg"
          alt="Icon"
          width="18"
          height="18"
        />
      </button>
      <button
        onClick={() => ColorStatus("blue", dispatch, typeColor)}
        className={`${styles.colorButton} ${styles.hover}`}
      >
        <img
          className={styles.svg_icon_color}
          src="/images/blue.svg"
          alt="Icon"
          width="18"
          height="18"
        />
      </button>
      <button
        onClick={() => ColorStatus("red", dispatch, typeColor)}
        className={`${styles.colorButton} ${styles.hover}`}
      >
        <img
          className={styles.svg_icon_color}
          src="/images/red.svg"
          alt="Icon"
          width="18"
          height="18"
        />
      </button>
      <button
        onClick={() => ColorStatus("green", dispatch, typeColor)}
        className={`${styles.colorButton} ${styles.hover}`}
      >
        <img
          className={styles.svg_icon_color}
          src="/images/green.svg"
          alt="Icon"
          width="18"
          height="18"
        />
      </button>
    </div>
  );
}
=======
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxStore";
import { setTypeColor } from "../../../reducers/setBar/colorSettings"
import { PopupStatus } from "../../PopupBlocks/PopupStatus"
import { ColorStatus } from "../colorBlocks/colorStatus"


export function Colors() {

    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    const popupSLice = useSelector((state: RootState) => state.popupSLice);
    const elStyle = useSelector((state: RootState) => state.styleElements);
    const typeColor = useSelector((state: RootState) => state.typeColor.typeColor);

    return (
        <div className="flex_block">
        <button id="active-color" 
          onClick={() => PopupStatus("colors", dispatch, popupSLice.isColorsOpen)} 
          style={{ backgroundColor: elStyle.activeColor, border: `5px solid ${elStyle.activeColorBorder}`}}>
        </button>
        <button onClick={() => {if(typeColor) {dispatch(setTypeColor(false))} else {dispatch(setTypeColor(true))}}} 
          style={{ paddingRight: "1px", marginRight: "-5px", marginLeft: "-10px"}} className="color-button hover">
            <img id="svg_icon_color" src="/images/refresh.svg" alt="Icon" width="18" height="18" />
        </button>
        <button onClick={() => ColorStatus("black", dispatch, typeColor)} className="color-button hover">
          <img id="svg_icon_color" src="/images/black.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={() => ColorStatus("white", dispatch, typeColor)} className="color-button hover">
          <img id="svg_icon_color" src="/images/white.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={() => ColorStatus("blue", dispatch, typeColor)} className="color-button hover">
          <img id="svg_icon_color" src="/images/blue.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={() => ColorStatus("red", dispatch, typeColor)} className="color-button hover">
          <img id="svg_icon_color" src="/images/red.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={() => ColorStatus("green", dispatch, typeColor)} className="color-button hover">
          <img id="svg_icon_color" src="/images/green.svg" alt="Icon" width="18" height="18" /></button>
      </div>
    )
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
