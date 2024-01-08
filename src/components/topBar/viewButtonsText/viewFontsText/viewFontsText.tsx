import React from "react";
import styles from "./fontButtons.module.css";
import { PopupStatus } from "../../../../reducers/PopupBlocks/PopupStatus";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";

export function ViewFontsText() {
  const dispatch = useDispatch();

  const popupSLice = useSelector((state: RootState) => state.popupSLice);
  const elStyle = useSelector((state: RootState) => state.styleElements);
  return (
    <><button
      onClick={() => PopupStatus("fontSize", dispatch, popupSLice.isFontSizesOpen)}
      className={`${styles.flex_block} ${styles.fontBar}`}
    >
      <img
        id="svg_icon_font"
        src="/images/font1.svg"
        alt="Icon"
        width="13"
        height="13" />
      <span className={styles.fontSize}>{elStyle.activeFont}</span>
      <img
        id="svg_icon_arrow"
        src="/images/down_arrow.svg"
        alt="Icon"
        width="6"
        height="6" />
    </button><button
      onClick={() => PopupStatus("fontFamily", dispatch, popupSLice.isFontFamiliesOpen)}
      className={`${styles.flex_block} ${styles.fontBar}`}
      style={{ width: "140px", padding: "5px", fontSize: "10px" }}
    >
      <img
        id="svg_icon_font"
        src="/images/font-family-custom.svg"
        alt="Icon"
        width="13"
        height="13" />
      <span className={styles.fontSize}>{elStyle.activeFontFamily}</span>
      <img
        id="svg_icon_arrow"
        src="/images/down_arrow.svg"
        alt="Icon"
        width="6"
        height="6" />
    </button></>
  );
}