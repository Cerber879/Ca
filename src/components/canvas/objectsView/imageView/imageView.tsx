import React from "react";
import styles from "../objects.module.css";

import { ObjectType, ImageBlock } from "../../../../modules/types";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";

import { setDelX, setDelY, setDragging } from "../../moves/moveSettings";
import { delActiveStateObjects } from "../../../StateObjects";

import { CanvasState, setHistory } from "../../history/historySettings";
import { setObjectBlocks } from "../../createBlock/appSlice";
import ImageResize from "./ResizeImage";

const ImageComponent: React.FC<{ object: ObjectType }> = ({ object }) => {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const history = useSelector((state: RootState) => state.history.history);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;
  const objectBlocks = useSelector(
    (state: RootState) => state.app.objectBlocks
  );
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
          cursor: "all-scroll",
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
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDragging(true));
          dispatch(setDelX(e.clientX - block.position.x));
          dispatch(setDelY(e.clientY - block.position.y));
        }}
      />
      {block.active &&
      <>
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            left: block.position.x * zoom - 2,
            top: block.position.y * zoom - 2,
            width: block.width * zoom,
            height: block.height * zoom,
            border: "3px solid blue",
            borderRadius: "3px",
            pointerEvents: "none",
          }}
        />
        <ImageResize block={block} />
      </>
      }
    </>
  );
};

export default ImageComponent;
