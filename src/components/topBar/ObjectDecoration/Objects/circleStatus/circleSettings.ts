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