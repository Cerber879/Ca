import { AnyAction, Dispatch } from "redux";

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
