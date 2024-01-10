import React, { useEffect, useRef } from "react";
import styles from "../objects.module.css";

import { ObjectType, TextBlock } from "../../../../modules/types";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";

import { delActiveStateObjects } from "../../../StateObjects";

import { handleChange, handleChangeStyle } from "./handleChange";
import { setObjectBlocks } from "../../createBlock/appSlice";
import { setStyleActiveText } from "../../../topBar/viewButtonsText/TextDecoration/setStyleActiveText";
import ResizeInput from "./ResizeInput";
import MoveInput from "./MoveInput";

const InputComponent: React.FC<{ object: ObjectType }> = ({ object }) => {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const history = useSelector((state: RootState) => state.history.history);

  const inputRefs: React.MutableRefObject<
    (HTMLInputElement | HTMLDivElement)[]
  > = useRef([]);

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
    handleChangeStyle(dispatch, objectBlocks, history, fontCanvas, block, elStyle,
      isActiveTextBold, isActiveTextItalic, isActiveTextUnderLine, isActiveTextStrikeThrough, isActiveTransparentText
    );
  }, [elStyle, isActiveTextBold, isActiveTextItalic, isActiveTextUnderLine,
    isActiveTextStrikeThrough, isActiveTransparentText]);

  return (
    <>
      <div
        className={styles.inputBlock}
        spellCheck="false"
        key={block.id}
        contentEditable="true"
        suppressContentEditableWarning={true}
        style={{
          userSelect: "none",
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
          border: "none",
          outline: "none",
          boxShadow: "none",
          resize: "none",
          overflow: "hidden",
          appearance: "none",
          padding: 0,
        }}
        ref={(el) => {
          if (el) inputRefs.current[block.id] = el;
        }}
        onClick={() => {
          if (!block.active) {
            setStyleActiveText(block, dispatch);
            const updatedBlocks = delActiveStateObjects(objectBlocks);
            updatedBlocks[block.id - 1].active = true;
            dispatch(setObjectBlocks(updatedBlocks));
          }
        }}
        onBlur={(event) => {
          handleChange(event, dispatch, objectBlocks, history, block);
        }
        }
      >{block.text.value}</div>
      {block.active &&
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
          }} />
        <MoveInput block={block} />
        <ResizeInput block={block} />
      </>
      }
    </>
  );
};

export default InputComponent;
