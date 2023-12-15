import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type muddyTextSettingsState = {
  activeTextMuddy: boolean;
  btnStyleMuddy: { backgroundColor: string }
};

const initialState: muddyTextSettingsState = {
  activeTextMuddy: false,
  btnStyleMuddy: { backgroundColor: "#3f51b5" }
};

const muddySettSlice = createSlice({
  name: 'transparentSett',
  initialState,
  reducers: {
    setMuddyText: (state, action: PayloadAction<boolean>) => {
      state.activeTextMuddy = action.payload;
    },
    setBtnStyleMuddy: (state, action: PayloadAction<{ backgroundColor: string }>) => {
      state.btnStyleMuddy = action.payload;
    },
  },
});

export const { setMuddyText, setBtnStyleMuddy } = muddySettSlice.actions;
export default muddySettSlice.reducer;