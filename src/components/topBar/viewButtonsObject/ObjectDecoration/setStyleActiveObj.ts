import { setActiveObjStrokeFill } from "./ObjectStrokeAndFill/strokeAndFillStatus/strokeFillSettings";
import { setActiveObjStroke } from "./ObjectStrokeAndFill/strokeStatus/strokeSettings";
import { setActiveObjFill } from "./ObjectStrokeAndFill/fillStatus/fillSettings";
import {
  setIsActiveColor,
  setIsActiveColorBorder,
} from "../../../../reducers/setBar/StyleElements";
import { GraphicObject } from "../../../../modules/types";
import { AnyAction, Dispatch } from "redux";

export function SetStyleActiveObj(
  block: GraphicObject,
  dispatch: Dispatch<AnyAction>,
  isActiveObjStroke: boolean,
  isActiveObjFill: boolean,
  isActiveObjStrokeFill: boolean
) {
  const color = block.color === "transparent" ? "white" : block.color;
  const borderColor =
    block.borderColor === "transparent" ? "white" : block.borderColor;
  dispatch(setIsActiveColor(color));
  dispatch(setIsActiveColorBorder(borderColor));

  if (block.borderColor === "transparent" && block.color !== "transparent") {
    if (isActiveObjStrokeFill) dispatch(setActiveObjStrokeFill(false));
    if (isActiveObjStroke) dispatch(setActiveObjStroke(false));
    dispatch(setActiveObjFill(true));
  } else if (
    block.borderColor !== "transparent" &&
    block.color === "transparent"
  ) {
    if (isActiveObjStrokeFill) dispatch(setActiveObjStrokeFill(false));
    if (isActiveObjFill) dispatch(setActiveObjFill(false));
    dispatch(setActiveObjStroke(true));
  } else {
    if (isActiveObjFill) dispatch(setActiveObjFill(false));
    if (isActiveObjStroke) dispatch(setActiveObjStroke(false));
    dispatch(setActiveObjStrokeFill(true));
  }
}
