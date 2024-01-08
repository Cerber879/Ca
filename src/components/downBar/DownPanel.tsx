import React from "react";
import styles from "./panel.module.css";

import { PopupResize } from "./popupBlocks/popupResize/PopupResize";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxStore";

import { PopupStatus } from "../../reducers/PopupBlocks/PopupStatus";

import { PopupFilterCanvas } from "./popupBlocks/popupFilterCanvas/PopupFilterCanvas";
import { isStateObjects } from "../StateObjects";
import { ViewZoomBlock } from "./viewZoomBlock/viewZoomBlock";
import { ViewButtonsChangeObjects } from "./viewButtonsChangesObjects/viewButtonsChangeObjecs";
import { ViewButtonsCanvasOptions } from "./viewButtonsCanvasOption/viewButtonsCanvasOptions";

export function DownPanel() {
  const dispatch = useDispatch();

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);

  const isResizeCanvasOpen = useSelector((state: RootState) => state.popupSLice.isResizeCanvasOpen);
  const isFilterCanvasOpen = useSelector((state: RootState) => state.popupSLice.isFilterCanvasOpen);

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);

  return (
    <>
      <div className={styles.bottomBar}>

        <ViewButtonsCanvasOptions/>

        {isStateObjects(objectBlocks) && (
          <ViewButtonsChangeObjects/>
        )}

        <ViewZoomBlock/>
      </div>
      {isResizeCanvasOpen && (
        <PopupResize
          width={fontCanvas.width}
          height={fontCanvas.height}
          dispatch={dispatch}
          close={() => PopupStatus("size", dispatch, isResizeCanvasOpen)}
        />
      )}
      {isFilterCanvasOpen && (
        <PopupFilterCanvas
          close={() => PopupStatus("filter", dispatch, isFilterCanvasOpen)}
        />
      )}
    </>
  );
}
