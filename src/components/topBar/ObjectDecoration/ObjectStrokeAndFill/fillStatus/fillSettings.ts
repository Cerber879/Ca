interface objFillSettingsState {
    activeObjFill: boolean;
    btnStyleFill: { backgroundColor: string }
};

const initialState: objFillSettingsState = {
    activeObjFill: false,
    btnStyleFill: { backgroundColor: "#3f51b5" }
};

const setActiveObjFill = (value: boolean) => {
    return {
        type: 'SET_ACTIVE_OBJ_FILL',
        payload: {
            activeObjFill: value,
        }
    }
};

const setBtnStyleObjFill = (value: { backgroundColor: string }) => {
    return {
        type: 'SET_BTN_STYLE_FILL',
        payload: {
            btnStyleFill: value,
        }
    }
};

const objFillSettReducer = (state = initialState, action: { type: string; payload: objFillSettingsState; }) => {
switch (action.type) {
    case 'SET_ACTIVE_OBJ_FILL': {
        const newState = {
            ...state,
            activeObjFill: action.payload.activeObjFill,
        };
        return newState;
    }
    case 'SET_BTN_STYLE_FILL': {
        const newState = {
            ...state,
            btnStyleFill: action.payload.btnStyleFill,
        };
         return newState;
    }
    default:
        return state;
}
};

export { setActiveObjFill, setBtnStyleObjFill };
export default objFillSettReducer;