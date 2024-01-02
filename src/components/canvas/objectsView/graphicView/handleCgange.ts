import { Dispatch } from "react";
import { AnyAction } from "redux";
import { GraphicObject, ObjectList } from "../../../../modules/types";
import { setObjectBlocks } from "../../createBlock/appSlice";
import { CanvasState, setHistory } from "../../history/historySettings";
import { styleElements } from "../../../../reducers/setBar/StyleElements";
import { fontCanvasState } from "../../../../reducers/canvas/fontCanvas";

export function handleChangeStyle(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  fontCanvas: fontCanvasState,
  block: GraphicObject,
  elStyle: styleElements,
  isActiveObjFill: boolean,
  isActiveObjStroke: boolean ) {
  if (block.active) {
    const updatedInputBlocks = objectBlocks.map((objBlock) => {
      if (objBlock.id === block.id) {
        const elHistory: CanvasState = {
          objects: objectBlocks,
          size: { width: fontCanvas.width, height: fontCanvas.height },
          font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity }
        };
        dispatch(setHistory([...history, elHistory]));
        return {
          ...objBlock,
          borderColor: isActiveObjFill ? "transparent" : elStyle.activeColorBorder,
          color: isActiveObjStroke ? "transparent" : elStyle.activeColor,
        };
      }
      return objBlock;
    });
    dispatch(setObjectBlocks([...updatedInputBlocks]));
  }
}