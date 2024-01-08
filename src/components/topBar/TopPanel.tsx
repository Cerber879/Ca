import React, { useEffect } from "react";
import styles from "./panel.module.css";

import { PopupClean } from "./popupBlocks/popupClean/PopupClean";
import { PopupFonts } from "./popupBlocks/popupFonts/PopupFonts";
import { PopupFontFamily } from "./popupBlocks/popupFontFamily/PopupFontFamily";
import { PopupColors } from "./popupBlocks/popupColors/PopupColors";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxStore";

import { PopupStatus } from "../../reducers/PopupBlocks/PopupStatus";

import ButtonText from "./viewButtonsText/TextDecoration/TextStatus/viewButtonText";
import ButtonImage from "./viewButtonImage/ImageDecoration/ImageStatus/viewButtonImage";
import ButtonTriangle from "./viewButtonsObject/ObjectDecoration/Objects/triangleStatus/viewButtonTriangle";
import ButtonSquare from "./viewButtonsObject/ObjectDecoration/Objects/squareStatus/viewButtonSquare";
import ButtonCircle from "./viewButtonsObject/ObjectDecoration/Objects/circleStatus/viewButtonCircle";

import { ActiveText } from "./viewButtonsText/viewButtonsText";
import { ActiveObject } from "./viewButtonsObject/viewButtonsObject";
import { Colors } from "./viewColorBlocks/buttonsColor/Colors";

import { setActiveText } from "./viewButtonsText/TextDecoration/TextStatus/textSettings";
import { setActiveImage } from "./viewButtonImage/ImageDecoration/ImageStatus/imageSettings";
import { setActiveObjCircle } from "./viewButtonsObject/ObjectDecoration/Objects/circleStatus/circleSettings";
import { setActiveObjSquare } from "./viewButtonsObject/ObjectDecoration/Objects/squareStatus/squareSettings";
import { setActiveObjTriangle } from "./viewButtonsObject/ObjectDecoration/Objects/triangleStatus/triangleSettings";
import { ViewButtonsHistory } from "./viewButtonsHistory/viewButtonsHistory";
import { ViewButtonsActionCanvas } from "./viewButtonsActionCanvas/viewButtonsActionCanvas";

export function TopPanel() {
  const dispatch = useDispatch();

  const activeElelement = useSelector((state: RootState) => state.activeBtn.active);
  const popupSLice = useSelector((state: RootState) => state.popupSLice);

  const textSettSlice = useSelector((state: RootState) => state.textSettSlice);
  const imageSettSlice = useSelector((state: RootState) => state.imageSettSlice);

  const triangleSettSlice = useSelector((state: RootState) => state.triangleSettSlice);
  const squareSettSlice = useSelector((state: RootState) => state.squareSettSlice);
  const circleSettSlice = useSelector((state: RootState) => state.circleSettSlice);

  useEffect(() => {
    if (textSettSlice.activeText === true && activeElelement !== "Text") {
      dispatch(setActiveText(false));
    }
    if (imageSettSlice.activeImage === true && activeElelement !== "Image") {
      dispatch(setActiveImage(false));
    }
    if (
      triangleSettSlice.activeObjTriangle === true &&
      activeElelement !== "Triangle"
    ) {
      dispatch(setActiveObjTriangle(false));
    }
    if (
      squareSettSlice.activeObjSquare === true &&
      activeElelement !== "Square"
    ) {
      dispatch(setActiveObjSquare(false));
    }
    if (
      circleSettSlice.activeObjCircle === true &&
      activeElelement !== "Circle"
    ) {
      dispatch(setActiveObjCircle(false));
    }
  }, [
    activeElelement,
    imageSettSlice.activeImage,
    circleSettSlice.activeObjCircle,
    squareSettSlice.activeObjSquare,
    triangleSettSlice.activeObjTriangle,
    textSettSlice.activeText,
  ]);

  return (
    <>
      <div className={`${styles.flex_block} ${styles.setBar}`}>
        <button
          onClick={() => PopupStatus("cleaner", dispatch, popupSLice.isCleaneerOpen)}
          className={`${styles.text} ${styles.svg_btn}`}>
          <img src="/images/krest.svg" alt="Icon" width="16px" height="16px" />
        </button>

        <span className={styles.divider}></span>

        <div className={styles.flex_block}>
          <ViewButtonsActionCanvas/>
        </div>

        <span className={styles.divider}></span>

        <div className={styles.flex_block}>
          <ViewButtonsHistory/>
        </div>

        <span className={styles.divider}></span>

        <div className={styles.flex_block}>
          <ButtonText />
          <ButtonImage />
        </div>

        <span className={styles.divider}></span>

        <div className={styles.flex_block}>
          <ButtonTriangle />
          <ButtonSquare />
          <ButtonCircle />
        </div>

        <span className={styles.divider}></span>

        {textSettSlice.activeText && <ActiveText />}

        {(triangleSettSlice.activeObjTriangle ||
          squareSettSlice.activeObjSquare ||
          circleSettSlice.activeObjCircle) && <ActiveObject />}

        <Colors />
      </div>
      {popupSLice.isFontSizesOpen && (
        <PopupFonts
          close={() => PopupStatus("fontSize", dispatch, popupSLice.isFontSizesOpen)}
          isFontFamiliesOpen={popupSLice.isFontFamiliesOpen}
        />
      )}
      {popupSLice.isFontFamiliesOpen && (
        <PopupFontFamily
          close={() => PopupStatus("fontFamily", dispatch, popupSLice.isFontFamiliesOpen)}
          isFontSizesOpen={popupSLice.isFontSizesOpen}
        />
      )}
      {popupSLice.isCleaneerOpen && (
        <PopupClean close={() => PopupStatus("cleaner", dispatch, popupSLice.isCleaneerOpen)}/>
      )}
      {popupSLice.isColorsOpen && (
        <PopupColors close={() => PopupStatus("colors", dispatch, popupSLice.isColorsOpen)}/>
      )}
    </>
  );
}
