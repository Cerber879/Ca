export interface drawingSettings {
<<<<<<< HEAD
  drawing: boolean;
  lastX: number;
  lastY: number;
  ctx: CanvasRenderingContext2D | null;
}

const initialState: drawingSettings = {
  drawing: false,
  lastX: 0,
  lastY: 0,
  ctx: null,
};

const setCTX = (value: CanvasRenderingContext2D | null) => {
  return {
    type: "SET_CTX",
    payload: {
      ctx: value,
    },
  };
};

const setDrawing = (value: boolean) => {
  return {
    type: "SET_DRAWING",
    payload: {
      drawing: value,
    },
  };
};

const setLastX = (value: number) => {
  return {
    type: "SET_LAST_X",
    payload: {
      lastX: value,
    },
  };
};

const setLastY = (value: number) => {
  return {
    type: "SET_LAST_Y",
    payload: {
      lastY: value,
    },
  };
};

const drawReducer = (
  state = initialState,
  action: { type: string; payload: drawingSettings }
) => {
  switch (action.type) {
  case "SET_CTX":
    return {
      ...state,
      ctx: action.payload.ctx,
    };
  case "SET_DRAWING":
    return {
      ...state,
      drawing: action.payload.drawing,
    };
  case "SET_LAST_X":
    return {
      ...state,
      lastX: action.payload.lastX,
    };
  case "SET_LAST_Y":
    return {
      ...state,
      lastY: action.payload.lastY,
    };
  default:
    return state;
  }
};

export { setDrawing, setLastX, setLastY, setCTX };
export default drawReducer;
=======
    drawing: boolean;
    lastX: number;
    lastY: number;
    ctx: CanvasRenderingContext2D | null
};

const initialState: drawingSettings = {
    drawing: false,
    lastX: 0,
    lastY: 0,
    ctx: null,
};

const setCTX = (value: CanvasRenderingContext2D | null) => {
    return {
        type: 'SET_CTX',
        payload: {
            ctx: value,
        }
    }
};

const setDrawing = (value: boolean) => {
    return {
        type: 'SET_DRAWING',
        payload: {
            drawing: value,
        }
    }
};

const setLastX = (value: number) => {
    return {
        type: 'SET_LAST_X',
        payload: {
            lastX: value,
        }
    }
};

const setLastY = (value: number) => {
    return {
        type: 'SET_LAST_Y',
        payload: {
            lastY: value,
        }
    }
};

const drawReducer = (state = initialState, action: { type: string; payload: drawingSettings; }) => {
switch (action.type) {
    case 'SET_CTX': 
        return {
            ...state,
            ctx: action.payload.ctx,
        };
    case 'SET_DRAWING': 
        return {
            ...state,
            drawing: action.payload.drawing,
        };
    case 'SET_LAST_X': 
        return {
            ...state,
            lastX: action.payload.lastX,
        };
    case 'SET_LAST_Y': 
        return {
            ...state,
            lastY: action.payload.lastY,
        };
    default:
        return state;
}
};

export { setDrawing, setLastX, setLastY, setCTX };
export default drawReducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
