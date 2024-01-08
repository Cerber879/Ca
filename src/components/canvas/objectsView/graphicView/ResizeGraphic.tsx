import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";
import { setHistory, CanvasState } from "../../history/historySettings";
import { setDraggingSize } from "../../moves/moveSettings";
import { GraphicObject } from "../../../../modules/types";

const GraphicResize: React.FC<{ block: GraphicObject }> = ({ block }) => {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector(
    (state: RootState) => state.app.objectBlocks
  );
  const history = useSelector((state: RootState) => state.history.history);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;

  return (
    <>
      {block.active && (
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            left: block.position.x * zoom + 2,
            top: block.position.y * zoom + 2,
            width: block.width * zoom - 8,
            height: block.height * zoom - 8,
            border: "2px solid blue",
            borderRadius: "3px",
            pointerEvents: "none",
          }}
        />
      )}
      <div
        onMouseDown={(event) => {
          const elHistory: CanvasState = {
            objects: objectBlocks,
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDraggingSize(true, "lu"));
          block.active = true;
          event.preventDefault();
        }}
        style={{
          zIndex: 2,
          cursor: "nwse-resize",
          position: "absolute",
          width: "10px",
          height: "10px",
          left: block.position.x * zoom,
          top: block.position.y * zoom,
        }}
      />
      <div
        onMouseDown={(event) => {
          const elHistory: CanvasState = {
            objects: objectBlocks,
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDraggingSize(true, "ru"));
          block.active = true;
          event.preventDefault();
        }}
        style={{
          zIndex: 2,
          cursor: "nesw-resize",
          position: "absolute",
          width: "10px",
          height: "10px",
          left: block.position.x * zoom + block.width * zoom - 10,
          top: block.position.y * zoom,
        }}
      />
      <div
        onMouseDown={(event) => {
          const elHistory: CanvasState = {
            objects: objectBlocks,
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDraggingSize(true, "ld"));
          block.active = true;
          event.preventDefault();
        }}
        style={{
          zIndex: 2,
          cursor: "nesw-resize",
          position: "absolute",
          width: "10px",
          height: "10px",
          left: block.position.x * zoom,
          top: block.position.y * zoom + block.height * zoom - 10,
        }}
      />
      <div
        onMouseDown={(event) => {
          const elHistory: CanvasState = {
            objects: objectBlocks,
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDraggingSize(true, "rd"));
          block.active = true;
          event.preventDefault();
        }}
        style={{
          zIndex: 2,
          cursor: "nwse-resize",
          position: "absolute",
          width: "10px",
          height: "10px",
          left: block.position.x * zoom + block.width * zoom - 10,
          top: block.position.y * zoom + block.height * zoom - 10,
        }}
      />
    </>
  );
};

export default GraphicResize;
