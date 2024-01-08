import { AnyAction, Dispatch } from "redux";
import { TextBlock, Position, ObjectList } from "../../../modules/types";
import { textBlock } from "../../../modules/data";

import { setObjectBlocks } from "./appSlice";
import {
  setHistory,
  setProphecy,
  CanvasState,
} from "../history/historySettings";
import { fontCanvasState } from "../../../reducers/canvas/fontCanvas";

export function СreateInputBlock(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[],
  fontCanvas: fontCanvasState,
  fontSize: number,
  fontFamily: string,
  isActiveTextBold: boolean,
  isActiveTextItalic: boolean,
  isActiveTextUnderLine: boolean,
  isActiveTextStrikeThrough: boolean,
  isActiveTransparentText: boolean,
  activeColor: string,
  activeColorBorder: string,
  clickedPosition: Position
) {
  const elHistory: CanvasState = {
    objects: objectBlocks,
    size: { width: fontCanvas.width, height: fontCanvas.height },
    font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
  };
  dispatch(setHistory([...history, elHistory]));
  const inputBlock: TextBlock = {
    id: objectBlocks.length + 1,
    active: true,
    position: clickedPosition,
    type: textBlock.type,
    width: textBlock.width,
    height: textBlock.height,
    text: {
      fontSize: fontSize,
      fontFamily: fontFamily,
      fontWeight: isActiveTextBold ? "bold" : "normal",
      fontStyle: isActiveTextItalic ? "italic" : "none",
      textDecorationLine: `${isActiveTextUnderLine ? "underline" : ""} ${
        isActiveTextStrikeThrough ? "line-through" : ""
      }`,
      borderColor: !isActiveTransparentText ? activeColorBorder : "transparent",
      color: activeColor,
      value: textBlock.text.value,
    },
  };
  dispatch(setObjectBlocks([...objectBlocks, inputBlock]));

  if (prophecy.length !== 0) {
    dispatch(setProphecy([]));
  }
}
