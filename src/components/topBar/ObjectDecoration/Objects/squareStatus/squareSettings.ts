<<<<<<< HEAD
type squareSettingsState = {
  activeObjSquare: boolean;
  btnStyleSquare: { backgroundColor: string };
}

const initialState: squareSettingsState = {
  activeObjSquare: false,
  btnStyleSquare: { backgroundColor: "#3f51b5" },
};

function setActiveObjSquare(value: boolean) {
  return {
    type: "SET_ACTIVE_OBJ_SQUARE",
    payload: {
      activeObjSquare: value,
    },
  };
}

function setBtnStyleSquare(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_OBJ_SQUARE",
    payload: {
      btnStyleSquare: value,
    },
  };
}

function SquareSettReducer(
  state: squareSettingsState = initialState,
  action: { type: string; payload: squareSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_OBJ_SQUARE":
    return {
      ...state,
      activeObjSquare: action.payload.activeObjSquare,
    };
  case "SET_BTN_STYLE_OBJ_SQUARE":
    return {
      ...state,
      btnStyleSquare: action.payload.btnStyleSquare,
    };
  default:
    return state;
  }
}

export { setActiveObjSquare, setBtnStyleSquare };
export default SquareSettReducer;
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type squareSettingsState = {
  activeObjSquare: boolean;
  btnStyleSquare: { backgroundColor: string }
};

const initialState: squareSettingsState = {
    activeObjSquare: false,
    btnStyleSquare: { backgroundColor: "#3f51b5" }
};

const imageSettSlice = createSlice({
  name: 'squareSett',
  initialState,
  reducers: {
    setActiveObjSquare: (state, action: PayloadAction<boolean>) => {
      state.activeObjSquare = action.payload;
    },
    setBtnStyleSquare: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleSquare = action.payload;
    },
  },
});

export const { setActiveObjSquare, setBtnStyleSquare } = imageSettSlice.actions;
export default imageSettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
