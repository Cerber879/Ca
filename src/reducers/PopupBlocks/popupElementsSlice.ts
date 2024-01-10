type PopupsState = {
  isCleaneerOpen: boolean;
  isConservationCardOpen: boolean;
  isChangeImageOpen: boolean;
  isFontSizesOpen: boolean;
  isFontFamiliesOpen: boolean;
  isColorsOpen: boolean;
  isResizeCanvasOpen: boolean;
  isFilterCanvasOpen: boolean;
};

const initialState: PopupsState = {
  isCleaneerOpen: false,
  isConservationCardOpen: false,
  isChangeImageOpen: false,
  isFontSizesOpen: false,
  isFontFamiliesOpen: false,
  isColorsOpen: false,
  isResizeCanvasOpen: false,
  isFilterCanvasOpen: false,
};

const setIsCleanerOpen = (value: boolean) => ({
  type: "SET_IS_CLEANER_OPEN",
  payload: {
    isCleaneerOpen: value,
  },
});

const setIsConservationCardOpen = (value: boolean) => ({
  type: "SET_IS_CONSERVATION_CARD_OPEN",
  payload: {
    isConservationCardOpen: value,
  },
});

const setIsChangeImageOpen = (value: boolean) => ({
  type: "SET_IS_CHANGE_IMAGE_OPEN",
  payload: {
    isChangeImageOpen: value,
  },
});

const setIsFontSizesOpen = (value: boolean) => ({
  type: "SET_IS_FONT_SIZES_OPEN",
  payload: {
    isFontSizesOpen: value,
  },
});

const setIsFontFamiliesOpen = (value: boolean) => ({
  type: "SET_IS_FONT_FAMILIES_OPEN",
  payload: {
    isFontFamiliesOpen: value,
  },
});

const setIsColorsOpen = (value: boolean) => ({
  type: "SET_IS_COLORS_OPEN",
  payload: {
    isColorsOpen: value,
  },
});

const setIsResizeCanvasOpen = (value: boolean) => ({
  type: "SET_IS_RESIZE_CANVAS_OPEN",
  payload: {
    isResizeCanvasOpen: value,
  },
});

const setIsFilterCanvasOpen = (value: boolean) => ({
  type: "SET_IS_FILTER_CANVAS_OPEN",
  payload: {
    isFilterCanvasOpen: value,
  },
});

const popupElementsReducer = (
  state = initialState,
  action: { type: string; payload: PopupsState }
) => {
  switch (action.type) {
  case "SET_IS_CLEANER_OPEN":
    return {
      ...state,
      isCleaneerOpen: action.payload.isCleaneerOpen,
    };
  case "SET_IS_CONSERVATION_CARD_OPEN":
    return {
      ...state,
      isConservationCardOpen: action.payload.isConservationCardOpen,
    };
  case "SET_IS_CHANGE_IMAGE_OPEN":
    return {
      ...state,
      isChangeImageOpen: action.payload.isChangeImageOpen,
    };
  case "SET_IS_FONT_SIZES_OPEN":
    return {
      ...state,
      isFontSizesOpen: action.payload.isFontSizesOpen,
    };
  case "SET_IS_FONT_FAMILIES_OPEN":
    return {
      ...state,
      isFontFamiliesOpen: action.payload.isFontFamiliesOpen,
    };
  case "SET_IS_COLORS_OPEN":
    return {
      ...state,
      isColorsOpen: action.payload.isColorsOpen,
    };
  case "SET_IS_RESIZE_CANVAS_OPEN":
    return {
      ...state,
      isResizeCanvasOpen: action.payload.isResizeCanvasOpen,
    };
  case "SET_IS_FILTER_CANVAS_OPEN":
    return {
      ...state,
      isFilterCanvasOpen: action.payload.isFilterCanvasOpen,
    };
  default:
    return state;
  }
};

export {
  setIsCleanerOpen,
  setIsConservationCardOpen,
  setIsChangeImageOpen,
  setIsFontSizesOpen,
  setIsFontFamiliesOpen,
  setIsColorsOpen,
  setIsResizeCanvasOpen,
  setIsFilterCanvasOpen,
};
export default popupElementsReducer;
