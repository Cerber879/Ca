import { setActiveImage, setBtnStyleImage } from "./imageSettings"
import { setIsActive } from "../../../../reducers/setBar/activeButton"
import { AnyAction, Dispatch } from "redux";

export function BtnImageStatus(nameProcess: string, dispatch: Dispatch<AnyAction>, activeImage: boolean, id: string) {
    switch(nameProcess) {
    case "imageHover": {
        if (activeImage === false) { 
            dispatch(setBtnStyleImage({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "imageNotHover": {
        if (activeImage === false) {
            dispatch(setBtnStyleImage({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "imageClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeImage === false) {
            dispatch(setIsActive("Image"));
            dispatch(setActiveImage(true));
            dispatch(setBtnStyleImage({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/photo.svg');
        } else {
            dispatch(setActiveImage(false));
            dispatch(setBtnStyleImage({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/photo2.svg');
        } 
        break;
    }
    }
}