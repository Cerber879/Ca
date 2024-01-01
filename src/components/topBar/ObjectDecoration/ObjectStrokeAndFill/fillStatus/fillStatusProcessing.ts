<<<<<<< HEAD
import { setActiveObjFill, setBtnStyleObjFill } from "./fillSettings";
import { AnyAction, Dispatch } from "redux";

export function objFillStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeObjFill: boolean,
  id: string
) {
  switch (nameProcess) {
  case "objFillHover": {
    if (activeObjFill === false) {
      dispatch(setBtnStyleObjFill({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "objFillNotHover": {
    if (activeObjFill === false) {
      dispatch(setBtnStyleObjFill({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "objFillClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeObjFill === false) {
      dispatch(setActiveObjFill(true));
      dispatch(setBtnStyleObjFill({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/fill_active.svg");
    } else {
      dispatch(setActiveObjFill(false));
      dispatch(setBtnStyleObjFill({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/fill.svg");
    }
    break;
  }
  }
}
=======
import { setActiveObjFill, setBtnStyleObjFill } from "./fillSettings"
import { AnyAction, Dispatch } from "redux";

export function objFillStatusProcessing(nameProcess: string, dispatch: Dispatch<AnyAction>, activeObjFill: boolean, id: string) {
    switch(nameProcess) {
    case "objFillHover": {
        if (activeObjFill === false) { 
            dispatch(setBtnStyleObjFill({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "objFillNotHover": {
        if (activeObjFill === false) {
            dispatch(setBtnStyleObjFill({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "objFillClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeObjFill === false) {
            dispatch(setActiveObjFill(true));
            dispatch(setBtnStyleObjFill({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/fill_active.svg');
        } else {
            dispatch(setActiveObjFill(false));
            dispatch(setBtnStyleObjFill({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/fill.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
