import { ObjectList } from "../../../modules/types";

export type CanvasState = {
  objects: ObjectList;
  size: { width: number, height: number };
  font: { filter: string, opacity: number };
};

interface AppState {
  history: CanvasState[];
  prophecy: CanvasState[];
}

const initialState: AppState = {
  history: [],
  prophecy: [],
};

const reducer = (
  state: AppState = initialState,
  action: { type: string; payload: AppState }
) => {
  switch (action.type) {
  case "SET_HISTORY":
    return {
      ...state,
      history: action.payload.history,
    };
  case "SET_PROPHECY":
    return {
      ...state,
      prophecy: action.payload.prophecy,
    };
  default:
    return state;
  }
};

const setHistory = (value: CanvasState[]) => ({
  type: "SET_HISTORY",
  payload: {
    history: value,
  },
});

const setProphecy = (value: CanvasState[]) => ({
  type: "SET_PROPHECY",
  payload: {
    prophecy: value,
  },
});

export { setHistory, setProphecy };

export default reducer;
