import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type transparentTextSettingsState = {
  activeTextTransparent: boolean;
  btnStyleTransparent: { backgroundColor: string }
};

const initialState: transparentTextSettingsState = {
  activeTextTransparent: true,
  btnStyleTransparent: { backgroundColor: "#ffffff" }
};

const transparentSettSlice = createSlice({
  name: 'transparentSett',
  initialState,
  reducers: {
    setTransparentText: (state, action: PayloadAction<boolean>) => {
      state.activeTextTransparent = action.payload;
    },
    setBtnStyleTransparent: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleTransparent = action.payload;
    },
  },
});

export const { setTransparentText, setBtnStyleTransparent } = transparentSettSlice.actions;
export default transparentSettSlice.reducer;