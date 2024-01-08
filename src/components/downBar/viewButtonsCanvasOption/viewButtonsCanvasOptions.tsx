import React, { useEffect, useState } from "react";
import styles from "./canvasOption.module.css";

import { PopupStatus } from "../../../reducers/PopupBlocks/PopupStatus";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore";
import { canvasLeft, canvasTop } from "../../canvas/ViewCanvas";

export function ViewButtonsCanvasOptions() {
  const dispatch = useDispatch();
  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);

  const isResizeCanvasOpen = useSelector((state: RootState) => state.popupSLice.isResizeCanvasOpen);
  const isFilterCanvasOpen = useSelector((state: RootState) => state.popupSLice.isFilterCanvasOpen);

  const [coordinates, setCoordinate] = useState("");

  useEffect(() => {
    function handleMouseMove(event: { clientX: number; clientY: number }) {
      const mouseX = Math.round(event.clientX - canvasLeft);
      const mouseY = Math.round(event.clientY - canvasTop);

      if (mouseX >= 0 && mouseX <= fontCanvas.width && mouseY >= 0 && mouseY <= fontCanvas.height) {
        setCoordinate(`${mouseX}, ${mouseY}px`);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <button
        className={`${styles.sizeCanvas} ${styles.flex_block}`}
        onClick={() => PopupStatus("size", dispatch, isResizeCanvasOpen)}
      >
        <img className={styles.imgSize} src="/images/picture.svg" alt="" />
        {fontCanvas.width} <span>x</span> {fontCanvas.height}px
      </button>
      <button className={styles.filter} style={{ backgroundColor: fontCanvas.filter }}
        onClick={() => PopupStatus("filter", dispatch, isFilterCanvasOpen)} />
      <span className={styles.divider}></span>
      <div>
        <img className={styles.cursorImg} src="/images/cursor3.svg" alt="Icon" width="20" height="20" />
        <span className={styles.coordinates}>{coordinates}</span>
      </div>
    </>
  );
}