import React, { useEffect } from "react";

import styles from "../../index.module.css";

import { PopupClean } from "../PopupBlocks/PopupClean";
import { PopupFonts } from "../PopupBlocks/PopupFonts";
import { PopupFontFamily } from "../PopupBlocks/PopupFontFamily";
import { PopupColors } from "../PopupBlocks/PopupColors";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxStore";

import { SaveToFile } from "./BroadcastFileJSON/SaveObjects";
import { DownloadFile } from "./BroadcastFileJSON/DownloadObjects";
import { SaveCard } from "./SaveCard/SaveCard";

import { PopupStatus } from "../PopupBlocks/PopupStatus";

import { BtnDrawStatus } from "./drawDecoration/drawStatus/drawStatusProcess";
import { TextStatusProcessing } from "./TextDecoration/TextStatus/textStatusProcessing";
import { BtnImageStatus } from "./ImageDecoration/ImageStatus/imageStatusProcess";

import { BtnTriangleStatus } from "./ObjectDecoration/Objects/triangleStatus/triangleStatusProcess";
import { BtnSquareStatus } from "./ObjectDecoration/Objects/squareStatus/squareStatusProcess";
import { BtnCircleStatus } from "./ObjectDecoration/Objects/circleStatus/circleStatusProcess";

import { ActiveText } from "./buttonsActiveText/ActiveText";
import { ActiveObject } from "./buttonsActiveObject/AtiveObject";
import { Colors } from "./buttonsColor/Colors";
import { ComeBack, ComeForward } from "../canvas/history/historyCommands";
import { setObjectBlocks } from "../canvas/createBlock/appSlice";
import { delActiveStateObjects } from "../StateObjects";

