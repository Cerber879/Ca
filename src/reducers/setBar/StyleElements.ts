type styleElements = {
    activeColor: string,
    activeColorBorder: string,
    activeFont: number,
    activeFontFamily: string,
}

const initialState: styleElements = {
    activeColor: "rgb(0, 0, 0)",
    activeColorBorder: "rgb(255, 255, 255)",
    activeFont: 12,
    activeFontFamily: "Arial",
};

const setIsActiveColor = (value: string) => {
    return {
        type: 'SET_IS_ACTIVE_COLOR',
        payload: {
            activeColor: value,
        },
    };
};

const setIsActiveColorBorder = (value: string) => {
    return {
        type: 'SET_IS_ACTIVE_COLOR_BORDER',
        payload: {
            activeColorBorder: value,
        },
    };
};

const setIsActiveFont = (value: number) => {
    return {
        type: 'SET_IS_ACTIVE_FONT',
        payload: {
            activeFont: value,
        },
    };
};

const setIsActiveFontFamily = (value: string) => {
    return {
        type: 'SET_IS_ACTIVE_FONT_FAMILY',
        payload: {
            activeFontFamily: value,
        },
    };
};

const StyleElementsReducer = (state = initialState, action: { type: string; payload: styleElements; }) => {
    switch (action.type) {
        case 'SET_IS_ACTIVE_COLOR':
        return {
            ...state,
            activeColor: action.payload.activeColor,
        };
        case 'SET_IS_ACTIVE_COLOR_BORDER':
        return {
            ...state,
            activeColorBorder: action.payload.activeColorBorder,
        };
        case 'SET_IS_ACTIVE_FONT':
        return {
            ...state,
            activeFont: action.payload.activeFont,
        };
        case 'SET_IS_ACTIVE_FONT_FAMILY':
        return {
            ...state,
            activeFontFamily: action.payload.activeFontFamily,
        };
        default:
            return state;
    }
};
    
export { setIsActiveColor, setIsActiveColorBorder, setIsActiveFont, setIsActiveFontFamily };
export default StyleElementsReducer;
  