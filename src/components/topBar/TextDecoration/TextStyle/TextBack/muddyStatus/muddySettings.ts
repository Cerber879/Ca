<<<<<<< HEAD
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
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type muddyTextSettingsState = {
  activeTextMuddy: boolean;
  btnStyleMuddy: { backgroundColor: string }
};

const initialState: muddyTextSettingsState = {
  activeTextMuddy: false,
  btnStyleMuddy: { backgroundColor: "#3f51b5" }
};

const muddySettSlice = createSlice({
  name: 'transparentSett',
  initialState,
  reducers: {
    setMuddyText: (state, action: PayloadAction<boolean>) => {
      state.activeTextMuddy = action.payload;
    },
    setBtnStyleMuddy: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleMuddy = action.payload;
    },
  },
});

export const { setMuddyText, setBtnStyleMuddy } = muddySettSlice.actions;
export default muddySettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
