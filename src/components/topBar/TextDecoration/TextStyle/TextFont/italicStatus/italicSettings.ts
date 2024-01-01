<<<<<<< HEAD
interface textItalicSettingsState {
  activeTextItalic: boolean;
  btnStyleTextItalic: { backgroundColor: string };
}

const initialState: textItalicSettingsState = {
  activeTextItalic: false,
  btnStyleTextItalic: { backgroundColor: "#3f51b5" },
};

function setActiveTextItalic(value: boolean) {
  return {
    type: "SET_ACTIVE_TEXT_ITALIC",
    payload: {
      activeTextItalic: value,
    },
  };
}

function setBtnStyleTextItalic(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_TEXT_ITALIC",
    payload: {
      btnStyleTextItalic: value,
    },
  };
}

function textItalicSettReducer(
  state = initialState,
  action: { type: string; payload: textItalicSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_TEXT_ITALIC":
    return {
      ...state,
      activeTextItalic: action.payload.activeTextItalic,
    };
  case "SET_BTN_STYLE_TEXT_ITALIC":
    return {
      ...state,
      btnStyleTextItalic: action.payload.btnStyleTextItalic,
    };
  default:
    return state;
  }
}

export { setActiveTextItalic, setBtnStyleTextItalic };
export default textItalicSettReducer;
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type textItalicSettingsState = {
  activeTextItalic: boolean;
  btnStyleTextItalic: { backgroundColor: string }
};

const initialState: textItalicSettingsState = {
    activeTextItalic: false,
  btnStyleTextItalic: { backgroundColor: "#3f51b5" }
};

const textItalicSettSlice = createSlice({
  name: 'textItalicSett',
  initialState,
  reducers: {
    setActiveTextItalic: (state, action: PayloadAction<boolean>) => {
      state.activeTextItalic = action.payload;
    },
    setBtnStyleTextItalic: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTextItalic = action.payload;
    },
  },
});

export const { setActiveTextItalic, setBtnStyleTextItalic } = textItalicSettSlice.actions;
export default textItalicSettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
