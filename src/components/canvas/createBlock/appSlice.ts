import { ObjectList, ObjectType } from "../../../modules/types";
import { canvas } from "../../../modules/data";

type AppState = {
  objectBlocks: ObjectList;
  type: string;
  id: number;
}

const initialState: AppState = {
  objectBlocks: canvas.objects,
  type: "",
  id: 0,
};

const reducer = (
  state: AppState = initialState,
  action: { type: string; payload: AppState }
) => {
  switch (action.type) {
  case "SET_OBJECT_BLOCKS":
    return {
      ...state,
      objectBlocks: action.payload.objectBlocks,
    };
  case "REMOVE_OBJECT_BLOCKS_BY_TYPE":
    return {
      ...state,
      objectBlocks: state.objectBlocks.filter((block: ObjectType) => block.type !== action.payload.type),
    };
  case "SET_OBJECT_BLOCKS_BY_ID":
    return {
      ...state,
      objectBlocks: state.objectBlocks.filter((block: ObjectType) => block.id > action.payload.id),
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

const removeObjectBlocksByType = (value: string) => ({
  type: "REMOVE_OBJECT_BLOCKS_BY_TYPE",
  payload: {
    type: value,
  },
});

const removeObjectBlocksByID = (value: number) => ({
  type: "SET_OBJECT_BLOCKS_BY_ID",
  payload: {
    id: value,
  },
});

export {
  setObjectBlocks,
  removeObjectBlocksByType,
  removeObjectBlocksByID,
};

export default reducer;