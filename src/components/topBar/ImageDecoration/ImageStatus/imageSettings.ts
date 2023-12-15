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