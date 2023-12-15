import { TextBlock, Position, ObjectList } from "../../../modules/types";
import { textBlock } from "../../../modules/data";

import { setObjectBlocks } from "./appSlice";
import { AnyAction, Dispatch } from "redux";

export function СreateInputBlock(
  dispatch: Dispatch<AnyAction>, 
  objectBlocks: ObjectList, 
  fontSize: number,
  fontFamily: string,
  isActiveTextBold: boolean,
  isActiveTextItalic: boolean,
  isActiveTextUnderLine: boolean,
  isActiveTextStrikeThrough: boolean,
  isActiveTransparentText: boolean, 
  activeColor: string,
  activeColorBorder: string,
  clickedPosition: Position ) {

  const inputBlock: TextBlock = {
    id: objectBlocks.length + 1,
    position: clickedPosition,
    type: textBlock.type,
    width: textBlock.width,
    height: textBlock.height,
    text: { 
      fontSize: fontSize,
      fontFamily: fontFamily,
      fontWeight: isActiveTextBold ? "bold" : "normal",
      fontStyle: isActiveTextItalic ? "italic" : "none",
      textDecorationLine: `${isActiveTextUnderLine ? "underline" : ""} ${isActiveTextStrikeThrough ? "line-through" : ""}`,
      borderColor: !isActiveTransparentText ? activeColorBorder : "transparent",
      color: activeColor,
      value: textBlock.text.value,
    }
  };
  dispatch(setObjectBlocks([...objectBlocks, inputBlock]));
}