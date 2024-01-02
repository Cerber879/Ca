export interface moveSettingsState {
  mousePosition: {x: number; y: number};
  drag: boolean;
  dragging: boolean;
  draggingSize: boolean;
  resizeDirection: string;
  delX: number;
  delY: number;
}

const initialState: moveSettingsState = {
  mousePosition: { x: 0, y: 0 },
  drag: false,
  dragging: false,
  draggingSize: false,
  resizeDirection: "",
  delX: 0,
  delY: 0,
};

const setDrag = (value: boolean) => {
  return {
    type: "SET_DRAG",
    payload: {
      drag: value,
    },
  };
};

const setDragging = (value: boolean) => {
  return {
    type: "SET_DRAGGING",
    payload: {
      dragging: value,
    },
  };
};

const setDraggingSize = (value: boolean, direction: string) => {
  return {
    type: "SET_DRAGGING_SIZE",
    payload: {
      draggingSize: value,
      resizeDirection: direction,
    },
  };
};

const setDelX = (value: number) => {
  return {
    type: "SET_DEL_X",
    payload: {
      delX: value,
    },
  };
};

const setDelY = (value: number) => {
  return {
    type: "SET_DEL_Y",
    payload: {
      delY: value,
    },
  };
};

const moveReducer = (
  state = initialState,
  action: { type: string; payload: moveSettingsState }
) => {
  switch (action.type) {
  case "SET_DRAG":
    return {
      ...state,
      drag: action.payload.drag,
    };
  case "SET_DRAGGING":
    return {
      ...state,
      dragging: action.payload.dragging,
    };
  case "SET_DRAGGING_SIZE":
    return {
      ...state,
      draggingSize: action.payload.draggingSize,
      resizeDirection: action.payload.resizeDirection
    };
  case "SET_DEL_X":
    return {
      ...state,
      delX: action.payload.delX,
    };
  case "SET_DEL_Y":
    return {
      ...state,
      delY: action.payload.delY,
    };
  default:
    return state;
  }
};

export { setDrag, setDragging, setDraggingSize, setDelX, setDelY };
export default moveReducer;
