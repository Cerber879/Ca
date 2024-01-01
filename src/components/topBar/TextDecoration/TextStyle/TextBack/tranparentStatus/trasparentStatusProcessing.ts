import { MuddyStatusProcessing } from "../muddyStatus/muddyStatusProcessing";
<<<<<<< HEAD
import {
  setActiveTextTransparent,
  setBtnStyleTextTransparent,
} from "./transparentSettings";
import { AnyAction, Dispatch } from "redux";

export function TransparentStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeTextMuddy: boolean,
  activeTextTransparent: boolean,
  id: string
) {
  switch (nameProcess) {
  case "transparentHover": {
    if (activeTextTransparent === false) {
      dispatch(setBtnStyleTextTransparent({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "transparentNotHover": {
    if (activeTextTransparent === false) {
      dispatch(setBtnStyleTextTransparent({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "transparentClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeTextTransparent === false) {
      if (activeTextMuddy === true) {
        MuddyStatusProcessing(
          "muddyClick",
          dispatch,
          activeTextMuddy,
          activeTextTransparent,
          "svg_icon_text_transparent"
        );
      }
      dispatch(setActiveTextTransparent(true));
      dispatch(setBtnStyleTextTransparent({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/text_hover.svg");
    } else {
      dispatch(setActiveTextTransparent(false));
      dispatch(setBtnStyleTextTransparent({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/text2.svg");
    }
    break;
  }
  }
}
=======
import { setTransparentText, setBtnStyleTransparent} from "./transparentSettings"
import { AnyAction, Dispatch } from "redux";

export function TransparentStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeTextMuddy: boolean, activeTextTransparent: boolean, id: string) {
    switch(nameProcess) {
    case "transparentHover": {
        if (activeTextTransparent === false) { 
            dispatch(setBtnStyleTransparent({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "transparentNotHover": {
        if (activeTextTransparent === false) {
            dispatch(setBtnStyleTransparent({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "transparentClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeTextTransparent === false) {
            if (activeTextMuddy === true) {
                MuddyStatusProcessing("muddyClick", dispatch, activeTextMuddy , activeTextTransparent, "svg_icon_text_transparent")
            }
            dispatch(setTransparentText(true));
            dispatch(setBtnStyleTransparent({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/text_hover.svg');
        } else {
            dispatch(setTransparentText(false));
            dispatch(setBtnStyleTransparent({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/text2.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
