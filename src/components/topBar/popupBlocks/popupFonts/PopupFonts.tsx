import React, { useEffect } from "react";
import styles from "../popup.module.css";
import fontStyle from "./fonts.module.css";

import { setIsActiveFont } from "../../../../reducers/setBar/StyleElements";

import { useDispatch } from "react-redux";
import { PopupStatus } from "../../../../reducers/PopupBlocks/PopupStatus";

type PopupProps = {
  close: () => void;
  isFontFamiliesOpen: boolean;
};

export function PopupFonts({ close, isFontFamiliesOpen }: PopupProps) {
  const dispatch = useDispatch();

  const styleBlock = "Block";

  useEffect(() => {
    if (isFontFamiliesOpen) PopupStatus("fontFamily", dispatch, true);
  }, []);

  function closePopup(font: number) {
    close();
    dispatch(setIsActiveFont(font));
  }

  return (
    <div style={{ display: styleBlock }} className={`${fontStyle.fonts} ${styles.popup}`}
      onMouseLeave={close}
    >
      <div className={styles.popupContent}>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(6);
          }}
        >
          6
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(7);
          }}
        >
          7
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(8);
          }}
        >
          8
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(9);
          }}
        >
          9
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(10);
          }}
        >
          10
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(11);
          }}
        >
          11
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(12);
          }}
        >
          12
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(14);
          }}
        >
          14
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(16);
          }}
        >
          16
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(18);
          }}
        >
          18
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(20);
          }}
        >
          20
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(22);
          }}
        >
          22
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(24);
          }}
        >
          24
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(26);
          }}
        >
          26
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(28);
          }}
        >
          28
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(32);
          }}
        >
          32
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(36);
          }}
        >
          36
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(40);
          }}
        >
          40
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(48);
          }}
        >
          48
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(56);
          }}
        >
          56
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(64);
          }}
        >
          64
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(72);
          }}
        >
          72
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(96);
          }}
        >
          96
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(128);
          }}
        >
          128
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(160);
          }}
        >
          160
        </button>
        <button
          className={fontStyle.btnFont}
          onClick={() => {
            closePopup(192);
          }}
        >
          192
        </button>
      </div>
    </div>
  );
}
