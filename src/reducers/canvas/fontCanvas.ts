type fontCanvasState = {
  width: number;
  height: number;
  filter: string;
  opacity: number;
};

const initialState: fontCanvasState = {
  width: 800,
  height: 600,
  filter: "#ffffff",
  opacity: 100,
};

const setSize = (widht: number, height: number) => {
  return {
    type: "SET_SIZE",
    payload: {
      width: widht,
      height: height,
    },
  };
};

const setFilter = (filter: string, opacity: number) => {
  return {
    type: "SET_FILTER",
    payload: {
      filter: filter,
      opacity: opacity,
    },
  };
};

const sizeReducer = (
  state = initialState,
  action: { type: string; payload: fontCanvasState }
) => {
  switch (action.type) {
  case "SET_SIZE":
    return {
      ...state,
      width: action.payload.width,
      height: action.payload.height,
    };
  case "SET_FILTER":
    return {
      ...state,
      filter: action.payload.filter,
      opacity: action.payload.opacity,
    };
  default:
    return state;
  }
};

export { setSize, setFilter };
export default sizeReducer;
