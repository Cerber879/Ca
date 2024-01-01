interface textTransparentSettingsState {
  activeTextTransparent: boolean;
  btnStyleTextTransparent: { backgroundColor: string };
}

const initialState: textTransparentSettingsState = {
  activeTextTransparent: true,
  btnStyleTextTransparent: { backgroundColor: "#ffffff" },
};

function setActiveTextTransparent(value: boolean) {
  return {
    type: "SET_ACTIVE_TEXT_TRANSPARENT",
    payload: {
      activeTextTransparent: value,
    },
  };
}

function setBtnStyleTextTransparent(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_TEXT_TRANSPARENT",
    payload: {
      btnStyleTextTransparent: value,
    },
  };
}

function textTransparentSettReducer(
  state = initialState,
  action: { type: string; payload: textTransparentSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_TEXT_TRANSPARENT":
    return {
      ...state,
      activeTextTransparent: action.payload.activeTextTransparent,
    };
  case "SET_BTN_STYLE_TEXT_TRANSPARENT":
    return {
      ...state,
      btnStyleTextTransparent: action.payload.btnStyleTextTransparent,
    };
  default:
    return state;
  }
}

export { setActiveTextTransparent, setBtnStyleTextTransparent };
export default textTransparentSettReducer;
