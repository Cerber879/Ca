import React, { Dispatch } from "react";
import { AnyAction } from "redux";
import { ObjectList, TextBlock } from "../../../../modules/types";
import { setObjectBlocks } from "../../createBlock/appSlice";
import { CanvasState, setHistory } from "../../history/historySettings";
import { styleElements } from "../../../../reducers/setBar/StyleElements";
import { fontCanvasState } from "../../../../reducers/canvas/fontCanvas";

export function handleChange(
  event: React.FocusEvent<HTMLDivElement>,
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  block: TextBlock
) {
  const updatedInputBlocks = objectBlocks.map((inputElement) => {
    const inputBlock = inputElement as TextBlock;
    if (inputBlock.id === block.id) {
      return {
        ...inputBlock,
        text: {
          ...inputBlock.text,
          value: event.currentTarget.textContent || "",
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
  fontCanvas: fontCanvasState,
  block: TextBlock,
  elStyle: styleElements,
  isActiveTextBold: boolean,
  isActiveTextItalic: boolean,
  isActiveTextUnderLine: boolean,
  isActiveTextStrikeThrough: boolean,
  isActiveTransparentText: boolean
) {
  const updateHistory = history;
  if (block.active) {
    const updatedInputBlocks = objectBlocks.map((object) => {
      if (object.id === block.id) {
        const inputBlock = block as TextBlock;
        if (inputBlock.text.fontStyle !== "none") {
          const elHistory: CanvasState = {
            objects: objectBlocks,
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
          };
          updateHistory.push(elHistory);
          dispatch(setHistory([...updateHistory]));
        }
        return {
          ...inputBlock,
          text: {
            ...block.text,
            fontSize: elStyle.activeFont,
            fontFamily: elStyle.activeFontFamily,
            fontWeight: isActiveTextBold ? "bold" : "normal",
            fontStyle: isActiveTextItalic ? "italic" : "normal",
            textDecorationLine: `${isActiveTextUnderLine ? "underline" : ""} ${
              isActiveTextStrikeThrough ? "line-through" : ""
            }`,
            borderColor: !isActiveTransparentText
              ? elStyle.activeColorBorder
              : "transparent",
            color: elStyle.activeColor,
          },
        };
      }
      return object;
    });
    dispatch(setObjectBlocks([...updatedInputBlocks]));
  }
}
