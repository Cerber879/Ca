import {
  setActiveTextUnderLine,
  setBtnStyleTextUnderLine,
} from "./underLineSettings";
import { AnyAction, Dispatch } from "redux";

export function TextUnderLineStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeTextUnderLine: boolean,
  id: string
) {
  switch (nameProcess) {
  case "textUnderLineHover": {
    if (activeTextUnderLine === false) {
      dispatch(setBtnStyleTextUnderLine({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "textUnderLineNotHover": {
    if (activeTextUnderLine === false) {
      dispatch(setBtnStyleTextUnderLine({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "textUnderLineClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeTextUnderLine === false) {
      dispatch(setActiveTextUnderLine(true));
      dispatch(setBtnStyleTextUnderLine({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/text_underline_active.svg");
    } else {
      dispatch(setActiveTextUnderLine(false));
      dispatch(setBtnStyleTextUnderLine({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/text_underline.svg");
    }
    break;
  }
  }
}
