interface textMuddySettingsState {
  activeTextMuddy: boolean;
  btnStyleTextMuddy: { backgroundColor: string };
}

const initialState: textMuddySettingsState = {
  activeTextMuddy: false,
  btnStyleTextMuddy: { backgroundColor: "#3f51b5" },
};

function setActiveTextMuddy(value: boolean) {
  return {
    type: "SET_ACTIVE_TEXT_MUDDY",
    payload: {
      activeTextMuddy: value,
    },
  };
}

function setBtnStyleTextMuddy(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_TEXT_MUDDY",
    payload: {
      btnStyleTextMuddy: value,
    },
  };
}

function textMuddySettReducer(
  state = initialState,
  action: { type: string; payload: textMuddySettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_TEXT_MUDDY":
    return {
      ...state,
      activeTextMuddy: action.payload.activeTextMuddy,
    };
  case "SET_BTN_STYLE_TEXT_MUDDY":
    return {
      ...state,
      btnStyleTextMuddy: action.payload.btnStyleTextMuddy,
    };
  default:
    return state;
  }
}

export { setActiveTextMuddy, setBtnStyleTextMuddy };
export default textMuddySettReducer;
