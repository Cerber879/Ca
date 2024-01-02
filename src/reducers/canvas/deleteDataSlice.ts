import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DeleteDataState = {
  deleteData: string;
};

const initialState: DeleteDataState = {
  deleteData: "",
};

const deleteDataReducer = createSlice({
  name: "deleteData",
  initialState,
  reducers: {
    setDeleteData: (state, action: PayloadAction<string>) => {
      state.deleteData = action.payload;
    },
  },
});

export const { setDeleteData } = deleteDataReducer.actions;
export default deleteDataReducer.reducer;

// const initialState = {
//   deleteData: '',
// };

// const setDeleteData = (value: string) => {
//   return {
//     type: 'SET_DELETE_DATA',
//     payload: {
//       deleteData: value,
//     },
//   };
// };

// const deleteDataReducer = (state = initialState, action: { type: string; payload: string; }) => {
//   switch (action.type) {
//   case 'SET_DELETE_DATA':
//     return {

//       deleteData: action.payload,
//     };
//   default:
//     return state;
//   }
// };

// export { setDeleteData };

// export default deleteDataReducer;
