<<<<<<< HEAD
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

type DeleteDataState = {
  deleteData: string;
};

const initialState: DeleteDataState = {
<<<<<<< HEAD
  deleteData: "",
};

const deleteDataReducer = createSlice({
  name: "deleteData",
=======
  deleteData: '',
};

const deleteDataReducer = createSlice({
  name: 'deleteData',
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  initialState,
  reducers: {
    setDeleteData: (state, action: PayloadAction<string>) => {
      state.deleteData = action.payload;
    },
<<<<<<< HEAD
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
=======
    clearDeleteData: (state) => {
      state.deleteData = '';
    },
  },
});

export const { setDeleteData, clearDeleteData } = deleteDataReducer.actions;
export default deleteDataReducer.reducer;
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
