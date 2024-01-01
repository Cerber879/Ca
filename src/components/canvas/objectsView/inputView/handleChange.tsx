import React, { Dispatch } from "react";
import { AnyAction } from "redux";
import { ObjectList, TextBlock } from "../../../../modules/types";
import { setObjectBlocks } from "../../createBlock/appSlice";
import { CanvasState, setHistory } from "../../history/historySettings";
import { styleElements } from "../../../../reducers/setBar/StyleElements";

export function handleChange(
  event: React.ChangeEvent<HTMLTextAreaElement>,
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  block: TextBlock) {
  const updatedInputBlocks = objectBlocks.map((inputElement) => {
    const inputBlock = inputElement as TextBlock;
    if (inputBlock.id === block.id) {
    //   const elHistory: CanvasState = {
    //     objects: objectBlocks,
    //   };
    //   dispatch(setHistory([...history, elHistory]));
      return {
        ...inputBlock,
        text: {
          ...inputBlock.text,
          value: event.target.value,
        },
      };
    }
    return inputBlock;
  });
  dispatch(setObjectBlocks(updatedInputBlocks));
}

export function handleChangeStyle(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  block: TextBlock,
  elStyle: styleElements,
  isActiveTextBold: boolean,
  isActiveTextItalic: boolean,
  isActiveTextUnderLine: boolean,
  isActiveTextStrikeThrough: boolean,
  isActiveTransparentText: boolean) {
  if (block.active) {
    const updatedInputBlocks = objectBlocks.map((inputBlock) => {
      if (inputBlock.id === block.id) {
        const elHistory: CanvasState = {
          objects: objectBlocks,
        };
        dispatch(setHistory([...history, elHistory]));
        return {
          ...inputBlock,
          text: {
            ...block.text,
            fontSize: elStyle.activeFont,
            fontFamily: elStyle.activeFontFamily,
            fontWeight: isActiveTextBold ? "bold" : "normal",
            fontStyle: isActiveTextItalic ? "italic" : "normal",
            textDecorationLine: `${isActiveTextUnderLine ? "underline" : ""} ${isActiveTextStrikeThrough ? "line-through" : ""}`,
            borderColor: !isActiveTransparentText ? elStyle.activeColorBorder : "transparent",
            color: elStyle.activeColor,
          }
        };
      }
      return inputBlock;
    });
    dispatch(setObjectBlocks([...updatedInputBlocks]));
  }
}