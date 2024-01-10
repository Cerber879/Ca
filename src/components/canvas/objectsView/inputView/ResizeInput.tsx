import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";
import { setHistory, CanvasState } from "../../history/historySettings";
import { setDraggingSize } from "../../moves/moveSettings";
import { TextBlock } from "../../../../modules/types";

const ResizeInput: React.FC<{ block: TextBlock }> = ({ block }) => {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector(
    (state: RootState) => state.app.objectBlocks
  );
  const history = useSelector((state: RootState) => state.history.history);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;

  const mouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const elHistory: CanvasState = {
      objects: objectBlocks,
      size: { width: fontCanvas.width, height: fontCanvas.height },
      font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
    };
    dispatch(setHistory([...history, elHistory]));
    block.active = true;
    event.preventDefault();
  };

  return (
    <>
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "l"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom - 3.5,
          top: block.position.y * zoom + block.height * zoom / 2 - 3.5,
          width: "5px",
          height:"5px",
          border: "1px solid black",
          cursor: "e-resize",
        }}
      />
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "u"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom + block.width * zoom / 2 - 3.5,
          top: block.position.y * zoom - 3.5,
          width: "5px",
          height:"5px",
          border: "1px solid black",
          cursor: "n-resize",
        }}
      />
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "r"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom + block.width * zoom - 3.5,
          top: block.position.y * zoom + block.height * zoom / 2 - 3.5,
          width: "5px",
          height:"5px",
          border: "1px solid black",
          cursor: "e-resize",
        }}
      />
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "d"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom + block.width * zoom / 2 - 3.5,
          top: block.position.y * zoom + block.height * zoom - 3.5,
          width: "5px",
          height:"5px",
          border: "1px solid black",
          cursor: "n-resize",
        }}
      />
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "lu"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          cursor: "nwse-resize",
          position: "absolute",
          width: "5px",
          height: "5px",
          left: block.position.x * zoom - 3.5,
          top: block.position.y * zoom - 3.5,
          border: "1px solid black",
        }}
      />
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "ru"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          cursor: "nesw-resize",
          position: "absolute",
          width: "5px",
          height: "5px",
          left: block.position.x * zoom + block.width * zoom - 3.5,
          top: block.position.y * zoom - 3.5,
          border: "1px solid black",
        }}
      />
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "ld"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          cursor: "nesw-resize",
          position: "absolute",
          width: "5px",
          height: "5px",
          left: block.position.x * zoom - 3.5,
          top: block.position.y * zoom + block.height * zoom - 3.5,
          border: "1px solid black",
        }}
      />
      <div
        onMouseDown={(event) => {
          dispatch(setDraggingSize(true, "rd"));
          mouseDown(event);
        }}
        style={{
          zIndex: 2,
          cursor: "nwse-resize",
          position: "absolute",
          width: "5px",
          height: "5px",
          left: block.position.x * zoom + block.width * zoom - 3.5,
          top: block.position.y * zoom + block.height * zoom - 3.5,
          border: "1px solid black",
        }}
      />
    </>
  );
};

export default ResizeInput;
