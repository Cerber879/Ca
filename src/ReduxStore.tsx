import { createStore, combineReducers } from "redux";

import activeButtonReducer from "./reducers/setBar/activeButton";
import popupElementsReducer from "./reducers/PopupBlocks/popupElementsSlice";

import textSettReducer from "./components/topBar/viewButtonsText/TextDecoration/TextStatus/textSettings";
import imageSettReducer from "./components/topBar/viewButtonImage/ImageDecoration/ImageStatus/imageSettings";

import trasparentSettReducer from "./components/topBar/viewButtonsText/TextDecoration/TextStyle/TextBack/tranparentStatus/transparentSettings";
import muddySettReducer from "./components/topBar/viewButtonsText/TextDecoration/TextStyle/TextBack/muddyStatus/muddySettings";

import textBoldSettReducer from "./components/topBar/viewButtonsText/TextDecoration/TextStyle/TextFont/boldStatus/boldSettings";
import textItalicSettReducer from "./components/topBar/viewButtonsText/TextDecoration/TextStyle/TextFont/italicStatus/italicSettings";
import textUnderLineSettReducer from "./components/topBar/viewButtonsText/TextDecoration/TextStyle/TextFont/underLineStatus/underLineSettings";
import textStrikeThroughSettReducer from "./components/topBar/viewButtonsText/TextDecoration/TextStyle/TextFont/strikeThroughStatus/strikeThroughSettings";

import triangleObjSettReducer from "./components/topBar/viewButtonsObject/ObjectDecoration/Objects/triangleStatus/triangleSettings";
import squareObjSettReducer from "./components/topBar/viewButtonsObject/ObjectDecoration/Objects/squareStatus/squareSettings";
import circleObjSettReducer from "./components/topBar/viewButtonsObject/ObjectDecoration/Objects/circleStatus/circleSettings";

import objFillSettReducer from "./components/topBar/viewButtonsObject/ObjectDecoration/ObjectStrokeAndFill/fillStatus/fillSettings";
import objStrokeFillSettReducer from "./components/topBar/viewButtonsObject/ObjectDecoration/ObjectStrokeAndFill/strokeAndFillStatus/strokeFillSettings";
import objStrokeSettReducer from "./components/topBar/viewButtonsObject/ObjectDecoration/ObjectStrokeAndFill/strokeStatus/strokeSettings";

import typeColorReducer from "./reducers/setBar/colorSettings";
import StyleElementsReducer from "./reducers/setBar/StyleElements";

import fontCanvasReducer from "./reducers/canvas/fontCanvas";
import zoomReducer from "./reducers/bottomBar/zoom";
import historyReducer from "./components/canvas/history/historySettings";
import appReducer from "./components/canvas/createBlock/appSlice";
import moveReducer from "./components/canvas/moves/moveSettings";
import deleteDataReducer from "./reducers/canvas/deleteDataSlice";

const rootReducer = combineReducers({
  activeBtn: activeButtonReducer,
  popupSLice: popupElementsReducer,

  textSettSlice: textSettReducer,
  imageSettSlice: imageSettReducer,

  textTransparentSlice: trasparentSettReducer,
  textMuddySlice: muddySettReducer,

  textBoldSettSlice: textBoldSettReducer,
  textItalicSettSlice: textItalicSettReducer,
  textUnderLineSettSlice: textUnderLineSettReducer,
  textStrikeThroughSettSlice: textStrikeThroughSettReducer,

  triangleSettSlice: triangleObjSettReducer,
  squareSettSlice: squareObjSettReducer,
  circleSettSlice: circleObjSettReducer,

  objFillSettSlice: objFillSettReducer,
  objStrokeFillSettSlice: objStrokeFillSettReducer,
  objStrokeSettSlice: objStrokeSettReducer,

  typeColor: typeColorReducer,
  styleElements: StyleElementsReducer,

  fontCanvas: fontCanvasReducer,
  zoom: zoomReducer,
  history: historyReducer,
  app: appReducer,
  move: moveReducer,
  deleteData: deleteDataReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
