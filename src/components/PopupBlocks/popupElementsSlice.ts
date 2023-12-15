type PopupsState = {
  isCleaneerOpen: boolean;
  isFontSizesOpen: boolean;
  isFontFamiliesOpen: boolean;
  isColorsOpen: boolean;
  isResizeCanvasOpen: boolean;
};

const initialState: PopupsState = {
  isCleaneerOpen: false,
  isFontSizesOpen: false,
  isFontFamiliesOpen: false,
  isColorsOpen: false,
  isResizeCanvasOpen: false,
};

const setIsCleanerOpen = (value: boolean) => ({
  type: "SET_IS_CLEANER_OPEN",
  payload: {
    isCleaneerOpen: value,
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

const popupElementsReducer = (state = initialState, action: { type: string; payload: PopupsState; }) => {
  switch (action.type) {
    case "SET_IS_CLEANER_OPEN":
      return {
        ...state,
        isCleaneerOpen: action.payload.isCleaneerOpen,
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
    default:
      return state;
  }
};

export { setIsCleanerOpen, setIsFontSizesOpen, setIsFontFamiliesOpen, setIsColorsOpen, setIsResizeCanvasOpen };
export default popupElementsReducer;