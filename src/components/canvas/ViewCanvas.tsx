import React, { useEffect } from "react";
import { ObjectType, Position } from "../../modules/types";
import styles from "./canvas.module.css";

import { CanvasState, setHistory } from "./history/historySettings";

import InputComponent from "./objectsView/inputView/inputView";
import ImageComponent from "./objectsView/imageView/imageView";
import GraphicComponent from "./objectsView/graphicView/graphicView";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxStore";

import { setDeleteData } from "../../reducers/canvas/deleteDataSlice";
import { removeObjectBlocksByType, setObjectBlocks } from "./createBlock/appSlice";

import { СreateInputBlock } from "./createBlock/CreateInputBlock";
import { СreateImageBlock } from "./createBlock/CreateImageBlock";
import { СreateObjectBlock } from "./createBlock/CreateObjectBlock";

import { ResizeStatus } from "./moves/moveResize/resizeStatus";
import { setDrag, setDragging, setDraggingSize } from "./moves/moveSettings";
import { delActiveStateObjects } from "../StateObjects";
import { deleteDuplicate } from "./history/historyCommands";
import { MoveStatus } from "./moves/moveRotate/rotateStatus";

type CanvasProps = {
  width: number;
  height: number;
};

export let canvasTop: number;
export let canvasLeft: number;

export function ViewCanvas({ width, height }: CanvasProps) {
  const dispatch = useDispatch();

  const isDelData = useSelector((state: RootState) => state.deleteData.deleteData);
  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);

  const isActiveText = useSelector((state: RootState) => state.textSettSlice.activeText);
  const isActiveImage = useSelector((state: RootState) => state.imageSettSlice.activeImage);

  const isActiveTransparentText = useSelector((state: RootState) => state.textTransparentSlice.activeTextTransparent);

  const isActiveTextBold = useSelector((state: RootState) => state.textBoldSettSlice.activeTextBold);
  const isActiveTextItalic = useSelector((state: RootState) => state.textItalicSettSlice.activeTextItalic);
  const isActiveTextUnderLine = useSelector((state: RootState) => state.textUnderLineSettSlice.activeTextUnderLine);
  const isActiveTextStrikeThrough = useSelector((state: RootState) => state.textStrikeThroughSettSlice.activeTextStrikeThrough);

  const isActiveObjTriangle = useSelector((state: RootState) => state.triangleSettSlice.activeObjTriangle);
  const isActiveObjSquare = useSelector((state: RootState) => state.squareSettSlice.activeObjSquare);
  const isActiveObjCircle = useSelector((state: RootState) => state.circleSettSlice.activeObjCircle);

  const obj = isActiveObjTriangle ? "triangle" : isActiveObjSquare ? "square" : "circle";
  const isActiveObjFill = useSelector((state: RootState) => state.objFillSettSlice.activeObjFill);
  const isActiveObjStroke = useSelector((state: RootState) => state.objStrokeSettSlice.activeObjStroke);

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);
  const prophecy = useSelector((state: RootState) => state.history.prophecy);
  const draggingSize = useSelector((state: RootState) => state.move.draggingSize);

  const elStyle = useSelector((state: RootState) => state.styleElements);
  const move = useSelector((state: RootState) => state.move);

  useEffect(() => {
    if (isDelData === "all") {
      const elHistory: CanvasState = {
        objects: objectBlocks,
        size: { width: fontCanvas.width, height: fontCanvas.height },
        font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
      };
      dispatch(setHistory([...history, elHistory]));
      dispatch(setObjectBlocks([]));
      dispatch(setDeleteData(""));
    } else if (isDelData === "text") {
      const elHistory: CanvasState = {
        objects: objectBlocks,
        size: { width: fontCanvas.width, height: fontCanvas.height },
        font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
      };
      dispatch(setHistory([...history, elHistory]));
      dispatch(removeObjectBlocksByType("text"));
      dispatch(setDeleteData(""));
    } else if (isDelData === "image") {
      const elHistory: CanvasState = {
        objects: objectBlocks,
        size: { width: fontCanvas.width, height: fontCanvas.height },
        font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
      };
      dispatch(setHistory([...history, elHistory]));
      dispatch(removeObjectBlocksByType("image"));
      dispatch(setDeleteData(""));
    } else if (isDelData === "object") {
      const elHistory: CanvasState = {
        objects: objectBlocks,
        size: { width: fontCanvas.width, height: fontCanvas.height },
        font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
      };
      dispatch(setHistory([...history, elHistory]));
      dispatch(removeObjectBlocksByType("triangle"));
      dispatch(removeObjectBlocksByType("square"));
      dispatch(removeObjectBlocksByType("circle"));
      dispatch(setDeleteData(""));
    }
  }, [isDelData, dispatch, width, height]);

  useEffect(() => {
    const handleMouseMove = () => {
      if (!move.drag) {
        if (draggingSize)
          ResizeStatus(objectBlocks, move, dispatch, canvasTop, canvasLeft);
        else
          MoveStatus(dispatch, objectBlocks, move);
      }
    };

    const handleMouseUp = () => {
      deleteDuplicate(dispatch, objectBlocks, history);
      dispatch(setDrag(false));
      dispatch(setDragging(false));
      dispatch(setDraggingSize(false, ""));
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dispatch, move, objectBlocks, history]);

  const handleCanvas = (event: React.MouseEvent) => {
    canvasTop = event.currentTarget.getBoundingClientRect().top;
    canvasLeft = event.currentTarget.getBoundingClientRect().left;
  };

  const handleCanvasClick = (event: React.MouseEvent) => {
    const updatedBlocks = delActiveStateObjects(objectBlocks);
    const activeObj = isActiveObjTriangle || isActiveObjSquare || isActiveObjCircle;

    const clickedPosition: Position = {
      x: event.clientX - canvasLeft,
      y: event.clientY - canvasTop,
    };

    if (isActiveText) {
      СreateInputBlock(dispatch, updatedBlocks, history, prophecy, fontCanvas, elStyle.activeFont, elStyle.activeFontFamily,
        isActiveTextBold, isActiveTextItalic, isActiveTextUnderLine, isActiveTextStrikeThrough, isActiveTransparentText,
        elStyle.activeColor, elStyle.activeColorBorder, clickedPosition);
    } else if (isActiveImage) {
      СreateImageBlock(dispatch, updatedBlocks, history, prophecy, fontCanvas, clickedPosition);
    } else if (activeObj) {
      СreateObjectBlock(obj, dispatch, updatedBlocks, history, prophecy, fontCanvas, isActiveObjFill,
        isActiveObjStroke, elStyle.activeColor, elStyle.activeColorBorder, clickedPosition);
    } else dispatch(setObjectBlocks([...updatedBlocks]));
  };

  return (
    <>
      <div style={{ position: "absolute", width: width, height: height }}>
        <canvas
          className={styles.canvas}
          style={{ width: `${width}px`, height: `${height}px`, position: "absolute" }}
          onClick={handleCanvasClick}
          onMouseEnter={handleCanvas}
        />
        {objectBlocks.map((object: ObjectType) => {
          if (object.type === "text")
            return <InputComponent key={object.id} object={object} />;
          else if (object.type === "image")
            return <ImageComponent key={object.id} object={object} />;
          else if (object.type === "triangle" || object.type === "square" || object.type === "circle")
            return <GraphicComponent key={object.id} object={object} />;
        })}
      </div>
      <div
        style={{
          zIndex: 2, position: "fixed", pointerEvents: "none", backgroundColor: fontCanvas.filter,
          opacity: fontCanvas.opacity / 100, width: width, height: height,
        }}
      ></div>
    </>
  );
}
