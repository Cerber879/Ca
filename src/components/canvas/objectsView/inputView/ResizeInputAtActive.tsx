import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";
import { setHistory, CanvasState } from "../../history/historySettings";
import { setDraggingSize } from "../../moves/moveSettings";
import { TextBlock } from "../../../../modules/types";

const InputResizeAtActive: React.FC<{ block: TextBlock }> = ({ block }) => {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector(
    (state: RootState) => state.app.objectBlocks
  );
  const history = useSelector((state: RootState) => state.history.history);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;

  return (
    <>
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom - 1,
          top: block.position.y * zoom - 1,
          width: block.width * zoom,
          height: block.height * zoom,
          border: "1px dashed black",
          pointerEvents: "none",
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

          dispatch(setDraggingSize(true, "lu"));
          block.active = true;
          event.preventDefault();
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
          width: "5px",
          height: "5px",
          left: block.position.x * zoom + block.width * zoom - 3.5,
          top: block.position.y * zoom - 3.5,
          border: "1px solid black",
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
          width: "5px",
          height: "5px",
          left: block.position.x * zoom - 3.5,
          top: block.position.y * zoom + block.height * zoom - 3.5,
          border: "1px solid black",
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

export default InputResizeAtActive;
