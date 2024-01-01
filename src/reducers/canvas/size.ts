import { Size } from "../../modules/types"

const initialState: Size = {
    width: 800, 
    height: 600, 
};

const setWidth = (value: number) => {
    return {
        type: 'SET_WIDTH',
        payload: {
            width: value,
        },
    };
};

const setHeight = (value: string) => {
    return {
        type: 'SET_HEIGHT',
        payload: {
            height: value,
        },
    };
};

const sizeReducer = (state = initialState, action: { type: string; payload: Size; }) => {
switch (action.type) {
    case 'SET_WIDTH':
        return {
            ...state,
            width: action.payload.width,
        };
    case 'SET_HEIGHT':
        return {
            ...state,
            height: action.payload.height,
        };
    default:
        return state;
}
};
    
export { setWidth, setHeight };
export default sizeReducer;
