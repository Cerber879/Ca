import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type textBoldSettingsState = {
  activeTextBold: boolean;
  btnStyleTextBold: { backgroundColor: string }
};

const initialState: textBoldSettingsState = {
    activeTextBold: false,
    btnStyleTextBold: { backgroundColor: "#3f51b5" }
};

const textBoldSettSlice = createSlice({
  name: 'textBoldSett',
  initialState,
  reducers: {
    setActiveTextBold: (state, action: PayloadAction<boolean>) => {
      state.activeTextBold = action.payload;
    },
    setBtnStyleTextBold: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTextBold = action.payload;
    },
  },
});

export const { setActiveTextBold, setBtnStyleTextBold } = textBoldSettSlice.actions;
export default textBoldSettSlice.reducer;