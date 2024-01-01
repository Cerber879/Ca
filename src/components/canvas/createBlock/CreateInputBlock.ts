<<<<<<< HEAD
import { AnyAction, Dispatch } from "redux";
=======
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
import { TextBlock, Position, ObjectList } from "../../../modules/types";
import { textBlock } from "../../../modules/data";

import { setObjectBlocks } from "./appSlice";
<<<<<<< HEAD
import { setHistory, setProphecy, CanvasState } from "../history/historySettings";

export function СreateInputBlock(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[],
=======
import { AnyAction, Dispatch } from "redux";

export function СreateInputBlock(
  dispatch: Dispatch<AnyAction>, 
  objectBlocks: ObjectList, 
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  fontSize: number,
  fontFamily: string,
  isActiveTextBold: boolean,
  isActiveTextItalic: boolean,
  isActiveTextUnderLine: boolean,
  isActiveTextStrikeThrough: boolean,
<<<<<<< HEAD
  isActiveTransparentText: boolean,
  activeColor: string,
  activeColorBorder: string,
  clickedPosition: Position
) {
  const elHistory: CanvasState = {
    objects: objectBlocks,
  };
  dispatch(setHistory([...history, elHistory]));
  const inputBlock: TextBlock = {
    id: objectBlocks.length + 1,
    active: true,
=======
  isActiveTransparentText: boolean, 
  activeColor: string,
  activeColorBorder: string,
  clickedPosition: Position ) {

  const inputBlock: TextBlock = {
    id: objectBlocks.length + 1,
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
    position: clickedPosition,
    type: textBlock.type,
    width: textBlock.width,
    height: textBlock.height,
<<<<<<< HEAD
    text: {
=======
    text: { 
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
      fontSize: fontSize,
      fontFamily: fontFamily,
      fontWeight: isActiveTextBold ? "bold" : "normal",
      fontStyle: isActiveTextItalic ? "italic" : "none",
<<<<<<< HEAD
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
=======
      textDecorationLine: `${isActiveTextUnderLine ? "underline" : ""} ${isActiveTextStrikeThrough ? "line-through" : ""}`,
      borderColor: !isActiveTransparentText ? activeColorBorder : "transparent",
      color: activeColor,
      value: textBlock.text.value,
    }
  };
  dispatch(setObjectBlocks([...objectBlocks, inputBlock]));
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
