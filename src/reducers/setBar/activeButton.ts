const initialState = {
  active: "",
};

const setIsActive = (value: string) => {
  return {
    type: 'SET_IS_ACTIVE',
    payload: value,
  };
};

const activeButtonReducer = (state = initialState, action: { type: string; payload: string; }) => {
  switch (action.type) {
    case 'SET_IS_ACTIVE':
      return {
        ...state,
        active: action.payload,
      };
      default:
        return state;
  }
};
    
export { setIsActive };
export default activeButtonReducer;
