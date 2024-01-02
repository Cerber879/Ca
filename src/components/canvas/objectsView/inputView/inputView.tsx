import React, { useEffect, useRef } from "react";
import styles from "../../../../index.module.css";

import { ObjectType, TextBlock } from "../../../../modules/types";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../ReduxStore";

import { setDelX, setDelY, setDragging } from "../../moves/moveSettings";
import { delActiveStateObjects } from "../../../StateObjects";

import { CanvasState, setHistory } from "../../history/historySettings";

import { handleChange, handleChangeStyle } from "./handleChange";
import { setObjectBlocks } from "../../createBlock/appSlice";
import InputResizeAtActive from "./ResizeInputAtActive";

const InputComponent: React.FC<{ object: ObjectType }> = ({ object }) => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
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
    handleChangeStyle(dispatch, objectBlocks, history, fontCanvas, block, elStyle, isActiveTextBold,
      isActiveTextItalic, isActiveTextUnderLine, isActiveTextStrikeThrough, isActiveTransparentText
    );
  }, [elStyle, isActiveTextBold, isActiveTextItalic, isActiveTextUnderLine,
    isActiveTextStrikeThrough, isActiveTransparentText]
  );

  const handleMouseClickFocus = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>, index: number) => {
    event.preventDefault();
    const targetInput = inputRefs.current[index];
    if (targetInput && document.activeElement !== targetInput) {
      targetInput.focus();
    }
    handleChangeStyle(dispatch, objectBlocks, history, fontCanvas, block, elStyle, isActiveTextBold,
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
            size: { width: fontCanvas.width, height: fontCanvas.height },
            font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity }
          };
          dispatch(setHistory([...history, elHistory]));

          dispatch(setDragging(true));
          dispatch(setDelX(e.clientX - block.position.x));
          dispatch(setDelY(e.clientY - block.position.y));
          e.preventDefault();
        }}
        onChange={(event) => handleChange(event, dispatch, objectBlocks, history, block)}
      />
      {block.active &&
        <InputResizeAtActive block={block}/>
      }
    </>
  );
};

export default InputComponent;
