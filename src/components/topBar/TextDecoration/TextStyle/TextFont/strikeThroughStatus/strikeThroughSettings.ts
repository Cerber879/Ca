<<<<<<< HEAD
interface textStrikeThroughSettingsState {
  activeTextStrikeThrough: boolean;
  btnStyleTextStrikeThrough: { backgroundColor: string };
}

const initialState: textStrikeThroughSettingsState = {
  activeTextStrikeThrough: false,
  btnStyleTextStrikeThrough: { backgroundColor: "#3f51b5" },
};

function setActiveTextStrikeThrough(value: boolean) {
  return {
    type: "SET_ACTIVE_TEXT_STRIKETHROUGH",
    payload: {
      activeTextStrikeThrough: value,
    },
  };
}

function setBtnStyleTextStrikeThrough(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_TEXT_STRIKETHROUGH",
    payload: {
      btnStyleTextStrikeThrough: value,
    },
  };
}

function textStrikeThroughSettReducer(
  state = initialState,
  action: { type: string; payload: textStrikeThroughSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_TEXT_STRIKETHROUGH":
    return {
      ...state,
      activeTextStrikeThrough: action.payload.activeTextStrikeThrough,
    };
  case "SET_BTN_STYLE_TEXT_STRIKETHROUGH":
    return {
      ...state,
      btnStyleTextStrikeThrough: action.payload.btnStyleTextStrikeThrough,
    };
  default:
    return state;
  }
}

export { setActiveTextStrikeThrough, setBtnStyleTextStrikeThrough };
export default textStrikeThroughSettReducer;
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type textStrikeThroughSettingsState = {
  activeTextStrikeThrough: boolean;
  btnStyleTextStrikeThrough: { backgroundColor: string }
};

const initialState: textStrikeThroughSettingsState = {
    activeTextStrikeThrough: false,
    btnStyleTextStrikeThrough: { backgroundColor: "#3f51b5" }
};

const textStrikeThroughSettSlice = createSlice({
  name: 'textStrikeThroughSett',
  initialState,
  reducers: {
    setActiveTextStrikeThrough: (state, action: PayloadAction<boolean>) => {
      state.activeTextStrikeThrough = action.payload;
    },
    setBtnStyleTextStrikeThrough: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTextStrikeThrough = action.payload;
    },
  },
});

export const { setActiveTextStrikeThrough, setBtnStyleTextStrikeThrough } = textStrikeThroughSettSlice.actions;
export default textStrikeThroughSettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
