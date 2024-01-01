type zoomState = {
<<<<<<< HEAD
  zoom: number;
};

const initialState: zoomState = {
  zoom: 100,
};

const setZoom = (value: number) => {
  return {
    type: "SET_ZOOM",
    payload: {
      zoom: value,
    },
  };
};

const sizeReducer = (
  state = initialState,
  action: { type: string; payload: zoomState }
) => {
  switch (action.type) {
  case "SET_ZOOM":
    return {
      ...state,
      zoom: action.payload.zoom,
    };
  default:
    return state;
  }
};

=======
    zoom: number
}

const initialState: zoomState = {
    zoom: 1, 
};

const setZoom = (value: number) => {
    return {
        type: 'SET_ZOOM',
        payload: {
            width: value,
        },
    };
};

const sizeReducer = (state = initialState, action: { type: string; payload: zoomState; }) => {
switch (action.type) {
    case 'SET_ZOOM':
        return {
            ...state,
            zoom: action.payload.zoom,
        };
    default:
        return state;
}
};
    
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
export { setZoom };
export default sizeReducer;
