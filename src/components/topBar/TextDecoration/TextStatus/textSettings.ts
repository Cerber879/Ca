interface textSettingsState {
  activeText: boolean;
<<<<<<< HEAD
  btnStyleText: { backgroundColor: string };
}

const initialState: textSettingsState = {
  activeText: false,
  btnStyleText: { backgroundColor: "#3f51b5" },
=======
  btnStyleText: { backgroundColor: string }
};

const initialState = {
  activeText: false,
  btnStyleText: { backgroundColor: "#3f51b5" }
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
};

const setActiveText = (value: boolean) => {
  return {
<<<<<<< HEAD
    type: "SET_ACTIVE_TEXT",
    payload: {
      activeText: value,
    },
  };
=======
    type: 'SET_ACTIVE_TEXT',
    payload: {
      activeText: value,
    }
  }
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
};

const setBtnStyleText = (value: { backgroundColor: string }) => {
  return {
<<<<<<< HEAD
    type: "SET_BTN_STYLE_TEXT",
    payload: {
      btnStyleText: value,
    },
  };
};

const textSettReducer = (
  state = initialState,
  action: { type: string; payload: textSettingsState }
) => {
  switch (action.type) {
  case "SET_ACTIVE_TEXT": {
    const newState = {
      ...state,
      activeText: action.payload.activeText,
    };
    return newState;
  }
  case "SET_BTN_STYLE_TEXT": {
    const newState = {
      ...state,
      btnStyleText: action.payload.btnStyleText,
    };
    return newState;
  }
  default:
    return state;
=======
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
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  }
};

export { setActiveText, setBtnStyleText };
<<<<<<< HEAD
export default textSettReducer;
=======
export default textSettReducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
