import React, { useEffect } from "react";
import styles from "../../index.module.css";

import { setIsActiveFontFamily } from "../../reducers/setBar/StyleElements";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../ReduxStore";

import "../../index.css";

type PopupProps = {
  close: () => void;
};

export function PopupFontFamily({ close }: PopupProps) {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const popup = document.getElementById("popup") as HTMLDivElement;
    popup.style.display = "block";
  }, []);

  function closePopup(font: string) {
    close();
    dispatch(setIsActiveFontFamily(font));
    const popup = document.getElementById("popup") as HTMLDivElement;
    popup.style.display = "none";
  }

  return (
    <div
      id="popup"
      className={`${styles.families} ${styles.popup}`}
    >
      <div className={styles.popupContent}>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Sans-serif" }}
          onClick={() => {
            closePopup("Sans-serif");
          }}
        >
          Sans-serif
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Serif" }}
          onClick={() => {
            closePopup("Serif");
          }}
        >
          Serif
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Monospace" }}
          onClick={() => {
            closePopup("Monospace");
          }}
        >
          Monospace
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Arial" }}
          onClick={() => {
            closePopup("Arial");
          }}
        >
          Arial
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Arial Black" }}
          onClick={() => {
            closePopup("Arial Black");
          }}
        >
          Arial Black
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Comic Sans MS" }}
          onClick={() => {
            closePopup("Comic Sans MS");
          }}
        >
          Comic Sans MS
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Courier New" }}
          onClick={() => {
            closePopup("Courier New");
          }}
        >
          Courier New
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Georgia" }}
          onClick={() => {
            closePopup("Georgia");
          }}
        >
          Georgia
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Impact" }}
          onClick={() => {
            closePopup("Impact");
          }}
        >
          Impact
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Roboto" }}
          onClick={() => {
            closePopup("Roboto");
          }}
        >
          Roboto
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Times New Roman" }}
          onClick={() => {
            closePopup("Times New Roman");
          }}
        >
          Times New Roman
        </button>
        <button
          className={styles.btnFontFamily}
          style={{ fontFamily: "Verdana" }}
          onClick={() => {
            closePopup("Verdana");
          }}
        >
          Verdana
        </button>
        <button className={styles.btnFontFamily} style={{ fontFamily: "Arial" }}>
          Show more Fonts
        </button>
      </div>
    </div>
  );
}
