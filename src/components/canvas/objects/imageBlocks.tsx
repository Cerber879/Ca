import React from 'react';
import { ObjectType, ImageBlock } from '../../../modules/types';
import { canvasLeft, canvasTop } from "../PrintCanvas";

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../ReduxStore';

import { MoveStatus } from '../moves/moveRotate/rotateStatus';
import { ResizeStatus } from '../moves/moveResize/resizeStatus';

import { zoom } from "../../downBar/DownCanvas"


const ImageComponent: React.FC<{ object: ObjectType } > = ({ object }) => {

    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
  
    const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  
    const move = useSelector((state: RootState) => state.move);

    const block = object as ImageBlock;
    return (
    <>
    <img
      alt=""
      id={`imageBlock-${block.id}`}
      className="image-block selector"
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
      onMouseDown={(event) => MoveStatus(objectBlocks, move, "down", dispatch, event, block.type, block.id, block.position.x, block.position.y) }
      onMouseMove={(event) => { if (!move.drag) MoveStatus(objectBlocks, move, "move", dispatch, event, block.type, block.id, block.position.x, block.position.y)}}
      onMouseUp={(event) => MoveStatus(objectBlocks, move, "up", dispatch, event, block.type, block.id, block.position.x, block.position.y) } />
      <div
        onMouseDown={() => ResizeStatus(objectBlocks, move, "down", dispatch, block.type, block.id, canvasTop, canvasLeft) }
        onMouseMove={() => { if (!move.drag) ResizeStatus(objectBlocks, move, "move", dispatch, block.type, block.id, canvasTop, canvasLeft)}}
        onMouseUp={() => ResizeStatus(objectBlocks, move, "up", dispatch, block.type, block.id, canvasTop, canvasLeft)}
        style={{
          cursor: "nwse-resize",
          position: "absolute",
          width: "10px", 
          height: "10px", 
          left: block.position.x + (block.width * zoom) - 10,
          top: block.position.y + (block.height * zoom) - 10,
        }} 
      />
    </>
    );
};

export default ImageComponent;