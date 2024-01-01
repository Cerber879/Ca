import { createStore, combineReducers } from "redux";

import activeButtonReducer from "./reducers/setBar/activeButton";
import popupElementsReducer from "./components/PopupBlocks/popupElementsSlice";

import penSettReducer from "./components/topBar/drawDecoration/drawStatus/drawSettings";
import textSettReducer from "./components/topBar/TextDecoration/TextStatus/textSettings";
import imageSettReducer from "./components/topBar/ImageDecoration/ImageStatus/imageSettings";

import trasparentSettReducer from "./components/topBar/TextDecoration/TextStyle/TextBack/tranparentStatus/transparentSettings";
import muddySettReducer from "./components/topBar/TextDecoration/TextStyle/TextBack/muddyStatus/muddySettings";

import textBoldSettReducer from "./components/topBar/TextDecoration/TextStyle/TextFont/boldStatus/boldSettings";
import textItalicSettReducer from "./components/topBar/TextDecoration/TextStyle/TextFont/italicStatus/italicSettings";
import textUnderLineSettReducer from "./components/topBar/TextDecoration/TextStyle/TextFont/underLineStatus/underLineSettings";
import textStrikeThroughSettReducer from "./components/topBar/TextDecoration/TextStyle/TextFont/strikeThroughStatus/strikeThroughSettings";

import triangleObjSettReducer from "./components/topBar/ObjectDecoration/Objects/triangleStatus/triangleSettings";
import squareObjSettReducer from "./components/topBar/ObjectDecoration/Objects/squareStatus/squareSettings";
import circleObjSettReducer from "./components/topBar/ObjectDecoration/Objects/circleStatus/circleSettings";

import objFillSettReducer from "./components/topBar/ObjectDecoration/ObjectStrokeAndFill/fillStatus/fillSettings";
import objStrokeFillSettReducer from "./components/topBar/ObjectDecoration/ObjectStrokeAndFill/strokeAndFillStatus/strokeFillSettings";
import objStrokeSettReducer from "./components/topBar/ObjectDecoration/ObjectStrokeAndFill/strokeStatus/strokeSettings";

import typeColorReducer from "./reducers/setBar/colorSettings";
import StyleElementsReducer from "./reducers/setBar/StyleElements";

import sizeReducer from "./reducers/canvas/fontCanvas";
import zoomReducer from "./reducers/bottomBar/zoom";
import historyReducer from "./components/canvas/history/historySettings";
import appReducer from "./components/canvas/createBlock/appSlice";
import moveReducer from "./components/canvas/moves/moveSettings";
import drawReducer from "./components/canvas/drawing/drawSettings";
import deleteDataReducer from "./reducers/canvas/deleteDataSlice";

const rootReducer = combineReducers({
  activeBtn: activeButtonReducer,
  popupSLice: popupElementsReducer,

  penSettSlice: penSettReducer,
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

  size: sizeReducer,
  zoom: zoomReducer,
  history: historyReducer,
  app: appReducer,
  move: moveReducer,
  draw: drawReducer,
  deleteData: deleteDataReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
