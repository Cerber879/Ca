<<<<<<< HEAD
interface triangleSettingsState {
  activeObjTriangle: boolean;
  btnStyleTriangle: { backgroundColor: string };
}

const initialState: triangleSettingsState = {
  activeObjTriangle: false,
  btnStyleTriangle: { backgroundColor: "#3f51b5" },
};

function setActiveObjTriangle(value: boolean) {
  return {
    type: "SET_ACTIVE_OBJ_TRIANGLE",
    payload: {
      activeObjTriangle: value,
    },
  };
}

function setBtnStyleTriangle(value: { backgroundColor: string }) {
  return {
    type: "SET_BTN_STYLE_OBJ_TRIANGLE",
    payload: {
      btnStyleTriangle: value,
    },
  };
}

function TriangleSettReducer(
  state = initialState,
  action: { type: string; payload: triangleSettingsState }
) {
  switch (action.type) {
  case "SET_ACTIVE_OBJ_TRIANGLE":
    return {
      ...state,
      activeObjTriangle: action.payload.activeObjTriangle,
    };
  case "SET_BTN_STYLE_OBJ_TRIANGLE":
    return {
      ...state,
      btnStyleTriangle: action.payload.btnStyleTriangle,
    };
  default:
    return state;
  }
}

export { setActiveObjTriangle, setBtnStyleTriangle };
export default TriangleSettReducer;
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type triangleSettingsState = {
  activeObjTriangle: boolean;
  btnStyleTriangle: { backgroundColor: string }
};

const initialState: triangleSettingsState = {
  activeObjTriangle: false,
  btnStyleTriangle: { backgroundColor: "#3f51b5" }
};

const triangleSettSlice = createSlice({
  name: 'triangleSett',
  initialState,
  reducers: {
    setActiveObjTriangle: (state, action: PayloadAction<boolean>) => {
      state.activeObjTriangle = action.payload;
    },
    setBtnStyleTriangle: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTriangle = action.payload;
    },
  },
});

export const { setActiveObjTriangle, setBtnStyleTriangle } = triangleSettSlice.actions;
export default triangleSettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
