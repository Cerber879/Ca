import { AnyAction, Dispatch } from "redux";

import {
  setIsCleanerOpen,
  setIsFontSizesOpen,
  setIsFontFamiliesOpen,
  setIsColorsOpen,
  setIsResizeCanvasOpen,
  setIsFilterCanvasOpen
} from "./popupElementsSlice";

export function PopupStatus(
  namePopup: string,
  dispatch: Dispatch<AnyAction>,
  isOpen: boolean
) {
  switch (namePopup) {
  case "cleaner": {
    if (isOpen === false) {
      dispatch(setIsCleanerOpen(true));
    } else {
      dispatch(setIsCleanerOpen(false));
    }
    break;
  }
  case "fontSize": {
    if (isOpen === false) {
      dispatch(setIsFontSizesOpen(true));
    } else {
      dispatch(setIsFontSizesOpen(false));
    }
    break;
  }
  case "fontFamily": {
    if (isOpen === false) {
      dispatch(setIsFontFamiliesOpen(true));
    } else {
      dispatch(setIsFontFamiliesOpen(false));
    }
    break;
  }
  case "colors": {
    if (isOpen === false) {
      dispatch(setIsColorsOpen(true));
    } else {
      dispatch(setIsColorsOpen(false));
    }
    break;
  }
  case "size": {
    if (isOpen === false) {
      dispatch(setIsResizeCanvasOpen(true));
    } else {
      dispatch(setIsResizeCanvasOpen(false));
    }
    break;
  }
  case "filter": {
    if (isOpen === false) {
      dispatch(setIsFilterCanvasOpen(true));
    } else {
      dispatch(setIsFilterCanvasOpen(false));
    }
  }
  }
}
