import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type drawSettingsState = {
  activePen: boolean;
  btnStylePen: { backgroundColor: string }
};

const initialState: drawSettingsState = {
  activePen: false,
  btnStylePen: { backgroundColor: "#3f51b5" }
};

const drawSettSlice = createSlice({
  name: 'drawSett',
  initialState,
  reducers: {
    setActivePen: (state, action: PayloadAction<boolean>) => {
      state.activePen = action.payload;
    },
    setBtnStylePen: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStylePen = action.payload;
    },
  },
});

export const { setActivePen, setBtnStylePen } = drawSettSlice.actions;
export default drawSettSlice.reducer;