import {
  setActiveObjStrokeFill,
  setBtnStyleObjStrokeFill,
} from "./strokeFillSettings";
import { AnyAction, Dispatch } from "redux";

export function objStrokeFillStatusProcessing(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activeObjStrokeFill: boolean,
  id: string
) {
  switch (nameProcess) {
  case "objStrokeFillHover": {
    if (activeObjStrokeFill === false) {
      dispatch(setBtnStyleObjStrokeFill({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "objStrokeFillNotHover": {
    if (activeObjStrokeFill === false) {
      dispatch(setBtnStyleObjStrokeFill({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "objStrokeFillClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activeObjStrokeFill === false) {
      dispatch(setActiveObjStrokeFill(true));
      dispatch(setBtnStyleObjStrokeFill({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/fill_stroke_active.svg");
    } else {
      dispatch(setActiveObjStrokeFill(false));
      dispatch(setBtnStyleObjStrokeFill({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/fill_stroke.svg");
    }
    break;
  }
  }
}
