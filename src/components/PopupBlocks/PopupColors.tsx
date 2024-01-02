import React, { useEffect, useState } from "react";
import styles from "../../index.module.css";

import {
  setIsActiveColor,
  setIsActiveColorBorder,
} from "../../reducers/setBar/StyleElements";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxStore";

type PopupProps = {
  close: () => void;
};

export function PopupColors({ close }: PopupProps) {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const activeColor = useSelector(
    (state: RootState) => state.styleElements.activeColor
  );
  const activeColorBorder = useSelector(
    (state: RootState) => state.styleElements.activeColorBorder
  );

  const [styleColor, setStyleColor] = useState({
    backgroundColor: activeColor,
  });
  const [styleColorBack, setStyleColorBack] = useState({
    backgroundColor: activeColorBorder,
  });
  const [color, setColor] = useState(activeColor);
  const [colorBack, setColorBack] = useState(activeColorBorder);

  const getRanges = () => {
    return [
      document.querySelector(".color-range1") as HTMLInputElement,
      document.querySelector(".color-range2") as HTMLInputElement,
      document.querySelector(".color-range3") as HTMLInputElement,
      document.querySelector(".color-range4") as HTMLInputElement,
      document.querySelector(".color-range5") as HTMLInputElement,
      document.querySelector(".color-range6") as HTMLInputElement,
    ];
  };

  useEffect(() => {
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "block";
    popup.style.display = "block";

    const str1 = activeColor;
    const cleanStr1 = str1.replace(/[^\d,]/g, "");
    const numbers1 = cleanStr1.split(",");

    const str2 = activeColorBorder;
    const cleanStr2 = str2.replace(/[^\d,]/g, "");
    const numbers2 = cleanStr2.split(",");

    getRanges()[0].value = numbers1[0];
    getRanges()[1].value = numbers1[1];
    getRanges()[2].value = numbers1[2];
    getRanges()[3].value = numbers2[0];
    getRanges()[4].value = numbers2[1];
    getRanges()[5].value = numbers2[2];
  }, []);

  function closePopup() {
    close();
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  function CleanCanvas() {
    dispatch(setIsActiveColor(color));
    dispatch(setIsActiveColorBorder(colorBack));
    closePopup();
  }

  function updateColor() {
    const red = getRanges()[0].value;
    const green = getRanges()[1].value;
    const blue = getRanges()[2].value;
    const color = `rgb(${red}, ${green}, ${blue})`;
    setColor(color);
    setStyleColor({ backgroundColor: color });

    const redBack = getRanges()[3].value;
    const greenBack = getRanges()[4].value;
    const blueBack = getRanges()[5].value;
    const colorBack = `rgb(${redBack}, ${greenBack}, ${blueBack})`;
    setColorBack(colorBack);
    setStyleColorBack({ backgroundColor: colorBack });
  }

  return (
    <>
      <div id="overlay" className={styles.overlay}></div>
      <div
        id="popup"
        className={styles.popup}
        style={{ width: "300px", height: "300px" }}
      >
        <div className={`${styles.flex_block} ${styles.headerPopup}`}>
          <span className={styles.resizeText}>Colors</span>
          <button
            id="closeButton"
            className={`${styles.button} ${styles.btnClose}`}
            onClick={closePopup}
          >
            x
          </button>
        </div>
        <tr className={styles.flex_block}>
          <th colSpan={3}>Secondary (fill)</th>
          <td style={{ width: "8px" }}></td>
          <th colSpan={3}>Primary (line)</th>
        </tr>
        <div className={styles.flex_block}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              width: 120,
            }}
          >
            <label htmlFor="color-range1">red: </label>
            <input
              id="color-range1"
              onMouseMove={updateColor}
              className="color-range1"
              type="range"
              min="0"
              max="255"
            />

            <label htmlFor="color-range2">green: </label>
            <input
              id="color-range2"
              onMouseMove={updateColor}
              className="color-range2"
              type="range"
              min="0"
              max="255"
            />

            <label htmlFor="color-range3">blue: </label>
            <input
              id="color-range3"
              onMouseMove={updateColor}
              className="color-range3"
              type="range"
              min="0"
              max="255"
            />

            <div style={styleColor} className={styles.colorPreview}></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              width: 120,
            }}
          >
            <label htmlFor="color-range1">red: </label>
            <input
              id="color-range4"
              onMouseMove={updateColor}
              className="color-range4"
              type="range"
              min="0"
              max="255"
            />

            <label htmlFor="color-range2">green: </label>
            <input
              id="color-range5"
              onMouseMove={updateColor}
              className="color-range5"
              type="range"
              min="0"
              max="255"
            />

            <label htmlFor="color-range3">blue: </label>
            <input
              id="color-range6"
              onMouseMove={updateColor}
              className="color-range6"
              type="range"
              min="0"
              max="255"
            />

            <div style={styleColorBack} className={styles.colorPreview}></div>
          </div>
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
