import React from "react";
import styles from "../panel.module.css";

import ButtonObjFill from "./ObjectDecoration/ObjectStrokeAndFill/fillStatus/viewButtonFill";
import ButtonObjStrokeFill from "./ObjectDecoration/ObjectStrokeAndFill/strokeAndFillStatus/viewButtonStrokeFill";
import ButtonObjStroke from "./ObjectDecoration/ObjectStrokeAndFill/strokeStatus/viewButtonStroke";

export function ActiveObject() {
  return (
    <>
      <ButtonObjStroke />
      <ButtonObjFill />
      <ButtonObjStrokeFill />
      <span className={styles.divider}></span>
    </>
  );
}
