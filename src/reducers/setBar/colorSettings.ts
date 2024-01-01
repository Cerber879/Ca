type styleElements = {
<<<<<<< HEAD
  typeColor: boolean;
};

const initialState: styleElements = {
  typeColor: true,
};

const setTypeColor = (value: boolean) => {
  return {
    type: "SET_TYPE_COLOR",
    payload: {
      typeColor: value,
    },
  };
};

const typeColorReducer = (
  state = initialState,
  action: { type: string; payload: styleElements }
) => {
  switch (action.type) {
  case "SET_TYPE_COLOR":
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
=======
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
  
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
