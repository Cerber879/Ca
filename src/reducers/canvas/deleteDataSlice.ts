type deleteDataState = {
  deleteData: string;
}

const initialState: deleteDataState = {
  deleteData: "",
};

const setDeleteData = (value: string) => {
  return {
    type: "SET_DELETE_DATA",
    payload: {
      deleteData: value,
    },
  };
};

const deleteDataReducer = (
  state: deleteDataState = initialState,
  action: { type: string; payload: deleteDataState }
) => {
  switch (action.type) {
  case "SET_DELETE_DATA":
    return {
      ...state,
      deleteData: action.payload.deleteData,
    };
  default:
    return state;
  }
};

export { setDeleteData };

export default deleteDataReducer;
