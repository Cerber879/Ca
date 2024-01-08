import { ObjectList } from "../../../modules/types";
import { fontCanvasState, setFilter, setSize } from "../../../reducers/canvas/fontCanvas";
import { setObjectBlocks } from "../createBlock/appSlice";
import { setHistory, CanvasState, setProphecy } from "./historySettings";
import { AnyAction, Dispatch } from "redux";

export function ComeBack(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[],
  fontCanvas: fontCanvasState,
) {

  const lastHistoryState = history.pop();
  dispatch(setHistory([...history]));
  if (lastHistoryState) {

    dispatch(setObjectBlocks(lastHistoryState.objects));
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
  fontCanvas: fontCanvasState
) {
  const lastProphecyState = prophecy.pop();
  dispatch(setProphecy([...prophecy]));
  if (lastProphecyState) {

    dispatch(setObjectBlocks(lastProphecyState.objects));
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

export function deleteDuplicate(dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList, history: CanvasState[]) {
  if ( objectBlocks.length <= 0 || history.length <= 0 ) { /* empty */ }
  else if (objectBlocks && history && history.length > 0 && history[history.length - 1].objects) {
    if (objectBlocks === history[history.length - 1].objects) {
      history.pop();
      dispatch(setHistory([...history]));
    }
  }
}