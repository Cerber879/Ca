<<<<<<< HEAD
import { setActiveTextItalic, setBtnStyleTextItalic } from "./italicSettings";
import { AnyAction, Dispatch } from "redux";

export function TextItalicStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeTextItalic: boolean,
  id: string
) {
  switch (nameProcess) {
  case "textItalicHover": {
    if (activeTextItalic === false) {
      dispatch(setBtnStyleTextItalic({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "textItalicNotHover": {
    if (activeTextItalic === false) {
      dispatch(setBtnStyleTextItalic({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "textItalicClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeTextItalic === false) {
      dispatch(setActiveTextItalic(true));
      dispatch(setBtnStyleTextItalic({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/text_italic_active.svg");
    } else {
      dispatch(setActiveTextItalic(false));
      dispatch(setBtnStyleTextItalic({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/text_italic.svg");
    }
    break;
  }
  }
}
=======
import { setActiveTextItalic, setBtnStyleTextItalic } from "./italicSettings"
import { AnyAction, Dispatch } from "redux";

export function TextItalicStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeTextItalic: boolean, id: string) {
    switch(nameProcess) {
    case "textItalicHover": {
        if (activeTextItalic === false) { 
            dispatch(setBtnStyleTextItalic({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "textItalicNotHover": {
        if (activeTextItalic === false) {
            dispatch(setBtnStyleTextItalic({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "textItalicClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeTextItalic === false) {
            dispatch(setActiveTextItalic(true));
            dispatch(setBtnStyleTextItalic({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/text_italic_active.svg');
        } else {
            dispatch(setActiveTextItalic(false));
            dispatch(setBtnStyleTextItalic({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/text_italic.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
