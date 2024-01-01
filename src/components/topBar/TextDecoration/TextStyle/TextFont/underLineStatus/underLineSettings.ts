<<<<<<< HEAD
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
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type textUnderLineSettingsState = {
  activeTextUnderLine: boolean;
  btnStyleTextUnderLine: { backgroundColor: string }
};

const initialState: textUnderLineSettingsState = {
    activeTextUnderLine: false,
    btnStyleTextUnderLine: { backgroundColor: "#3f51b5" }
};

const textUnderLineSettSlice = createSlice({
  name: 'textUnderLineSett',
  initialState,
  reducers: {
    setActiveTextUnderLine: (state, action: PayloadAction<boolean>) => {
      state.activeTextUnderLine = action.payload;
    },
    setBtnStyleTextUnderLine: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTextUnderLine = action.payload;
    },
  },
});

export const { setActiveTextUnderLine, setBtnStyleTextUnderLine } = textUnderLineSettSlice.actions;
export default textUnderLineSettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
