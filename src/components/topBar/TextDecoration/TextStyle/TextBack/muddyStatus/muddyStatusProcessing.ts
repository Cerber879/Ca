import { TransparentStatusProcessing } from "../tranparentStatus/trasparentStatusProcessing";
<<<<<<< HEAD
import { setActiveTextMuddy, setBtnStyleTextMuddy } from "./muddySettings";
import { AnyAction, Dispatch } from "redux";

export function MuddyStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeTextMuddy: boolean,
  activeTransparentText: boolean,
  id: string
) {
  switch (nameProcess) {
  case "muddyHover": {
    if (activeTextMuddy === false) {
      dispatch(setBtnStyleTextMuddy({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "muddyNotHover": {
    if (activeTextMuddy === false) {
      dispatch(setBtnStyleTextMuddy({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "muddyClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeTextMuddy === false) {
      if (activeTransparentText === true) {
        TransparentStatusProcessing(
          "transparentClick",
          dispatch,
          activeTextMuddy,
          activeTransparentText,
          "svg_icon_text_transparent"
        );
      }
      dispatch(setActiveTextMuddy(true));
      dispatch(setBtnStyleTextMuddy({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/text_hover.svg");
    } else {
      dispatch(setActiveTextMuddy(false));
      dispatch(setBtnStyleTextMuddy({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/text2.svg");
    }
    break;
  }
  }
}
=======
import { setMuddyText, setBtnStyleMuddy } from "./muddySettings"
import { AnyAction, Dispatch } from "redux";

export function MuddyStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeTextMuddy: boolean, activeTransparentText: boolean, id: string) {
    switch(nameProcess) {
    case "muddyHover": {
        if (activeTextMuddy === false) { 
            dispatch(setBtnStyleMuddy({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "muddyNotHover": {
        if (activeTextMuddy === false) {
            dispatch(setBtnStyleMuddy({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "muddyClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeTextMuddy === false) {
            if (activeTransparentText === true) {
                TransparentStatusProcessing("transparentClick", dispatch, activeTextMuddy, activeTransparentText, "svg_icon_text_transparent");
            }
            dispatch(setMuddyText(true));
            dispatch(setBtnStyleMuddy({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/text_hover.svg');
        } else {
            dispatch(setMuddyText(false));
            dispatch(setBtnStyleMuddy({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/text2.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
