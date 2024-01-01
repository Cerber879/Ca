import React, { useEffect } from "react";
import { ObjectType, Position } from "../../modules/types";
import styles from "../../index.module.css";

import { CanvasState, setHistory } from "./history/historySettings";

import InputComponent from "./objectsView/inputView/inputView";
import ImageComponent from "./objectsView/imageView";
import GraphicComponent from "./objectsView/graphicView";

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../ReduxStore";

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

let ctx: CanvasRenderingContext2D | null;
export let canvasTop: number;
export let canvasLeft: number;

export function ViewCanvas({ width, height }: CanvasProps) {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const isDelData = useSelector((state: RootState) => state.deleteData.deleteData);
  const filterCanvas = useSelector((state: RootState) => state.size.filter);
  const opacityCanvas = useSelector((state: RootState) => state.size.opacity);

  const isActivePen = useSelector((state: RootState) => state.penSettSlice.activePen);
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
  const draggingSize = useSelector((state: RootState) => state.move.draggingSize);
  const history = useSelector((state: RootState) => state.history.history);
  const prophecy = useSelector((state: RootState) => state.history.prophecy);

  const elStyle = useSelector((state: RootState) => state.styleElements);
  const move = useSelector((state: RootState) => state.move);

  useEffect(() => {
    if(isDelData === "all") {
      const elHistory: CanvasState = {
        objects: objectBlocks,
      };
      dispatch(setHistory([...history, elHistory]));
      if(ctx !== null) ctx.clearRect(0, 0, width, height);
      dispatch(setObjectBlocks([]));
      dispatch(setDeleteData(""));
    }
    else if (isDelData === "text") { dispatch(removeObjectBlocksByType("text")); dispatch(setDeleteData("")); }
    else if (isDelData === "image") { dispatch(removeObjectBlocksByType("image")); dispatch(setDeleteData("")); }
    else if (isDelData === "object") {
      dispatch(removeObjectBlocksByType("triangle"));
      dispatch(removeObjectBlocksByType("square"));
      dispatch(removeObjectBlocksByType("circle"));
      dispatch(setDeleteData("")); }
    else if (isDelData === "draw") { if(ctx !== null) ctx.clearRect(0, 0, width, height); dispatch(setDeleteData("")); }
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
      dispatch(setDraggingSize(false));
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
      y: event.clientY - canvasTop
    };

    if (isActiveText) {
      СreateInputBlock(dispatch, updatedBlocks, history, prophecy, elStyle.activeFont, elStyle.activeFontFamily,
        isActiveTextBold, isActiveTextItalic, isActiveTextUnderLine, isActiveTextStrikeThrough, isActiveTransparentText,
        elStyle.activeColor, elStyle.activeColorBorder, clickedPosition
      );
    }
    else if (isActiveImage) {
      СreateImageBlock(dispatch, updatedBlocks, history, prophecy, clickedPosition);
    }
    else if (activeObj) {
      СreateObjectBlock(obj, dispatch, updatedBlocks, history, prophecy, isActiveObjFill, isActiveObjStroke, elStyle.activeColor,
        elStyle.activeColorBorder, clickedPosition
      );
    } else dispatch(setObjectBlocks([...updatedBlocks]));
  };

  const canvasBlock = document.getElementById('canvas') as HTMLCanvasElement;
  if(canvasBlock !== null) {
    ctx = canvasBlock.getContext('2d');
  }

  useEffect(() => {
    if(canvasBlock !== null) {
      canvasBlock.width = width;
      canvasBlock.height = height;
    }
  },[canvasBlock, height, width]);

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function startDrawing(e: { offsetX: number; offsetY: number; }) {
    if(!isActivePen) return;
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function draw(e: { offsetX: number; offsetY: number; }) {
    if (!isDrawing) return;
    if (ctx === null) return;

    console.log(lastX, lastY);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = elStyle.activeColor;
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function stopDrawing() {
    isDrawing = false;
  }

  if(canvasBlock !== null) {
    canvasBlock.addEventListener('mousedown', startDrawing);
    canvasBlock.addEventListener('mousemove', draw);
    canvasBlock.addEventListener('mouseup', stopDrawing);
    canvasBlock.addEventListener('mouseout', stopDrawing);
  }

  return (
    <>
      <div id="container" style={{ opacity: opacityCanvas / 100, width: width, height: height }}>
        <canvas
          id="canvas"
          className={styles.canvas}
          style={{
            backgroundColor: filterCanvas,
            opacity: opacityCanvas / 100,
            width: `${width}px`,
            height: `${height}px`,
            position: "relative"
          }}
          onClick={handleCanvasClick}
          onMouseEnter={handleCanvas} />
        {objectBlocks.map((object: ObjectType) => {
          if (object.type === 'text') {
            return <InputComponent key={object.id} object={object} />;
          } else if (object.type === 'image') {
            return <ImageComponent key={object.id} object={object} />;
          } else if (object.type === 'triangle' || object.type === 'square' || object.type === 'circle') {
            return <GraphicComponent key={object.id} object={object} />;
          }
        })}
      </div>
    </>
  );
}
