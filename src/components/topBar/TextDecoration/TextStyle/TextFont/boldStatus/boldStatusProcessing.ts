import { setActiveTextBold, setBtnStyleTextBold } from "./boldSettings"
import { AnyAction, Dispatch } from "redux";

export function TextBoldStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeTextBold: boolean, id: string) {
    switch(nameProcess) {
    case "textBoldHover": {
        if (activeTextBold === false) { 
            dispatch(setBtnStyleTextBold({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "textBoldNotHover": {
        if (activeTextBold === false) {
            dispatch(setBtnStyleTextBold({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "textBoldClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeTextBold === false) {
            dispatch(setActiveTextBold(true));
            dispatch(setBtnStyleTextBold({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/text_bold_active.svg');
        } else {
            dispatch(setActiveTextBold(false));
            dispatch(setBtnStyleTextBold({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/text_bold.svg');
        } 
        break;
    }
    }
}