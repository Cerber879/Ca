import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type textStrikeThroughSettingsState = {
  activeTextStrikeThrough: boolean;
  btnStyleTextStrikeThrough: { backgroundColor: string }
};

const initialState: textStrikeThroughSettingsState = {
    activeTextStrikeThrough: false,
    btnStyleTextStrikeThrough: { backgroundColor: "#3f51b5" }
};

const textStrikeThroughSettSlice = createSlice({
  name: 'textStrikeThroughSett',
  initialState,
  reducers: {
    setActiveTextStrikeThrough: (state, action: PayloadAction<boolean>) => {
      state.activeTextStrikeThrough = action.payload;
    },
    setBtnStyleTextStrikeThrough: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTextStrikeThrough = action.payload;
    },
  },
});

export const { setActiveTextStrikeThrough, setBtnStyleTextStrikeThrough } = textStrikeThroughSettSlice.actions;
export default textStrikeThroughSettSlice.reducer;