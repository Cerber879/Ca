import React, { useEffect, useRef } from "react";
import styles from "../../../../index.module.css";

import { ObjectType, TextBlock } from "../../../../modules/types";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../ReduxStore";

import { setDelX, setDelY, setDragging, setDraggingSize } from "../../moves/moveSettings";
import { delActiveStateObjects } from "../../../StateObjects";

import { CanvasState, setHistory } from "../../history/historySettings";

import { handleChange, handleChangeStyle } from "./handleChange";
import { setObjectBlocks } from "../../createBlock/appSlice";

const InputComponent: React.FC<{ object: ObjectType }> = ({ object }) => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const history = useSelector((state: RootState) => state.history.history);

  const inputRefs: React.MutableRefObject<(HTMLInputElement | HTMLTextAreaElement)[]> = useRef([]);

  const isActiveTransparentText = useSelector((state: RootState) => state.textTransparentSlice.activeTextTransparent);

  const isActiveTextBold = useSelector((state: RootState) => state.textBoldSettSlice.activeTextBold);
  const isActiveTextItalic = useSelector((state: RootState) => state.textItalicSettSlice.activeTextItalic);
  const isActiveTextUnderLine = useSelector((state: RootState) => state.textUnderLineSettSlice.activeTextUnderLine);
  const isActiveTextStrikeThrough = useSelector((state: RootState) => state.textStrikeThroughSettSlice.activeTextStrikeThrough);

  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);

  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;
  const elStyle = useSelector((state: RootState) => state.styleElements);

  const block = object as TextBlock;

  useEffect(() => {
    if (inputRefs.current[objectBlocks.length]) {
      inputRefs.current[objectBlocks.length].focus();
    }
  }, [objectBlocks.length]);

  useEffect(() => {
    handleChangeStyle(dispatch, objectBlocks, history, block, elStyle, isActiveTextBold,
      isActiveTextItalic, isActiveTextUnderLine, isActiveTextStrikeThrough, isActiveTransparentText
    );
  }, [block.active, elStyle, isActiveTextBold, isActiveTextItalic, isActiveTextUnderLine,
    isActiveTextStrikeThrough, isActiveTransparentText]
  );

  const handleMouseClickFocus = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>, index: number) => {
    event.preventDefault();
    const targetInput = inputRefs.current[index];
    if (targetInput && document.activeElement !== targetInput) {
      targetInput.focus();
    }
    handleChangeStyle(dispatch, objectBlocks, history, block, elStyle, isActiveTextBold,
      isActiveTextItalic, isActiveTextUnderLine, isActiveTextStrikeThrough, isActiveTransparentText
    );
  };

  return (
    <>
      <textarea
        className={styles.inputBlock}
        spellCheck="false"
        key={block.id}
        value={block.text.value}
        style={{
          userSelect: 'none',
          width: block.width * zoom,
          height: block.height * zoom,
          fontSize: block.text.fontSize * zoom,
          fontFamily: block.text.fontFamily,
          color: block.text.color,
          fontWeight: block.text.fontWeight,
          fontStyle: block.text.fontStyle,
          textDecorationLine: block.text.textDecorationLine,
          position: "absolute",
          left: block.position.x * zoom,
          top: block.position.y * zoom,
          background: block.text.borderColor,
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          resize: 'none',
          overflow: 'hidden',
          appearance: 'none',
          padding: 0,
        }}
        ref={(el) => { if (el) inputRefs.current[block.id] = el;}}
        onClick={(event) => {
          handleMouseClickFocus(event, block.id);
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
          e.preventDefault();
        }}
        onChange={(event) => handleChange(event, dispatch, objectBlocks, history, block)}
      />
      { block.active &&
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            left: (block.position.x * zoom) - 1,
            top: (block.position.y * zoom) - 1,
            width: block.width * zoom,
            height: block.height * zoom ,
            border: "1px dashed black",
            pointerEvents: "none",
          }}
        />
      }
      { block.active &&
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
            width: "5px",
            height: "5px",
            left: (block.position.x * zoom) + (block.width * zoom) - 3.5,
            top: (block.position.y * zoom) + (block.height * zoom) - 3.5,
            border: "1px solid black"
          }}
        />
      }
    </>
  );
};

export default InputComponent;
