<<<<<<< HEAD
interface imageSettingsState {
  activeImage: boolean;
  btnStyleImage: { backgroundColor: string };
}

const initialState: imageSettingsState = {
  activeImage: false,
  btnStyleImage: { backgroundColor: "#3f51b5" },
};

const setActiveImage = (value: boolean) => {
  return {
    type: "SET_ACTIVE_IMAGE",
    payload: {
      activeImage: value,
    },
  };
};

const setBtnStyleImage = (value: { backgroundColor: string }) => {
  return {
    type: "SET_BTN_STYLE_IMAGE",
    payload: {
      btnStyleImage: value,
    },
  };
};

const ImageSettReducer = (
  state = initialState,
  action: { type: string; payload: imageSettingsState }
) => {
  switch (action.type) {
  case "SET_ACTIVE_IMAGE": {
    const newState = {
      ...state,
      activeImage: action.payload.activeImage,
    };
    return newState;
  }
  case "SET_BTN_STYLE_IMAGE": {
    const newState = {
      ...state,
      btnStyleImage: action.payload.btnStyleImage,
    };
    return newState;
  }
  default:
    return state;
  }
};

export { setActiveImage, setBtnStyleImage };
export default ImageSettReducer;
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type imageSettingsState = {
  activeImage: boolean;
  btnStyleImage: { backgroundColor: string }
};

const initialState: imageSettingsState = {
    activeImage: false,
    btnStyleImage: { backgroundColor: "#3f51b5" }
};

const imageSettSlice = createSlice({
  name: 'imageSett',
  initialState,
  reducers: {
    setActiveImage: (state, action: PayloadAction<boolean>) => {
      state.activeImage = action.payload;
    },
    setBtnStyleImage: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleImage = action.payload;
    },
  },
});

export const { setActiveImage, setBtnStyleImage } = imageSettSlice.actions;
export default imageSettSlice.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
