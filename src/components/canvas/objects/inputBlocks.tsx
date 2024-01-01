import React, { useEffect, useRef } from 'react';
import { ObjectType, TextBlock } from '../../../modules/types';
import { canvasLeft, canvasTop } from "../PrintCanvas";

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../ReduxStore';

import { MoveStatus } from '../moves/moveRotate/rotateStatus';
import { ResizeStatus } from '../moves/moveResize/resizeStatus';

import { setObjectBlocks } from '../createBlock/appSlice';

import { zoom } from "../../downBar/DownCanvas"


const InputComponent: React.FC<{ object: ObjectType } > = ({ object }) => {

    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
    const inputRefs = useRef<HTMLInputElement[]>([]);
  
    const isActiveTransparentText = useSelector((state: RootState) => state.textTransparentSlice.activeTextTransparent);
    
    const isActiveTextBold = useSelector((state: RootState) => state.textBoldSettSlice.activeTextBold);
    const isActiveTextItalic = useSelector((state: RootState) => state.textItalicSettSlice.activeTextItalic);
    const isActiveTextUnderLine = useSelector((state: RootState) => state.textUnderLineSettSlice.activeTextUnderLine);
    const isActiveTextStrikeThrough = useSelector((state: RootState) => state.textStrikeThroughSettSlice.activeTextStrikeThrough);
  
    const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  
    const elStyle = useSelector((state: RootState) => state.styleElements);
    const move = useSelector((state: RootState) => state.move);
  
  
    useEffect(() => {
      if (inputRefs.current[objectBlocks.length]) {
        inputRefs.current[objectBlocks.length].focus();
      }
    }, [objectBlocks.length]);  
  
    const handleMouseClickFocus = (event: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => {
      console.log(document.activeElement)
      event.preventDefault();
      const targetInput = inputRefs.current[index];
      if (targetInput && document.activeElement !== targetInput) {
        targetInput.focus();
      }
    };
  
    const block = object as TextBlock;
    const isInputFocused = document.activeElement === inputRefs.current[block.id];
    return (
    <>
    { isInputFocused && 
    <div
        style={{
        position: "absolute",
        left: block.position.x - 1,
        top: block.position.y - 1,
        width: block.width * zoom,
        height: block.height * zoom,
        border: "1px dashed black",
        pointerEvents: "none",
        }}
    />}
    <input
    id="textInput"
    className="input-block draggable-element"
    key={block.id}
    style={{
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
        padding: 0,
        }}
        ref={(el) => { if (el) inputRefs.current[block.id] = el}}
        onClick={(event) => {
            handleMouseClickFocus(event, block.id)
        }}
        onMouseDown={(event) => {MoveStatus(objectBlocks, move, "down", dispatch, event, block.type, block.id, block.position.x, block.position.y); event.preventDefault(); inputRefs.current[block.id].blur()} }
        onMouseMove={(event) => { if (!move.drag) MoveStatus(objectBlocks, move, "move", dispatch, event, block.type, block.id, block.position.x, block.position.y)}}
        onMouseUp={(event) => MoveStatus(objectBlocks, move, "up", dispatch, event, block.type, block.id, block.position.x, block.position.y) }
        onFocus={(event) => {
        const updatedInputBlocks = objectBlocks.map((inputBlock) => {
        if (inputBlock.id === block.id) {
            return {
            ...inputBlock,
            text: { 
                fontSize: elStyle.activeFont,
                fontFamily: elStyle.activeFontFamily,
                fontWeight: isActiveTextBold ? "bold" : "normal",
                fontStyle: isActiveTextItalic ? "italic" : "none",
                textDecorationLine: `${isActiveTextUnderLine ? "underline" : ""} ${isActiveTextStrikeThrough ? "line-through" : ""}`,
                borderColor: !isActiveTransparentText ? elStyle.activeColorBorder : "transparent",
                color: elStyle.activeColor,
                value: event.target.value 
            }
            };
        }
        return inputBlock;
        });

        dispatch(setObjectBlocks(updatedInputBlocks));
    }}
    />
    { isInputFocused && 
    <div 
    onMouseDown={() => ResizeStatus(objectBlocks, move, "down", dispatch, block.type, block.id, canvasTop, canvasLeft) }
    onMouseMove={() => { if (!move.drag) ResizeStatus(objectBlocks, move, "move", dispatch, block.type, block.id, canvasTop, canvasLeft)}}
    onMouseUp={() => ResizeStatus(objectBlocks, move, "up", dispatch, block.type, block.id, canvasTop, canvasLeft)}
        style={{
        cursor: "nwse-resize", 
        position: "absolute", 
        width: "5px", 
        height: "5px", 
        left: block.position.x + (block.width * zoom) - 3.5, 
        top: block.position.y + (block.height * zoom) - 3.5, 
        border: "1px solid black"
        }}
    />}
    </>
    );
    }

export default InputComponent;