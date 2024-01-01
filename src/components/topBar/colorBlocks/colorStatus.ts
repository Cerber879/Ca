import { AnyAction, Dispatch } from "redux";

<<<<<<< HEAD
import {
  setIsActiveColor,
  setIsActiveColorBorder,
} from "../../../reducers/setBar/StyleElements";

export function ColorStatus(
  namePopup: string,
  dispatch: Dispatch<AnyAction>,
  typeColor: boolean
) {
  switch (namePopup) {
  case "black": {
    if (typeColor) {
      dispatch(setIsActiveColor("rgb(0, 0, 0)"));
    } else {
      dispatch(setIsActiveColorBorder("rgb(0, 0, 0)"));
    }
    break;
  }
  case "white": {
    if (typeColor) {
      dispatch(setIsActiveColor("rgb(255, 255, 255)"));
    } else {
      dispatch(setIsActiveColorBorder("rgb(255, 255, 255)"));
    }
    break;
  }
  case "blue": {
    if (typeColor) {
      dispatch(setIsActiveColor("rgb(36, 123, 255)"));
    } else {
      dispatch(setIsActiveColorBorder("rgb(36, 123, 255)"));
    }
    break;
  }
  case "red": {
    if (typeColor) {
      dispatch(setIsActiveColor("rgb(255, 0, 0)"));
    } else {
      dispatch(setIsActiveColorBorder("rgb(255, 0, 0)"));
    }
    break;
  }
  case "green": {
    if (typeColor) {
      dispatch(setIsActiveColor("rgb(0, 255, 26)"));
    } else {
      dispatch(setIsActiveColorBorder("rgb(0, 255, 26)"));
    }
  }
  }
}
=======
import { setIsActiveColor, setIsActiveColorBorder } from "../../../reducers/setBar/StyleElements"

export function ColorStatus(namePopup: string, dispatch: Dispatch<AnyAction>, typeColor: boolean) {
    switch(namePopup) {
    case "black": {
      if(typeColor){
          dispatch(setIsActiveColor("rgb(0, 0, 0)"));
        } else {
          dispatch(setIsActiveColorBorder("rgb(0, 0, 0)"));
        }
      break;
    }
    case "white": {
      if(typeColor){
          dispatch(setIsActiveColor("rgb(255, 255, 255)"));
        } else {
          dispatch(setIsActiveColorBorder("rgb(255, 255, 255)"));
        }
      break;
    }
    case "blue": {
      if(typeColor){
          dispatch(setIsActiveColor("rgb(36, 123, 255)"));
        } else {
          dispatch(setIsActiveColorBorder("rgb(36, 123, 255)"));
        }
      break;
    }
    case "red": {
      if(typeColor){
          dispatch(setIsActiveColor("rgb(255, 0, 0)"));
        } else {
          dispatch(setIsActiveColorBorder("rgb(255, 0, 0)"));
        }
      break;
    }
    case "green": {
      if(typeColor){
        dispatch(setIsActiveColor("rgb(0, 255, 26)"));
    } else {
        dispatch(setIsActiveColorBorder("rgb(0, 255, 26)"));
    }  
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
