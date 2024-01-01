const initialState = {
  active: "",
};

const setIsActive = (value: string) => {
  return {
<<<<<<< HEAD
    type: "SET_IS_ACTIVE",
=======
    type: 'SET_IS_ACTIVE',
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
    payload: value,
  };
};

<<<<<<< HEAD
const activeButtonReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
  case "SET_IS_ACTIVE":
    return {
      ...state,
      active: action.payload,
    };
  default:
    return state;
  }
};

=======
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
    
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
export { setIsActive };
export default activeButtonReducer;
