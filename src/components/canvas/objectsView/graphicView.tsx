import React, { useEffect } from "react";
import styles from "../../../index.module.css";

import { ObjectType, GraphicObject } from "../../../modules/types";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxStore";

import { setDelX, setDelY, setDragging, setDraggingSize } from "../moves/moveSettings";
import { delActiveStateObjects } from "../../StateObjects";

import { CanvasState, setHistory } from "../../canvas/history/historySettings";
import { setObjectBlocks } from "../createBlock/appSlice";

const GraphicComponent: React.FC<{ object: ObjectType }> = ({ object }) => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;
  const elStyle = useSelector((state: RootState) => state.styleElements);

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);

  const isActiveObjFill = useSelector((state: RootState) => state.objFillSettSlice.activeObjFill);
  const isActiveObjStroke = useSelector((state: RootState) => state.objStrokeSettSlice.activeObjStroke);

  const block = object as GraphicObject;

  useEffect(() => {
    if (block.active) {
      const updatedInputBlocks = objectBlocks.map((objBlock: ObjectType) => {
        if (objBlock.id === block.id) {
          return {
            ...objBlock,
            borderColor: isActiveObjFill ? "transparent" : elStyle.activeColorBorder,
            color: isActiveObjStroke ? "transparent" : elStyle.activeColor,
          };
        }
        return objBlock;
      });

      dispatch(setObjectBlocks([...updatedInputBlocks]));
    }
  }, [block.active, isActiveObjFill, isActiveObjStroke, elStyle]);


  return (
    <>
      <svg
        className={styles.imageBlock}
        key={block.id}
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
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
      >
        {block.type === "triangle" && (
          <g>
            <g>
              <polygon
                points="256,30 486,472 26,472"
                fill={block.color}
                stroke={block.borderColor}
                strokeWidth={25}
              />
            </g>
          </g>
        )}
        {block.type === "square" && (
          <g>
            <g>
              <polygon
                points="25,25 475,25 475,475 25,475"
                fill={block.color}
                stroke={block.borderColor}
                strokeWidth={25}
              />
            </g>
          </g>
        )}
        {block.type === "circle" && (
          <g>
            <g>
              <circle
                cx={256}
                cy={256}
                r={250 - 25 / 2}
                fill={block.color}
                stroke={block.borderColor}
                strokeWidth={25}
              />
            </g>
          </g>
        )}
      </svg>
      { block.active &&
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            left: (block.position.x * zoom) + 2,
            top: (block.position.y * zoom) + 2,
            width: (block.width * zoom) - 8,
            height: (block.height * zoom) - 8,
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

export default GraphicComponent;
