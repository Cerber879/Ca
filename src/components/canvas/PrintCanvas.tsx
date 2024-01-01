import React, { useEffect } from "react";
import { Canvas, Position } from "../../modules/types";
import "../../index.css";

import InputComponent from "./objects/inputBlocks";
import ImageComponent from "./objects/imageBlocks";

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../ReduxStore";

import { clearDeleteData } from "../../reducers/canvas/deleteDataSlice";

import { СreateInputBlock } from "./createBlock/CreateInputBlock";
import { СreateImageBlock } from "./createBlock/CreateImageBlock";
import { СreateObjectBlock } from "./createBlock/CreateObjectBlock";
import GraphicComponent from "./objects/graphicBlocks";

type CanvasProps = {
  canvas: Canvas;
  width: number;
  height: number;
};

let ctx: CanvasRenderingContext2D | null
export let canvasTop: number;
export let canvasLeft: number;

export function PrintCanvas({canvas, width, height }: CanvasProps) {

  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const isDelData = useSelector((state: RootState) => state.deleteData.deleteData);

  const isActivePen = useSelector((state: RootState) => state.penSettSlice.activePen)
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

  const obj = isActiveObjTriangle ? "triangle" : isActiveObjSquare ? "square" : "circle"
  const isActiveObjFill = useSelector((state: RootState) => state.objFillSettSlice.activeObjFill);
  const isActiveObjStroke = useSelector((state: RootState) => state.objStrokeSettSlice.activeObjStroke);

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);

  const elStyle = useSelector((state: RootState) => state.styleElements);

  useEffect(() => {
    if(isDelData === "all") {
      if(ctx !== null) ctx.clearRect(0, 0, width, height);
      dispatch(clearDeleteData());
    } 
    else if (isDelData === "draw") { if(ctx !== null) ctx.clearRect(0, 0, width, height); }
  }, [isDelData, dispatch, width, height])

  const handleCanvas = (event: React.MouseEvent) => {
    canvasTop = event.currentTarget.getBoundingClientRect().top;
    canvasLeft = event.currentTarget.getBoundingClientRect().left;
  }

  const handleCanvasClick = (event: React.MouseEvent) => {
    const activeObj = isActiveObjTriangle || isActiveObjSquare || isActiveObjCircle;

    const clickedPosition: Position = {
      x: event.clientX - canvasLeft,
      y: event.clientY - canvasTop
    };
  
    if (isActiveText) {
      СreateInputBlock(dispatch, objectBlocks, elStyle.activeFont, elStyle.activeFontFamily, isActiveTextBold, isActiveTextItalic, isActiveTextUnderLine, isActiveTextStrikeThrough, isActiveTransparentText, elStyle.activeColor, elStyle.activeColorBorder, clickedPosition);
    } 
    if (isActiveImage) {
      СreateImageBlock(dispatch, objectBlocks, clickedPosition);
    }
    if (activeObj) {
      СreateObjectBlock(obj, dispatch, objectBlocks, isActiveObjFill, isActiveObjStroke, elStyle.activeColor, elStyle.activeColorBorder, clickedPosition);
    }
  }

  const canvasBlock = document.getElementById('canvas') as HTMLCanvasElement;
  if(canvasBlock !== null) {
    ctx = canvasBlock.getContext('2d');
  }

  useEffect(() => {
    if(canvasBlock !== null) {
      canvasBlock.width = width;
      canvasBlock.height = height;
    }
  },[canvasBlock, height, width])

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  if(canvasBlock !== null) {
    canvasBlock.addEventListener('mousedown', startDrawing);
    canvasBlock.addEventListener('mousemove', draw);
    canvasBlock.addEventListener('mouseup', stopDrawing);
    canvasBlock.addEventListener('mouseout', stopDrawing);
  }

  function startDrawing(e: { offsetX: number; offsetY: number; }) {
    if(!isActivePen) return;
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  function draw(e: { offsetX: number; offsetY: number; }) {
    if (!isDrawing) return;
    if (ctx === null) return;

    console.log(lastX, lastY)

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

  return (
    <div id="container" style={{ width: width, height: height }}>
      <canvas
        id="canvas"
        className="canvas"
        style={{
          backgroundColor: canvas.backgroundColor,
          width: `${width}px`, 
          height: `${height}px`,
          position: "relative"
        }}
        onClick={handleCanvasClick}
        onMouseEnter={handleCanvas}
      ></canvas>
      {objectBlocks.map((object) => {
        if (object.type === 'text') {
          return <InputComponent key={object.id} object={object} />
        } else if (object.type === 'image') {
          return <ImageComponent key={object.id} object={object} />
        } else if (object.type === 'triangle' || object.type === 'square' || object.type === 'circle') {
          return <GraphicComponent key={object.id} object={object} />
        } 
        else return null
      })}
    </div>
  );
}