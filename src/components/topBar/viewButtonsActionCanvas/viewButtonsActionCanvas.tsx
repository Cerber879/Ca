import React from "react";
import styles from "../panel.module.css";

import { delActiveStateObjects } from "../../StateObjects";
import { setObjectBlocks } from "../../canvas/createBlock/appSlice";
import { DownloadFile } from "./BroadcastFileJSON/DownloadObjects";
import { SaveToFile } from "./BroadcastFileJSON/SaveObjects";
import { SaveCard } from "./SaveCard/SaveCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore";

export function ViewButtonsActionCanvas() {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);
  return (
    <><button
      onClick={() => {
        const updatedBlocks = delActiveStateObjects(objectBlocks);
        dispatch(setObjectBlocks(updatedBlocks));
        SaveCard();
      } }
      className={`${styles.text} ${styles.svg_btn}`}
    >
      <img
        id="svg_icon_save"
        src="/images/save.svg"
        alt="Icon"
        width="16"
        height="16" />
    </button><button
      onClick={() => SaveToFile(
        objectBlocks,
        { width: fontCanvas.width, height: fontCanvas.height },
        { filter: fontCanvas.filter, opacity: fontCanvas.opacity }
      )}
      className={`${styles.text} ${styles.svg_btn}`}
    >
      <img
        id="svg_icon_save"
        src="/images/save_file.svg"
        alt="Icon"
        width="16"
        height="16" />
    </button><button
      onClick={() => DownloadFile(dispatch, objectBlocks, history, fontCanvas)}
      className={`${styles.text} ${styles.svg_btn}`}
    >
      <img
        id="svg_icon_download"
        src="/images/download.svg"
        alt="Icon"
        width="18"
        height="18" />
    </button></>
  );
}