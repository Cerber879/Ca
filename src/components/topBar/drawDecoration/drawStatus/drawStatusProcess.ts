import { setActivePen, setBtnStylePen } from "./drawSettings";
import { setIsActive } from "../../../../reducers/setBar/activeButton";
import { AnyAction, Dispatch } from "redux";

export function BtnDrawStatus(
  nameProcess: string,
  dispatch: Dispatch<AnyAction>,
  activePen: boolean,
  id: string
) {
  switch (nameProcess) {
  case "drawHover": {
    if (activePen === false) {
      dispatch(setBtnStylePen({ backgroundColor: "#6489ef" }));
    }
    break;
  }
  case "drawNotHover": {
    if (activePen === false) {
      dispatch(setBtnStylePen({ backgroundColor: "#3f51b5" }));
    }
    break;
  }
  case "drawClick": {
    const svgIcon = document.getElementById(id) as HTMLImageElement;
    if (activePen === false) {
      dispatch(setIsActive("Pen"));
      dispatch(setActivePen(true));
      dispatch(setBtnStylePen({ backgroundColor: "#ffffff" }));
      svgIcon.setAttribute("src", "/images/pencil2.svg");
    } else {
      dispatch(setActivePen(false));
      dispatch(setBtnStylePen({ backgroundColor: "#3f51b5" }));
      svgIcon.setAttribute("src", "/images/pencil.svg");
    }
    break;
  }
  }
}
