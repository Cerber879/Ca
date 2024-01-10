import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";
import { setHistory, CanvasState } from "../../history/historySettings";
import { setDelX, setDelY, setDragging } from "../../moves/moveSettings";
import { TextBlock } from "../../../../modules/types";
import { delActiveStateObjects } from "../../../StateObjects";
import { setStyleActiveText } from "../../../topBar/viewButtonsText/TextDecoration/setStyleActiveText";
import { setObjectBlocks } from "../../createBlock/appSlice";

const MoveInput: React.FC<{ block: TextBlock }> = ({ block }) => {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector(
    (state: RootState) => state.app.objectBlocks
  );
  const history = useSelector((state: RootState) => state.history.history);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;

  const inputRefs: React.MutableRefObject<
    (HTMLInputElement | HTMLTextAreaElement)[]
  > = useRef([]);

  const handleMouseClickFocus = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const targetInput = inputRefs.current[index];
    if (targetInput && document.activeElement !== targetInput) {
      targetInput.focus();
    }
  };

  const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleMouseClickFocus(e, block.id);
    let updatedBlocks = objectBlocks;
    if (!block.active) {
      setStyleActiveText(block, dispatch);
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
    e.preventDefault();
  };

  return (
    <>
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom - 1,
          top: block.position.y * zoom - 3.5,
          width: block.width * zoom,
          height: "5px",
          cursor: "all-scroll",
        }}
        onMouseDown={(e) => mouseDown(e) }
      />
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom + block.width * zoom - 3.5,
          top: block.position.y * zoom - 3.5,
          width: "5px",
          height: block.height * zoom,
          cursor: "all-scroll",
        }}
        onMouseDown={(e) => mouseDown(e) }
      />
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom - 3.5,
          top: block.position.y * zoom + block.height * zoom - 3.5,
          width: block.width * zoom,
          height: "5px",
          cursor: "all-scroll",
        }}
        onMouseDown={(e) => mouseDown(e) }
      />
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          left: block.position.x * zoom - 3.5,
          top: block.position.y * zoom - 3.5,
          width: "5px",
          height: block.height * zoom,
          cursor: "all-scroll",
        }}
        onMouseDown={(e) => mouseDown(e) }
      />

    </>
  );
};

export default MoveInput;
