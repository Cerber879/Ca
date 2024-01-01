interface penSettingsState {
  activePen: boolean;
  btnStylePen: { backgroundColor: string };
}

const initialState: penSettingsState = {
  activePen: false,
  btnStylePen: { backgroundColor: "#3f51b5" },
};

const setActivePen = (value: boolean) => {
  return {
    type: "SET_ACTIVEPEN",
    payload: {
      activePen: value,
    },
  };
};

const setBtnStylePen = (value: { backgroundColor: string }) => {
  return {
    type: "SET_BTN_STYLEPEN",
    payload: {
      btnStylePen: value,
    },
  };
};

const PenSettReducer = (
  state = initialState,
  action: { type: string; payload: penSettingsState }
) => {
  switch (action.type) {
  case "SET_ACTIVEPEN": {
    const newState = {
      ...state,
      activePen: action.payload.activePen,
    };
    return newState;
  }
  case "SET_BTN_STYLEPEN": {
    const newState = {
      ...state,
      btnStylePen: action.payload.btnStylePen,
    };
    return newState;
  }
  default:
    return state;
  }
};

export { setActivePen, setBtnStylePen };
export default PenSettReducer;
