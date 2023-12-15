type zoomState = {
    zoom: number
}

const initialState: zoomState = {
    zoom: 1, 
};

const setZoom = (value: number) => {
    return {
        type: 'SET_ZOOM',
        payload: {
            width: value,
        },
    };
};

const sizeReducer = (state = initialState, action: { type: string; payload: zoomState; }) => {
switch (action.type) {
    case 'SET_ZOOM':
        return {
            ...state,
            zoom: action.payload.zoom,
        };
    default:
        return state;
}
};
    
export { setZoom };
export default sizeReducer;
