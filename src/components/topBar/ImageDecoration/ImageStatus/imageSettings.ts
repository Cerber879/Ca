interface imageSettingsState {
  activeImage: boolean;
  btnStyleImage: { backgroundColor: string };
}

const initialState: imageSettingsState = {
  activeImage: false,
  btnStyleImage: { backgroundColor: "#3f51b5" },
};

const setActiveImage = (value: boolean) => {
  return {
    type: "SET_ACTIVE_IMAGE",
    payload: {
      activeImage: value,
    },
  };
};

const setBtnStyleImage = (value: { backgroundColor: string }) => {
  return {
    type: "SET_BTN_STYLE_IMAGE",
    payload: {
      btnStyleImage: value,
    },
  };
};

const ImageSettReducer = (
  state = initialState,
  action: { type: string; payload: imageSettingsState }
) => {
  switch (action.type) {
  case "SET_ACTIVE_IMAGE": {
    const newState = {
      ...state,
      activeImage: action.payload.activeImage,
    };
    return newState;
  }
  case "SET_BTN_STYLE_IMAGE": {
    const newState = {
      ...state,
      btnStyleImage: action.payload.btnStyleImage,
    };
    return newState;
  }
  default:
    return state;
  }
};

export { setActiveImage, setBtnStyleImage };
export default ImageSettReducer;
