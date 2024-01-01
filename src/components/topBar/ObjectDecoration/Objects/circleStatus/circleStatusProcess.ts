<<<<<<< HEAD
import { setActiveObjCircle, setBtnStyleCircle } from "./circleSettings";
import { setIsActive } from "../../../../../reducers/setBar/activeButton";
import { AnyAction, Dispatch } from "redux";

export function BtnCircleStatus(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeObjCircle: boolean,
  id: string
) {
  switch (nameProcess) {
  case "circleHover": {
    if (activeObjCircle === false) {
      dispatch(setBtnStyleCircle({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "circleNotHover": {
    if (activeObjCircle === false) {
      dispatch(setBtnStyleCircle({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "circleClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeObjCircle === false) {
      dispatch(setIsActive("Circle"));
      dispatch(setActiveObjCircle(true));
      dispatch(setBtnStyleCircle({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/circle_active.svg");
    } else {
      dispatch(setActiveObjCircle(false));
      dispatch(setBtnStyleCircle({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/circle.svg");
    }
    break;
  }
  }
}
=======
import { setActiveObjCircle, setBtnStyleCircle } from "./circleSettings"
import { setIsActive } from "../../../../../reducers/setBar/activeButton"
import { AnyAction, Dispatch } from "redux";

export function BtnCircleStatus(nameProcess: string, dispatch: Dispatch<AnyAction>, activeObjCircle: boolean, id: string) {
    switch(nameProcess) {
    case "circleHover": {
        if (activeObjCircle === false) { 
            dispatch(setBtnStyleCircle({ backgroundColor: "#6489ef" }));
        };
        break;
    }
    case "circleNotHover": {
        if (activeObjCircle === false) {
            dispatch(setBtnStyleCircle({ backgroundColor: "#3f51b5" }));
        };
        break;
    }
    case "circleClick": {
        const svgIcon = document.getElementById(id) as HTMLImageElement;
        if (activeObjCircle === false) {
            dispatch(setIsActive("Circle"));
            dispatch(setActiveObjCircle(true));
            dispatch(setBtnStyleCircle({ backgroundColor: "#ffffff" }));
            svgIcon.setAttribute('src', '/images/circle_active.svg');
        } else {
            dispatch(setActiveObjCircle(false));
            dispatch(setBtnStyleCircle({ backgroundColor: "#3f51b5" }));
            svgIcon.setAttribute('src', '/images/circle.svg');
        } 
        break;
    }
    }
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
