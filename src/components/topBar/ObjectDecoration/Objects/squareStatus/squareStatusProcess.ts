import { setActiveObjSquare, setBtnStyleSquare } from "./squareSettings"
import { setIsActive } from "../../../../../reducers/setBar/activeButton"
import { AnyAction, Dispatch } from "redux";

export function BtnSquareStatus(nameProcess: string, dispatch: Dispatch<AnyAction>, activeObjSquare: boolean, id: string) {
    switch(nameProcess) {
    case "squareHover": {
        if (activeObjSquare === false) { 
            dispatch(setBtnStyleSquare({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "squareNotHover": {
        if (activeObjSquare === false) {
            dispatch(setBtnStyleSquare({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "squareClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeObjSquare === false) {
            dispatch(setIsActive("Square"));
            dispatch(setActiveObjSquare(true));
            dispatch(setBtnStyleSquare({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/square_active.svg');
        } else {
            dispatch(setActiveObjSquare(false));
            dispatch(setBtnStyleSquare({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/square.svg');
        } 
        break;
    }
    }
}