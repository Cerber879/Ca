import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type textUnderLineSettingsState = {
  activeTextUnderLine: boolean;
  btnStyleTextUnderLine: { backgroundColor: string }
};

const initialState: textUnderLineSettingsState = {
    activeTextUnderLine: false,
    btnStyleTextUnderLine: { backgroundColor: "#3f51b5" }
};

const textUnderLineSettSlice = createSlice({
  name: 'textUnderLineSett',
  initialState,
  reducers: {
    setActiveTextUnderLine: (state, action: PayloadAction<boolean>) => {
      state.activeTextUnderLine = action.payload;
    },
    setBtnStyleTextUnderLine: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTextUnderLine = action.payload;
    },
  },
});

export const { setActiveTextUnderLine, setBtnStyleTextUnderLine } = textUnderLineSettSlice.actions;
export default textUnderLineSettSlice.reducer;