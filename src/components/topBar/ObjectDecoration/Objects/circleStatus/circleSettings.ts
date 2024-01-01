<<<<<<< HEAD
type circleSettingsState = {
  activeObjCircle: boolean;
  btnStyleCircle: { backgroundColor: string };
}

const initialState: circleSettingsState = {
  activeObjCircle: false,
  btnStyleCircle: { backgroundColor: "#3f51b5" },
};

function setActiveObjCircle(value: boolean) {
  return {
    type: "SET_ACTIVE_OBJ_CIRCLE",
    payload: {
      activeObjCircle: value,
    },
  };
}

function setBtnStyleCircle(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_OBJ_CIRCLE",
    payload: {
      btnStyleCircle: value,
    },
  };
}

function circleSettReducer(
  state: circleSettingsState = initialState,
  action: { type: string; payload: circleSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_OBJ_CIRCLE":
    return {
      ...state,
      activeObjCircle: action.payload.activeObjCircle,
    };
  case "SET_BTN_STYLE_OBJ_CIRCLE":
    return {
      ...state,
      btnStyleCircle: action.payload.btnStyleCircle,
    };
  default:
    return state;
  }
}

export { setActiveObjCircle, setBtnStyleCircle };
export default circleSettReducer;
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type circleSettingsState = {
  activeObjCircle: boolean;
  btnStyleCircle: { backgroundColor: string }
};

const initialState: circleSettingsState = {
    activeObjCircle: false,
    btnStyleCircle: { backgroundColor: "#3f51b5" }
};

const imageSettSlice = createSlice({
  name: 'circleSett',
  initialState,
  reducers: {
    setActiveObjCircle: (state, action: PayloadAction<boolean>) => {
      state.activeObjCircle = action.payload;
    },
    setBtnStyleCircle: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleCircle = action.payload;
    },
  },
});

export const { setActiveObjCircle, setBtnStyleCircle } = imageSettSlice.actions;
export default imageSettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
