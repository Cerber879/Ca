import React from "react";
import styles from "../../../index.module.css";

import { ObjectType, ImageBlock } from "../../../modules/types";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxStore";

import { setDelX, setDelY, setDragging, setDraggingSize } from "../moves/moveSettings";
import { delActiveStateObjects } from "../../StateObjects";

import { CanvasState, setHistory } from "../../canvas/history/historySettings";
import { setObjectBlocks } from "../createBlock/appSlice";

const ImageComponent: React.FC<{ object: ObjectType }> = ({ object }) => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const history = useSelector((state: RootState) => state.history.history);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;
  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const block = object as ImageBlock;

  return (
    <>
      <img
        className={styles.imageBlock}
        id={`imageBlock-${block.id}`}
        draggable="false"
        key={block.id}
        src={block.imageUrl}
        style={{
          position: "absolute",
          width: block.width * zoom,
          height: block.height * zoom,
          left: block.position.x * zoom,
          top: block.position.y * zoom,
        }}
        onClick={() => {
          if (!block.active) {
            const updatedBlocks = delActiveStateObjects(objectBlocks);
            updatedBlocks[block.id - 1].active = true;
            dispatch(setObjectBlocks(updatedBlocks));
          }
        }}
        onMouseDown={(e) => {
          let updatedBlocks = objectBlocks;
          if (!block.active) {
            updatedBlocks = delActiveStateObjects(objectBlocks);
            updatedBlocks[block.id - 1].active = true;
            dispatch(setObjectBlocks(updatedBlocks));
          }

          const elHistory: CanvasState = {
            objects: updatedBlocks,
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDragging(true));
          dispatch(setDelX(e.clientX - block.position.x));
          dispatch(setDelY(e.clientY - block.position.y));
        }}
      />
      { block.active &&
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            left: block.position.x * zoom,
            top: block.position.y * zoom,
            width: (block.width * zoom) - 2,
            height: (block.height * zoom) - 2,
            border: "2px solid blue",
            borderRadius: '3px',
            pointerEvents: "none",
          }}
        />
      }
      <div
        onMouseDown={(event) => {
          const elHistory: CanvasState = {
            objects: objectBlocks,
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDraggingSize(true));
          block.active = true;
          event.preventDefault();
        }}
        style={{
          zIndex: 2,
          cursor: "nwse-resize",
          position: "absolute",
          width: "10px",
          height: "10px",
          left: block.position.x + block.width * zoom - 10,
          top: block.position.y + block.height * zoom - 10,
        }}
      />
    </>
  );
};

export default ImageComponent;
