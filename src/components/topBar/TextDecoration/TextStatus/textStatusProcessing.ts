<<<<<<< HEAD
import { setActiveText, setBtnStyleText } from "./textSettings";
import { setIsActive } from "../../../../reducers/setBar/activeButton";
import { AnyAction, Dispatch } from "redux";

export function TextStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeText: boolean,
  id: string
) {
  switch (nameProcess) {
  case "textHover": {
    if (activeText === false) {
      dispatch(setBtnStyleText({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "textNotHover": {
    if (activeText === false) {
      dispatch(setBtnStyleText({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "textClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeText === false) {
      dispatch(setIsActive("Text"));
      dispatch(setActiveText(true));
      dispatch(setBtnStyleText({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/text_hover.svg");
    } else {
      dispatch(setActiveText(false));
      dispatch(setBtnStyleText({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/text2.svg");
    }
    break;
  }
  }
}
=======
import { setActiveText, setBtnStyleText } from "./textSettings"
import { setIsActive } from "../../../../reducers/setBar/activeButton"
import { AnyAction, Dispatch } from "redux";

export function TextStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeText: boolean, id: string) {
    switch(nameProcess) {
    case "textHover": {
        if (activeText === false) { 
            dispatch(setBtnStyleText({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "textNotHover": {
        if (activeText === false) {
            dispatch(setBtnStyleText({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "textClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeText === false) {
            dispatch(setIsActive("Text"));
            dispatch(setActiveText(true));
            dispatch(setBtnStyleText({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/text_hover.svg');
        } else {
            dispatch(setActiveText(false));
            dispatch(setBtnStyleText({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/text2.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
