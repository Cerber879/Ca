import { ObjectList } from "../../../modules/types";
import { setObjectBlocks } from "../createBlock/appSlice";
import { setHistory, CanvasState, setProphecy } from "./historySettings";
import { AnyAction, Dispatch } from "redux";

export function ComeBack(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[],
) {

  const lastHistoryState = history.pop();
  dispatch(setHistory([...history]));
  if (lastHistoryState) {
    const objects = lastHistoryState.objects;
    dispatch(setObjectBlocks(objects));

    const elHistory: CanvasState = {
      objects: objectBlocks,
    };
    dispatch(setProphecy([...prophecy, elHistory]));
  }
}

export function ComeForward(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[]
) {
  const lastProphecyState = prophecy.pop();
  dispatch(setProphecy([...prophecy]));
  if (lastProphecyState) {
    const objects = lastProphecyState.objects;
    dispatch(setObjectBlocks(objects));

    const elHistory: CanvasState = {
      objects: objectBlocks,
    };
    dispatch(setHistory([...history, elHistory]));
  }
}

export function deleteDuplicate(dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList, history: CanvasState[]) {
  if (objectBlocks && history && history.length > 0 && history[history.length - 1].objects) {
    if (objectBlocks[objectBlocks.length - 1] === history[history.length - 1].objects[history[history.length - 1].objects.length - 1]) {
      console.log(objectBlocks[objectBlocks.length - 1]);
      console.log(history[history.length - 1].objects[history[history.length - 1].objects.length - 1]);
      history.pop();
      dispatch(setHistory([...history]));
    }
  }
}