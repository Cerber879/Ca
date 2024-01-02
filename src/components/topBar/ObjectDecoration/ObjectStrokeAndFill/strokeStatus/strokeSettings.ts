interface objStrokeSettingsState {
  activeObjStroke: boolean;
  btnStyleStroke: { backgroundColor: string };
}

const initialState: objStrokeSettingsState = {
  activeObjStroke: false,
  btnStyleStroke: { backgroundColor: "#3f51b5" },
};

const setActiveObjStroke = (value: boolean) => {
  return {
    type: "SET_ACTIVE_OBJ_STROKE",
    payload: {
      activeObjStroke: value,
    },
  };
};

const setBtnStyleObjStroke = (value: { backgroundColor: string }) => {
  return {
    type: "SET_BTN_STYLE_STROKE",
    payload: {
      btnStyleStroke: value,
    },
  };
};

const objStrokeSettReducer = (
  state = initialState,
  action: { type: string; payload: objStrokeSettingsState }
) => {
  switch (action.type) {
  case "SET_ACTIVE_OBJ_STROKE": {
    const newState = {
      ...state,
      activeObjStroke: action.payload.activeObjStroke,
    };
    return newState;
  }
  case "SET_BTN_STYLE_STROKE": {
    const newState = {
      ...state,
      btnStyleStroke: action.payload.btnStyleStroke,
    };
    return newState;
  }
  default:
    return state;
  }
};

export { setActiveObjStroke, setBtnStyleObjStroke };
export default objStrokeSettReducer;
