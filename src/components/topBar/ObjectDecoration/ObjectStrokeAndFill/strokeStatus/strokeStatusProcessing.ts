<<<<<<< HEAD
import { setActiveObjStroke, setBtnStyleObjStroke } from "./strokeSettings";
import { AnyAction, Dispatch } from "redux";

export function objStrokeStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeObjStroke: boolean,
  id: string
) {
  switch (nameProcess) {
  case "objStrokeHover": {
    if (activeObjStroke === false) {
      dispatch(setBtnStyleObjStroke({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "objStrokeNotHover": {
    if (activeObjStroke === false) {
      dispatch(setBtnStyleObjStroke({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "objStrokeClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeObjStroke === false) {
      dispatch(setActiveObjStroke(true));
      dispatch(setBtnStyleObjStroke({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/stroke_active.svg");
    } else {
      dispatch(setActiveObjStroke(false));
      dispatch(setBtnStyleObjStroke({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/stroke.svg");
    }
    break;
  }
  }
}
=======
import { setActiveObjStroke, setBtnStyleObjStroke } from "./strokeSettings"
import { AnyAction, Dispatch } from "redux";

export function objStrokeStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeObjStroke: boolean, id: string) {
    switch(nameProcess) {
    case "objStrokeHover": {
        if (activeObjStroke === false) { 
            dispatch(setBtnStyleObjStroke({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "objStrokeNotHover": {
        if (activeObjStroke === false) {
            dispatch(setBtnStyleObjStroke({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "objStrokeClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeObjStroke === false) {
            dispatch(setActiveObjStroke(true));
            dispatch(setBtnStyleObjStroke({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/stroke_active.svg');
        } else {
            dispatch(setActiveObjStroke(false));
            dispatch(setBtnStyleObjStroke({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/stroke.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
