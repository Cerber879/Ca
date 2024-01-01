interface textUnderLineSettingsState {
  activeTextUnderLine: boolean;
  btnStyleTextUnderLine: { backgroundColor: string };
}

const initialState: textUnderLineSettingsState = {
  activeTextUnderLine: false,
  btnStyleTextUnderLine: { backgroundColor: "#3f51b5" },
};

function setActiveTextUnderLine(value: boolean) {
  return {
    type: "SET_ACTIVE_TEXT_UNDERLINE",
    payload: {
      activeTextUnderLine: value,
    },
  };
}

function setBtnStyleTextUnderLine(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_TEXT_UNDERLINE",
    payload: {
      btnStyleTextUnderLine: value,
    },
  };
}

function textUnderLineSettReducer(
  state = initialState,
  action: { type: string; payload: textUnderLineSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_TEXT_UNDERLINE":
    return {
      ...state,
      activeTextUnderLine: action.payload.activeTextUnderLine,
    };
  case "SET_BTN_STYLE_TEXT_UNDERLINE":
    return {
      ...state,
      btnStyleTextUnderLine: action.payload.btnStyleTextUnderLine,
    };
  default:
    return state;
  }
}

export { setActiveTextUnderLine, setBtnStyleTextUnderLine };
export default textUnderLineSettReducer;
