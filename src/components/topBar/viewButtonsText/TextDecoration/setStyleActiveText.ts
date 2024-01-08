import {
  setIsActiveColor,
  setIsActiveColorBorder,
  setIsActiveFont,
  setIsActiveFontFamily,
} from "../../../../reducers/setBar/StyleElements";
import { TextBlock } from "../../../../modules/types";
import { AnyAction, Dispatch } from "redux";
import { setActiveTextMuddy } from "./TextStyle/TextBack/muddyStatus/muddySettings";
import { setActiveTextTransparent } from "./TextStyle/TextBack/tranparentStatus/transparentSettings";
import {
  setActiveTextItalic,
  setBtnStyleTextItalic,
} from "./TextStyle/TextFont/italicStatus/italicSettings";
import {
  setActiveTextBold,
  setBtnStyleTextBold,
} from "./TextStyle/TextFont/boldStatus/boldSettings";
import {
  setActiveTextStrikeThrough,
  setBtnStyleTextStrikeThrough,
} from "./TextStyle/TextFont/strikeThroughStatus/strikeThroughSettings";
import {
  setActiveTextUnderLine,
  setBtnStyleTextUnderLine,
} from "./TextStyle/TextFont/underLineStatus/underLineSettings";

export function setStyleActiveText(
  block: TextBlock,
  dispatch: Dispatch<AnyAction>
) {
  const borderColor =
    block.text.borderColor === "transparent" ? "white" : block.text.borderColor;
  dispatch(setIsActiveColorBorder(borderColor));
  dispatch(setIsActiveColor(block.text.color));

  dispatch(setIsActiveFont(block.text.fontSize));
  dispatch(setIsActiveFontFamily(block.text.fontFamily));

  if (block.text.fontWeight === "bold") {
    dispatch(setActiveTextBold(true));
    dispatch(setBtnStyleTextBold({ backgroundColor: "bold" }));
  } else {
    dispatch(setActiveTextBold(false));
    dispatch(setBtnStyleTextBold({ backgroundColor: "normal" }));
  }

  if (block.text.fontStyle === "italic") {
    dispatch(setActiveTextItalic(true));
    dispatch(setBtnStyleTextItalic({ backgroundColor: "italic" }));
  } else {
    dispatch(setActiveTextItalic(false));
    dispatch(setBtnStyleTextItalic({ backgroundColor: "normal" }));
  }

  if (block.text.textDecorationLine === "underline ") {
    dispatch(setActiveTextStrikeThrough(false));
    dispatch(setActiveTextUnderLine(true));
    dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "" }));
    dispatch(setBtnStyleTextUnderLine({ backgroundColor: "underline" }));
  } else if (block.text.textDecorationLine === " line-through") {
    dispatch(setActiveTextStrikeThrough(true));
    dispatch(setActiveTextUnderLine(false));
    dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "line-through" }));
    dispatch(setBtnStyleTextUnderLine({ backgroundColor: "" }));
  } else if (block.text.textDecorationLine === "underline line-through") {
    dispatch(setActiveTextStrikeThrough(true));
    dispatch(setActiveTextUnderLine(true));
    dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "line-through" }));
    dispatch(setBtnStyleTextUnderLine({ backgroundColor: "underline" }));
  } else {
    dispatch(setActiveTextStrikeThrough(false));
    dispatch(setActiveTextUnderLine(false));
    dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "" }));
    dispatch(setBtnStyleTextUnderLine({ backgroundColor: "" }));
  }

  if (block.text.borderColor === "transparent") {
    dispatch(setActiveTextMuddy(false));
    dispatch(setActiveTextTransparent(true));
  } else {
    dispatch(setActiveTextMuddy(true));
    dispatch(setActiveTextTransparent(false));
  }
}
