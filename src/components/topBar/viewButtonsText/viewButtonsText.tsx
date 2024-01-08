import React from "react";
import styles from "../panel.module.css";
import ButtonTextMuddy from "./TextDecoration/TextStyle/TextBack/muddyStatus/viewButtonMuddy";
import ButtonTextTransparent from "./TextDecoration/TextStyle/TextBack/tranparentStatus/viewButtonTransparent";
import ButtonTextBold from "./TextDecoration/TextStyle/TextFont/boldStatus/viewButtonBold";
import ButtonTextItalic from "./TextDecoration/TextStyle/TextFont/italicStatus/viewButtonItalic";
import ButtonTextStrikeThrough from "./TextDecoration/TextStyle/TextFont/strikeThroughStatus/viewStrikeThrough";
import ButtonTextUnderLine from "./TextDecoration/TextStyle/TextFont/underLineStatus/viewUnderline";
import { ViewFontsText } from "./viewFontsText/viewFontsText";

export function ActiveText() {
  return (
    <>
      <ButtonTextTransparent />
      <ButtonTextMuddy />
      <span className={styles.divider}></span>
      <ViewFontsText />
      <span className={styles.divider}></span>
      <ButtonTextBold />
      <ButtonTextItalic />
      <ButtonTextStrikeThrough />
      <ButtonTextUnderLine />
      <span className={styles.divider}></span>
    </>
  );
}
