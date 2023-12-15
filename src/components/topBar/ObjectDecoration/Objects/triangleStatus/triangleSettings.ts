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