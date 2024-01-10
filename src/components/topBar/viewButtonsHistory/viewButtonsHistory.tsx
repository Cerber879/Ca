import React from "react";
import styles from "../panel.module.css";

import { ComeBack, ComeForward } from "../../canvas/history/historyCommands";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore";

export function ViewButtonsHistory() {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);
  const prophecy = useSelector((state: RootState) => state.history.prophecy);

  const isActiveObjFill = useSelector((state: RootState) => state.objFillSettSlice.activeObjFill);
  const isActiveObjStroke = useSelector((state: RootState) => state.objStrokeSettSlice.activeObjStroke);
  const isActiveObjStrokeFill = useSelector((state: RootState) => state.objStrokeFillSettSlice.activeObjStrokeFill);

  return (
    <>
      <button
        onClick={() => ComeBack(dispatch, objectBlocks, history, prophecy, fontCanvas,
          isActiveObjStroke, isActiveObjFill, isActiveObjStrokeFill)}
        className={`${styles.text} ${styles.svg_btn}`}
        style={{
          opacity: history.length === 0 ? "0.5" : "1",
          pointerEvents: history.length === 0 ? "none" : "auto",
        }}
      >
        <img
          id="svg_icon_arrow_left"
          src="/images/left_arrow.svg"
          alt="Icon"
          width="18"
          height="18" />
      </button>
      <button
        onClick={() => ComeForward(dispatch, objectBlocks, history, prophecy, fontCanvas,
          isActiveObjStroke, isActiveObjFill, isActiveObjStrokeFill)}
        className={`${styles.text} ${styles.svg_btn}`}
        style={{
          opacity: prophecy.length === 0 ? "0.5" : "1",
          pointerEvents: prophecy.length === 0 ? "none" : "auto",
        }}
      >
        <img
          id="svg_icon_arrow_right"
          src="/images/right_arrow.svg"
          alt="Icon"
          width="18"
          height="18" />
      </button>
    </>
  );
}