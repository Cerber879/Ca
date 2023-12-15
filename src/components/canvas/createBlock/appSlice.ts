import { ObjectList } from "../../../modules/types";

interface AppState {
  objectBlocks: ObjectList;
}

const initialState: AppState = {
  objectBlocks: [],
};

const reducer = (state: AppState = initialState, action: { type: string; payload: AppState }) => {
  switch (action.type) {
    case "SET_OBJECT_BLOCKS":
      return {
        ...state,
        objectBlocks: action.payload.objectBlocks,
      };
    default:
      return state;
  }
};

const setObjectBlocks = (value: ObjectList) => ({
  type: "SET_OBJECT_BLOCKS",
  payload: {
    objectBlocks: value,
  },
});

export {
  setObjectBlocks,
};

export default reducer;