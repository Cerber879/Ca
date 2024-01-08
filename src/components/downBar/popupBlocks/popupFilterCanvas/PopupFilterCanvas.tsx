import React, { useEffect, useState } from "react";
import styles from "../popup.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";

import { setFilter } from "../../../../reducers/canvas/fontCanvas";
import { setHistory, CanvasState } from "../../../canvas/history/historySettings";

type PopupProps = {
  close: () => void;
};

export function PopupFilterCanvas({ close }: PopupProps) {
  const dispatch = useDispatch();

  const popupStyle = "block";
  const overlayStyle = "block";

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);

  const [opacity, setOpacity] = useState(100);

  useEffect(() => {

    const colorPicker = document.getElementById("color-picker") as HTMLInputElement;
    const opacity = document.querySelector(".opacity-range") as HTMLInputElement;

    opacity.value = fontCanvas.opacity.toString();
    colorPicker.value = fontCanvas.filter;
  }, []);

  function closePopup() {
    close();
  }

  function CleanCanvas() {
    const colorPicker = document.getElementById("color-picker") as HTMLInputElement;
    const opacity = document.querySelector(".opacity-range") as HTMLInputElement;

    const elHistory: CanvasState = {
      objects: objectBlocks,
      size: { width: fontCanvas.width, height: fontCanvas.height },
      font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
    };
    dispatch(setHistory([...history, elHistory]));

    if (colorPicker && opacity) {
      dispatch(setFilter(colorPicker.value, parseInt(opacity.value)));
      console.log(colorPicker.value, parseInt(opacity.value));
    }
    closePopup();
  }

  function updateColor() {
    const opacity = document.querySelector(".opacity-range") as HTMLInputElement;
    if (opacity) setOpacity(parseInt(opacity.value) / 100);
  }

  return (
    <>
      <div style={{ display: overlayStyle }} className={styles.overlay}></div>
      <div style={{ display: popupStyle, width: "230px", height: "160px" }} className={styles.popup}>
        <div className={styles.flex_block}>
          <span className={styles.resizeText}>Filter Canvas</span>
          <button
            id="closeButton"
            className={`${styles.button} ${styles.btnClose}`}
            onClick={closePopup}
          >
            x
          </button>
        </div>
        <input
          style={{ opacity: opacity }}
          type="color"
          id="color-picker"
        ></input>
        <div className={`${styles.flex_block} ${styles.opacityCanvas}`}>
          <span>opacity:</span>
          <input
            id="opacity-range"
            className="opacity-range"
            onClick={updateColor}
            onMouseMove={updateColor}
            type="range"
            min="0"
            max="100"
          />
        </div>
        <div className={`${styles.flex_block} ${styles.menuPopup}`}>
          <button
            className={styles.button}
            style={{ backgroundColor: "#b53f3f" }}
            onClick={closePopup}
          >
            Cancel
          </button>
          <button
            className={styles.button}
            style={{ backgroundColor: "#3e67d7" }}
            onClick={CleanCanvas}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
