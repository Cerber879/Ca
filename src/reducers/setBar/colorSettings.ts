type styleElements = {
    typeColor: boolean,
}

const initialState: styleElements = {
    typeColor: true,
};

const setTypeColor = (value: boolean) => {
    return {
        type: 'SET_TYPE_COLOR',
        payload: {
            typeColor: value,
        },
    };
};

const typeColorReducer = (state = initialState, action: { type: string; payload: styleElements; }) => {
switch (action.type) {
    case 'SET_TYPE_COLOR':
    return {
        ...state,
        typeColor: action.payload.typeColor,
    };
    default:
        return state;
}
};
    
export { setTypeColor };
export default typeColorReducer;
  