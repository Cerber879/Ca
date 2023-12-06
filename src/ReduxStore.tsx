import { configureStore } from '@reduxjs/toolkit';

const AppState = {
    inputBlocks: [],
    imageBlocks: [],
    objBlocks: [],
  };
  
// Определяем редюсер для обработки действий
const reducer = (state: unknown = AppState, action: { type: any; payload: any }) => {
    const appState = state as typeof AppState; 
  
    switch (action.type) {
      case 'SET_INPUT_BLOCKS':
        return { ...appState, inputBlocks: action.payload };
      case 'SET_IMAGE_BLOCKS':
        return { ...appState, imageBlocks: action.payload };
      case 'SET_OBJ_BLOCKS':
        return { ...appState, objBlocks: action.payload };
      default:
        return appState;
    }
  };

export const setInputBlocksAction = (newInputBlocks: any) => {
    return {
        type: 'SET_INPUT_BLOCKS',
        payload: newInputBlocks,
    };
};

// Создание хранилища Redux
const store = configureStore({
  reducer: reducer,
});

export default store;