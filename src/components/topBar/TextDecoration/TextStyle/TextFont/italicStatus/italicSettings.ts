import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type textItalicSettingsState = {
  activeTextItalic: boolean;
  btnStyleTextItalic: { backgroundColor: string }
};

const initialState: textItalicSettingsState = {
    activeTextItalic: false,
  btnStyleTextItalic: { backgroundColor: "#3f51b5" }
};

const textItalicSettSlice = createSlice({
  name: 'textItalicSett',
  initialState,
  reducers: {
    setActiveTextItalic: (state, action: PayloadAction<boolean>) => {
      state.activeTextItalic = action.payload;
    },
    setBtnStyleTextItalic: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTextItalic = action.payload;
    },
  },
});

export const { setActiveTextItalic, setBtnStyleTextItalic } = textItalicSettSlice.actions;
export default textItalicSettSlice.reducer;