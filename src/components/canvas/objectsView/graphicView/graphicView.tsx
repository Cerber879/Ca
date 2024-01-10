import React, { useEffect } from "react";
import styles from "../objects.module.css";

import { ObjectType, GraphicObject } from "../../../../modules/types";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";

import { setDelX, setDelY, setDragging } from "../../moves/moveSettings";
import { delActiveStateObjects } from "../../../StateObjects";

import { CanvasState, setHistory } from "../../history/historySettings";
import { setObjectBlocks } from "../../createBlock/appSlice";
import { handleChangeStyle } from "./handleChange";
import { SetStyleActiveObj } from "../../../topBar/viewButtonsObject/ObjectDecoration/setStyleActiveObj";

import GraphicResize from "./ResizeGraphic";

const GraphicComponent: React.FC<{ object: ObjectType }> = ({ object }) => {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);

  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;
  const elStyle = useSelector((state: RootState) => state.styleElements);

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);

  const isActiveObjStroke = useSelector((state: RootState) => state.objStrokeSettSlice.activeObjStroke);
  const isActiveObjFill = useSelector((state: RootState) => state.objFillSettSlice.activeObjFill);
  const isActiveObjStrokeFill = useSelector((state: RootState) => state.objStrokeFillSettSlice.activeObjStrokeFill);

  const block = object as GraphicObject;

  useEffect(() => {
    handleChangeStyle(dispatch, objectBlocks, history, fontCanvas, block, elStyle, isActiveObjFill, isActiveObjStroke);
  }, [isActiveObjFill, isActiveObjStroke, elStyle]);

  return (
    <>
      <div
        className={styles.imageBlock}
        key={block.id}
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
            SetStyleActiveObj(block, dispatch, isActiveObjStroke, isActiveObjFill, isActiveObjStrokeFill);
            updatedBlocks = delActiveStateObjects(objectBlocks);
            updatedBlocks[block.id - 1].active = true;
            dispatch(setObjectBlocks(updatedBlocks));
          }

          const elHistory: CanvasState = {
            objects: updatedBlocks,
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity }
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDragging(true));
          dispatch(setDelX(e.clientX - block.position.x));
          dispatch(setDelY(e.clientY - block.position.y));
        }}

      >
        {block.type === "triangle" && (
          <svg
            style={{
              width: block.width * zoom,
              height: block.height * zoom
            }}
          >
            <polygon
              points={`${block.borderColor === "transparent" ? "0" : "4"},
              ${block.borderColor === "transparent" ? block.height : block.height - 2} 
              ${block.width / 2},${block.borderColor === "transparent" ? "0" : "6"} 
              ${block.borderColor === "transparent" ? block.width : block.width - 4},
              ${block.borderColor === "transparent" ? block.height : block.height - 2}`}
              fill={block.color}
              stroke={block.borderColor}
              strokeWidth={5}
            />
          </svg>
        )}
        {block.type === "square" && (
          <svg
            style={{
              width: block.width * zoom,
              height: block.height * zoom
            }}
          >
            <rect
              x={block.borderColor === "transparent" ? 0 : 3}
              y={block.borderColor === "transparent" ? 0 : 3}
              width={block.borderColor === "transparent" ? block.width : block.width - 6}
              height={block.borderColor === "transparent" ? block.height : block.height - 6}
              fill={block.color}
              stroke={block.borderColor}
              strokeWidth={5}
            />
          </svg>
        )}
        {block.type === "circle" && (
          <svg
            style={{
              width: block.width * zoom,
              height: block.height * zoom
            }}
          >
            <ellipse
              cx={block.width / 2}
              cy={block.height / 2}
              rx={block.borderColor === "transparent" ? block.width / 2 : (block.width - 10) / 2}
              ry={block.borderColor === "transparent" ? block.height / 2 : (block.height - 10) / 2}
              fill={block.color}
              stroke={block.borderColor}
              strokeWidth={5}
            />
          </svg>
        )}
      </div>
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
        <GraphicResize block={block} />
      </>
      }
    </>
  );
};

export default GraphicComponent;