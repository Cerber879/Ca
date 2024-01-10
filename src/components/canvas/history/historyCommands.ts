import { ObjectList, TextBlock, GraphicObject } from "../../../modules/types";
import { isGraphicObject, isTextBlock } from "../../../modules/data";
import { fontCanvasState, setFilter, setSize } from "../../../reducers/canvas/fontCanvas";
import { SetStyleActiveObj } from "../../topBar/viewButtonsObject/ObjectDecoration/setStyleActiveObj";
import { setStyleActiveText } from "../../topBar/viewButtonsText/TextDecoration/setStyleActiveText";
import { setObjectBlocks } from "../createBlock/appSlice";
import { setHistory, CanvasState, setProphecy } from "./historySettings";
import { AnyAction, Dispatch } from "redux";

export function ComeBack(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[],
  fontCanvas: fontCanvasState,
  isActiveObjStroke: boolean,
  isActiveObjFill: boolean,
  isActiveObjStrokeFill: boolean
) {
  const lastHistoryState = history.pop();
  dispatch(setHistory([...history]));
  if (lastHistoryState) {
    dispatch(setObjectBlocks(lastHistoryState.objects));
    if (isTextBlock(lastHistoryState.objects[lastHistoryState.objects.length - 1])) {
      const block = lastHistoryState.objects[lastHistoryState.objects.length - 1] as TextBlock;
      setStyleActiveText(block, dispatch);
    } else if (isGraphicObject(lastHistoryState.objects[lastHistoryState.objects.length - 1])) {
      const block = lastHistoryState.objects[lastHistoryState.objects.length - 1] as GraphicObject;
      SetStyleActiveObj(block, dispatch, isActiveObjStroke, isActiveObjFill, isActiveObjStrokeFill);
    }
    dispatch(setSize(lastHistoryState.size.width, lastHistoryState.size.height));
    dispatch(setFilter(lastHistoryState.font.filter, lastHistoryState.font.opacity));

    const elHistory: CanvasState = {
      objects: objectBlocks,
      size: { width: fontCanvas.width, height: fontCanvas.height },
      font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity }
    };
    dispatch(setProphecy([...prophecy, elHistory]));
  }
}

export function ComeForward(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[],
  fontCanvas: fontCanvasState,
  isActiveObjStroke: boolean,
  isActiveObjFill: boolean,
  isActiveObjStrokeFill: boolean
) {
  const lastProphecyState = prophecy.pop();
  dispatch(setProphecy([...prophecy]));
  if (lastProphecyState) {

    dispatch(setObjectBlocks(lastProphecyState.objects));
    if (isTextBlock(lastProphecyState.objects[lastProphecyState.objects.length - 1])) {
      const block = lastProphecyState.objects[lastProphecyState.objects.length - 1] as TextBlock;
      setStyleActiveText(block, dispatch);
    } else if (isGraphicObject(lastProphecyState.objects[lastProphecyState.objects.length - 1])) {
      const block = lastProphecyState.objects[lastProphecyState.objects.length - 1] as GraphicObject;
      SetStyleActiveObj(block, dispatch, isActiveObjStroke, isActiveObjFill, isActiveObjStrokeFill);
    }
    dispatch(setSize(lastProphecyState.size.width, lastProphecyState.size.height));
    dispatch(setFilter(lastProphecyState.font.filter, lastProphecyState.font.opacity));

    const elHistory: CanvasState = {
      objects: objectBlocks,
      size: { width: fontCanvas.width, height: fontCanvas.height },
      font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity }
    };
    dispatch(setHistory([...history, elHistory]));
  }
}

export function deleteDuplicate(
  dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList,
  history: CanvasState[], fontCanvas: fontCanvasState
) {
  if ( objectBlocks.length <= 0 || history.length <= 0 ) { /* empty */ }
  else if (objectBlocks && history && history.length > 0 && history[history.length - 1].objects) {
    if (JSON.stringify(objectBlocks) === JSON.stringify(history[history.length - 1].objects) &&
    JSON.stringify(history[history.length - 1].size.width) === JSON.stringify(fontCanvas.width) &&
    JSON.stringify(history[history.length - 1].size.height) === JSON.stringify(fontCanvas.height) &&
    JSON.stringify(history[history.length - 1].font.filter) === JSON.stringify(fontCanvas.filter) &&
    JSON.stringify(history[history.length - 1].font.opacity) === JSON.stringify(fontCanvas.opacity)
    ) {
      history.pop();
      dispatch(setHistory([...history]));
    }
  }
}