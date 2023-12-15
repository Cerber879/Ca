interface textSettingsState {
  activeText: boolean;
  btnStyleText: { backgroundColor: string }
};

const initialState = {
  activeText: false,
  btnStyleText: { backgroundColor: "#3f51b5" }
};

const setActiveText = (value: boolean) => {
  return {
    type: 'SET_ACTIVE_TEXT',
    payload: {
      activeText: value,
    }
  }
};

const setBtnStyleText = (value: { backgroundColor: string }) => {
  return {
    type: 'SET_BTN_STYLE_TEXT',
    payload: {
      btnStyleText: value,
    }
  }
};

const textSettReducer = (state = initialState, action: { type: string; payload: textSettingsState; }) => {
  switch (action.type) {
    case 'SET_ACTIVE_TEXT': {
      const newState = {
        ...state,
        activeText: action.payload.activeText,
      };
      return newState;
    }
    case 'SET_BTN_STYLE_TEXT': {
      const newState = {
        ...state,
        btnStyleText: action.payload.btnStyleText,
      };
      return newState;
    }
    default:
      return state;
  }
};

export { setActiveText, setBtnStyleText };
export default textSettReducer;