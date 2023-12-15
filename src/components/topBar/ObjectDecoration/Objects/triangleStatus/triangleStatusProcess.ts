import { setActiveObjTriangle, setBtnStyleTriangle } from "./triangleSettings"
import { setIsActive } from "../../../../../reducers/setBar/activeButton"
import { AnyAction, Dispatch } from "redux";

export function BtnTriangleStatus(nameProcess: string, dispatch: Dispatch<AnyAction>, activeObjTriangle: boolean, id: string) {
    switch(nameProcess) {
    case "triangleHover": {
        if (activeObjTriangle === false) { 
            dispatch(setBtnStyleTriangle({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "triangleNotHover": {
        if (activeObjTriangle === false) {
            dispatch(setBtnStyleTriangle({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "triangleClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeObjTriangle === false) {
            dispatch(setIsActive("Triangle"));
            dispatch(setActiveObjTriangle(true));
            dispatch(setBtnStyleTriangle({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/triangle_active.svg');
        } else {
            dispatch(setActiveObjTriangle(false));
            dispatch(setBtnStyleTriangle({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/triangle.svg');
        } 
        break;
    }
    }
}