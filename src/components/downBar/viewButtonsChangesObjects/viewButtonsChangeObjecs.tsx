import React, { useEffect, useState } from "react";
import styles from "./activeObjectsVuttons.module.css";
import { moveElementBack, removeActiveStateObjects, moveElementForward, getActiveObjectId } from "../../StateObjects";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore";

export function ViewButtonsChangeObjects() {
  const dispatch = useDispatch();
  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);

  const [styleBackArrow, setStyleBackArrow] = useState<{ opacity: string; pointerEvents: "auto" | "none" }>
  ({ opacity: "1", pointerEvents: "auto" });

  const [styleForwardArrow, setStyleForwardArrow] = useState<{ opacity: string; pointerEvents: "auto" | "none" }>
  ({ opacity: "1", pointerEvents: "auto" });

  useEffect(() => {
    const activeID = getActiveObjectId(objectBlocks);
    if (activeID === 1) {
      setStyleBackArrow({ opacity: "0.5", pointerEvents: "none" });
    } else {
      setStyleBackArrow({ opacity: "1", pointerEvents: "auto" });
    }
    if (activeID === objectBlocks.length) {
      setStyleForwardArrow({ opacity: "0.5", pointerEvents: "none" });
    } else {
      setStyleForwardArrow({ opacity: "1", pointerEvents: "auto" });
    }
  }, [dispatch, objectBlocks]);

  return (
    <div className={`${styles.btnsActiveObject} ${styles.flex_block}`}>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onClick={() => moveElementBack(dispatch, objectBlocks)}
        style={styleBackArrow}
      >
        <img src="/images/down.svg" alt="Icon" width="17" height="17" />
      </button>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onClick={() => removeActiveStateObjects(dispatch, objectBlocks)}
      >
        <img src="/images/delete.svg" alt="Icon" width="17" height="17" />
      </button>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onClick={() => moveElementForward(dispatch, objectBlocks)}
        style={styleForwardArrow}
      >
        <img src="/images/up.svg" alt="Icon" width="17" height="17" />
      </button>
    </div>
  );
}