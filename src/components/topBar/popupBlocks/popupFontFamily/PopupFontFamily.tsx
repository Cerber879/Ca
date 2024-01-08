import React, { useEffect } from "react";
import styles from "../popup.module.css";
import familiesStyle from "./fontFamily.module.css";

import { setIsActiveFontFamily } from "../../../../reducers/setBar/StyleElements";

import { useDispatch } from "react-redux";
import { PopupStatus } from "../../../../reducers/PopupBlocks/PopupStatus";

type PopupProps = {
  close: () => void;
  isFontSizesOpen: boolean;
};

export function PopupFontFamily({ close, isFontSizesOpen }: PopupProps) {
  const dispatch = useDispatch();

  const styleBlock = "block";

  useEffect(() => {
    if (isFontSizesOpen) PopupStatus("fontSize", dispatch, true);

  }, []);

  function closePopup(font: string) {
    close();
    dispatch(setIsActiveFontFamily(font));
  }

  return (
    <div style={{ display: styleBlock }} className={`${familiesStyle.families} ${styles.popup}`}
      onMouseLeave={close}
    >
      <div className={styles.popupContent}>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Sans-serif" }}
          onClick={() => {
            closePopup("Sans-serif");
          }}
        >
          Sans-serif
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Serif" }}
          onClick={() => {
            closePopup("Serif");
          }}
        >
          Serif
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Monospace" }}
          onClick={() => {
            closePopup("Monospace");
          }}
        >
          Monospace
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Arial" }}
          onClick={() => {
            closePopup("Arial");
          }}
        >
          Arial
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Arial Black" }}
          onClick={() => {
            closePopup("Arial Black");
          }}
        >
          Arial Black
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Comic Sans MS" }}
          onClick={() => {
            closePopup("Comic Sans MS");
          }}
        >
          Comic Sans MS
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Courier New" }}
          onClick={() => {
            closePopup("Courier New");
          }}
        >
          Courier New
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Georgia" }}
          onClick={() => {
            closePopup("Georgia");
          }}
        >
          Georgia
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Impact" }}
          onClick={() => {
            closePopup("Impact");
          }}
        >
          Impact
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Roboto" }}
          onClick={() => {
            closePopup("Roboto");
          }}
        >
          Roboto
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Times New Roman" }}
          onClick={() => {
            closePopup("Times New Roman");
          }}
        >
          Times New Roman
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Verdana" }}
          onClick={() => {
            closePopup("Verdana");
          }}
        >
          Verdana
        </button>
        <button
          className={familiesStyle.btnFontFamily}
          style={{ fontFamily: "Arial" }}
        >
          Show more Fonts
        </button>
      </div>
    </div>
  );
}
