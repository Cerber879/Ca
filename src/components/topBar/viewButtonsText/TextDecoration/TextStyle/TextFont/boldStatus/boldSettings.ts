interface textBoldSettingsState {
  activeTextBold: boolean;
  btnStyleTextBold: { backgroundColor: string };
}

const initialState: textBoldSettingsState = {
  activeTextBold: false,
  btnStyleTextBold: { backgroundColor: "#3f51b5" },
};

function setActiveTextBold(value: boolean) {
  return {
    type: "SET_ACTIVE_TEXT_BOLD",
    payload: {
      activeTextBold: value,
    },
  };
}

function setBtnStyleTextBold(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_TEXT_BOLD",
    payload: {
      btnStyleTextBold: value,
    },
  };
}

function textBoldSettReducer(
  state = initialState,
  action: { type: string; payload: textBoldSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_TEXT_BOLD":
    return {
      ...state,
      activeTextBold: action.payload.activeTextBold,
    };
  case "SET_BTN_STYLE_TEXT_BOLD":
    return {
      ...state,
      btnStyleTextBold: action.payload.btnStyleTextBold,
    };
  default:
    return state;
  }
}

export { setActiveTextBold, setBtnStyleTextBold };
export default textBoldSettReducer;
