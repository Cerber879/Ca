import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DeleteDataState = {
  deleteData: string;
};

const initialState: DeleteDataState = {
  deleteData: '',
};

const deleteDataReducer = createSlice({
  name: 'deleteData',
  initialState,
  reducers: {
    setDeleteData: (state, action: PayloadAction<string>) => {
      state.deleteData = action.payload;
    },
    clearDeleteData: (state) => {
      state.deleteData = '';
    },
  },
});

export const { setDeleteData, clearDeleteData } = deleteDataReducer.actions;
export default deleteDataReducer.reducer;