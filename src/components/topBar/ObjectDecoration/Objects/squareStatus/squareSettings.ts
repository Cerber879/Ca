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