export function TopPanel() {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const size = useSelector((state: RootState) => state.size);

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);
  const prophecy = useSelector((state: RootState) => state.history.prophecy);

  const activeElelement = useSelector((state: RootState) => state.activeBtn.active);

  const popupSLice = useSelector((state: RootState) => state.popupSLice);

  const penSettSlice = useSelector((state: RootState) => state.penSettSlice);
  const textSettSlice = useSelector((state: RootState) => state.textSettSlice);
  const imageSettSlice = useSelector((state: RootState) => state.imageSettSlice);

  const triangleSettSlice = useSelector((state: RootState) => state.triangleSettSlice);
  const squareSettSlice = useSelector((state: RootState) => state.squareSettSlice);
  const circleSettSlice = useSelector((state: RootState) => state.circleSettSlice);

  useEffect(() => {
    if (penSettSlice.activePen === true && activeElelement !== "Pen") { BtnDrawStatus("drawClick", dispatch, penSettSlice.activePen, "svg_icon_pen"); }
    if (textSettSlice.activeText === true && activeElelement !== "Text") { TextStatusProcessing("textClick", dispatch, textSettSlice.activeText, "svg_icon_text"); }
    if (imageSettSlice.activeImage === true && activeElelement !== "Image") { BtnImageStatus("imageClick", dispatch, imageSettSlice.activeImage, "svg_icon_image"); }
    if (triangleSettSlice.activeObjTriangle === true && activeElelement !== "Triangle") { BtnTriangleStatus("triangleClick", dispatch, triangleSettSlice.activeObjTriangle, "svg_icon_triangle"); }
    if (squareSettSlice.activeObjSquare === true && activeElelement !== "Square") { BtnSquareStatus("squareClick", dispatch, squareSettSlice.activeObjSquare, "svg_icon_square"); }
    if (circleSettSlice.activeObjCircle === true && activeElelement !== "Circle") { BtnCircleStatus("circleClick", dispatch, circleSettSlice.activeObjCircle, "svg_icon_circle"); }
  }, [activeElelement, dispatch, imageSettSlice.activeImage, circleSettSlice.activeObjCircle, squareSettSlice.activeObjSquare, triangleSettSlice.activeObjTriangle, penSettSlice.activePen, textSettSlice.activeText]);

  return (
    <>
      <div className={`${styles.flex_block} ${styles.setBar}`}>
        <button onClick={() => PopupStatus("cleaner", dispatch, popupSLice.isCleaneerOpen)}
          id="deleteButton" className="hover button btn-close">
          <img src="/images/krest.svg" alt="Icon" width="16px" height="16px" />
        </button>
        <span className={styles.divider}></span>
        <button onClick={() => {
          const updatedBlocks = delActiveStateObjects(objectBlocks);
          dispatch(setObjectBlocks(updatedBlocks));
          SaveCard();}} className={`${styles.text} ${styles.svg_btn}`}>
          <img id="svg_icon_save" src="/images/save.svg" alt="Icon" width="16" height="16"/>
        </button>
        <button onClick={() => SaveToFile(objectBlocks, { width: size.width, height: size.height })} className={`${styles.text} ${styles.svg_btn}`}>
          <img id="svg_icon_save" src="/images/save_file.svg" alt="Icon" width="16" height="16"/>
        </button>
        <button onClick={() => DownloadFile(dispatch)} className={`${styles.text} ${styles.svg_btn}`}>
          <img id="svg_icon_download" src="/images/download.svg" alt="Icon" width="18" height="18"/>
        </button>
        <span className={styles.divider}></span>
        <button
          onClick={() => ComeBack(dispatch, objectBlocks, history, prophecy)}
          className={`${styles.text} ${styles.svg_btn}`}>
          <img id="svg_icon_arrow_left" src="/images/left_arrow.svg" alt="Icon" width="18" height="18"/>
        </button>
        <button onClick={() => ComeForward(dispatch, objectBlocks, history, prophecy)}
          className={`${styles.text} ${styles.svg_btn}`}>
          <img id="svg_icon_arrow_right" src="/images/right_arrow.svg" alt="Icon" width="18" height="18"/>
        </button>
        <span className={styles.divider}></span>
        <button className={`${styles.text} ${styles.svg_btn}`}
          onMouseEnter={() => BtnDrawStatus("drawHover", dispatch, penSettSlice.activePen, "svg_icon_pen")}
          onMouseLeave={() => BtnDrawStatus("drawNotHover", dispatch, penSettSlice.activePen, "svg_icon_pen")}
          onClick={() => BtnDrawStatus("drawClick", dispatch, penSettSlice.activePen, "svg_icon_pen")}
          style={penSettSlice.btnStylePen}>
          <img id="svg_icon_pen" src="/images/pencil.svg" alt="Icon" width="15" height="15" />
        </button>
        <span className={styles.divider}></span>
        <div className={styles.flex_block}>
          <button className={`${styles.text} ${styles.svg_btn}`}
            onMouseEnter={() => TextStatusProcessing("textHover", dispatch, textSettSlice.activeText, "svg_icon_text")}
            onMouseLeave={() => TextStatusProcessing("textNotHover", dispatch, textSettSlice.activeText, "svg_icon_text")}
            onClick={() => TextStatusProcessing("textClick", dispatch, textSettSlice.activeText, "svg_icon_text")}
            style={textSettSlice.btnStyleText}>
            <img id="svg_icon_text" src="/images/text2.svg" alt="Icon" width="17" height="17" />
          </button>
          <button className={`${styles.text} ${styles.svg_btn}`}
            onMouseEnter={() => BtnImageStatus("imageHover", dispatch, imageSettSlice.activeImage, "svg_icon_image")}
            onMouseLeave={() => BtnImageStatus("imageNotHover", dispatch, imageSettSlice.activeImage, "svg_icon_image")}
            onClick={() => BtnImageStatus("imageClick", dispatch, imageSettSlice.activeImage, "svg_icon_image")}
            style={imageSettSlice.btnStyleImage}>
            <img id="svg_icon_image" src="/images/photo2.svg" alt="Icon" width="19" height="19" />
          </button>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.flex_block}>
          <button className={`${styles.text} ${styles.svg_btn}`}
            onMouseEnter={() => BtnTriangleStatus("triangleHover", dispatch, triangleSettSlice.activeObjTriangle, "svg_icon_triangle")}
            onMouseLeave={() => BtnTriangleStatus("triangleNotHover", dispatch, triangleSettSlice.activeObjTriangle, "svg_icon_triangle")}
            onClick={() => BtnTriangleStatus("triangleClick", dispatch, triangleSettSlice.activeObjTriangle, "svg_icon_triangle")}
            style={triangleSettSlice.btnStyleTriangle}>
            <img id="svg_icon_triangle" src="/images/triangle.svg" alt="Icon" width="15" height="15" />
          </button>
          <button className={`${styles.text} ${styles.svg_btn}`}
            onMouseEnter={() => BtnSquareStatus("squareHover", dispatch, squareSettSlice.activeObjSquare, "svg_icon_square")}
            onMouseLeave={() => BtnSquareStatus("squareNotHover", dispatch, squareSettSlice.activeObjSquare, "svg_icon_square")}
            onClick={() => BtnSquareStatus("squareClick", dispatch, squareSettSlice.activeObjSquare, "svg_icon_square")}
            style={squareSettSlice.btnStyleSquare}>
            <img id="svg_icon_square" src="/images/square.svg" alt="Icon" width="15" height="15" />
          </button>
          <button className={`${styles.text} ${styles.svg_btn}`}
            onMouseEnter={() => BtnCircleStatus("circleHover", dispatch, circleSettSlice.activeObjCircle, "svg_icon_circle")}
            onMouseLeave={() => BtnCircleStatus("circleNotHover", dispatch, circleSettSlice.activeObjCircle, "svg_icon_circle")}
            onClick={() => BtnCircleStatus("circleClick", dispatch, circleSettSlice.activeObjCircle, "svg_icon_circle")}
            style={circleSettSlice.btnStyleCircle}>
            <img id="svg_icon_circle" src="/images/circle.svg" alt="Icon" width="15" height="15" />
          </button>
        </div>
        <span className={styles.divider}></span>

        {textSettSlice.activeText && (
          <ActiveText/>
        )}

        {(triangleSettSlice.activeObjTriangle || squareSettSlice.activeObjSquare || circleSettSlice.activeObjCircle) && (
          <ActiveObject />
        )}

        <Colors />
      </div>
      {popupSLice.isFontSizesOpen && (
        <PopupFonts close={() => PopupStatus("fontSize", dispatch, popupSLice.isFontSizesOpen)}/>
      )}
      {popupSLice.isFontFamiliesOpen && (
        <PopupFontFamily close={() => PopupStatus("fontFamily", dispatch, popupSLice.isFontFamiliesOpen)}/>
      )}
      {popupSLice.isCleaneerOpen && (
        <PopupClean close={() => PopupStatus("cleaner", dispatch, popupSLice.isCleaneerOpen)} />
      )}
      {popupSLice.isColorsOpen && (
        <PopupColors close={() => PopupStatus("colors", dispatch, popupSLice.isColorsOpen)} />
      )}
    </>
  );
}