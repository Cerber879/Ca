interface objStrokeFillSettingsState {
  activeObjStrokeFill: boolean;
  btnStyleStrokeFill: { backgroundColor: string };
}

const initialState: objStrokeFillSettingsState = {
  activeObjStrokeFill: false,
  btnStyleStrokeFill: { backgroundColor: "#3f51b5" },
};

const setActiveObjStrokeFill = (value: boolean) => {
  return {
    type: "SET_ACTIVE_OBJ_STROKE_FILL",
    payload: {
      activeObjStrokeFill: value,
    },
  };
};

const setBtnStyleObjStrokeFill = (value: { backgroundColor: string }) => {
  return {
    type: "SET_BTN_STYLE_STROKE_FILL",
    payload: {
      btnStyleStrokeFill: value,
    },
  };
};

const objStrokeFillSettReducer = (
  state = initialState,
  action: { type: string; payload: objStrokeFillSettingsState }
) => {
  switch (action.type) {
  case "SET_ACTIVE_OBJ_STROKE_FILL": {
    const newState = {
      ...state,
      activeObjStrokeFill: action.payload.activeObjStrokeFill,
    };
    return newState;
  }
  case "SET_BTN_STYLE_STROKE_FILL": {
    const newState = {
      ...state,
      btnStyleStrokeFill: action.payload.btnStyleStrokeFill,
    };
    return newState;
  }
  default:
    return state;
  }
};

export { setActiveObjStrokeFill, setBtnStyleObjStrokeFill };
export default objStrokeFillSettReducer;
