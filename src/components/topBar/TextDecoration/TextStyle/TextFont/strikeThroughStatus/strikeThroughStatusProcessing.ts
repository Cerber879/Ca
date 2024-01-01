<<<<<<< HEAD
import {
  setActiveTextStrikeThrough,
  setBtnStyleTextStrikeThrough,
} from "./strikeThroughSettings";
import { AnyAction, Dispatch } from "redux";

export function TextStrikeThroughStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeTextStrikeThrough: boolean,
  id: string
) {
  switch (nameProcess) {
  case "textStrikeThroughHover": {
    if (activeTextStrikeThrough === false) {
      dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "textStrikeThroughNotHover": {
    if (activeTextStrikeThrough === false) {
      dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "textStrikeThroughClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeTextStrikeThrough === false) {
      dispatch(setActiveTextStrikeThrough(true));
      dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/text_strikethrough_active.svg");
    } else {
      dispatch(setActiveTextStrikeThrough(false));
      dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/text_strikethrough.svg");
    }
    break;
  }
  }
}
=======
import { setActiveTextStrikeThrough, setBtnStyleTextStrikeThrough } from "./strikeThroughSettings"
import { AnyAction, Dispatch } from "redux";

export function TextStrikeThroughStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeTextStrikeThrough: boolean, id: string) {
    switch(nameProcess) {
    case "textStrikeThroughHover": {
        if (activeTextStrikeThrough === false) { 
            dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "textStrikeThroughNotHover": {
        if (activeTextStrikeThrough === false) {
            dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "textStrikeThroughClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeTextStrikeThrough === false) {
            dispatch(setActiveTextStrikeThrough(true));
            dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/text_strikethrough_active.svg');
        } else {
            dispatch(setActiveTextStrikeThrough(false));
            dispatch(setBtnStyleTextStrikeThrough({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/text_strikethrough.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
