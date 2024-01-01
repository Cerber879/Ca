import React from 'react';
import { ObjectType, GraphicObject } from '../../../modules/types';
import { canvasLeft, canvasTop } from "../PrintCanvas";

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../ReduxStore';

import { MoveStatus } from '../moves/moveRotate/rotateStatus';
import { ResizeStatus } from '../moves/moveResize/resizeStatus';

import { zoom } from "../../downBar/DownCanvas"


const GraphicComponent: React.FC<{ object: ObjectType } > = ({ object }) => {

    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();
  
    const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  
    const move = useSelector((state: RootState) => state.move);

    const block = object as GraphicObject;
    return (
    <>
        <svg
        className="image-block obj-block"
        key={block.id}
        style={{
            position: "absolute",
            width: block.width * zoom,
            height: block.height * zoom,
            left: block.position.x * zoom,
            top: block.position.y * zoom
        }}
        onMouseDown={(event) => MoveStatus(objectBlocks, move, "down", dispatch, event, block.type, block.id, block.position.x, block.position.y)}
        onMouseMove={(event) => { if (!move.drag) MoveStatus(objectBlocks, move, "move", dispatch, event, block.type, block.id, block.position.x, block.position.y); } }
        onMouseUp={(event) => MoveStatus(objectBlocks, move, "up", dispatch, event, block.type, block.id, block.position.x, block.position.y)}
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
        {block.type === "triangle" && (
            <g>
            <g>
                <polygon points="256,30 486,472 26,472" fill={block.color} stroke={block.borderColor} strokeWidth={25} />
            </g>
            </g>
        )}
        {block.type === "square" && (
            <g>
            <g>
                <polygon points="25,25 475,25 475,475 25,475" fill={block.color} stroke={block.borderColor} strokeWidth={25} />
            </g>
            </g>
        )}
        {block.type === "circle" && (
            <g>
            <g>
                <circle cx={256} cy={256} r={250 - 25 / 2} fill={block.color} stroke={block.borderColor} strokeWidth={25} />
            </g>
            </g>
        )}
        </svg>
        <div
        onMouseDown={() => ResizeStatus(objectBlocks, move, "down", dispatch, block.type, block.id, canvasTop, canvasLeft)}
        onMouseMove={() => { if (!move.drag) ResizeStatus(objectBlocks, move, "move", dispatch, block.type, block.id, canvasTop, canvasLeft); } }
        onMouseUp={() => ResizeStatus(objectBlocks, move, "up", dispatch, block.type, block.id, canvasTop, canvasLeft)}
        style={{
            cursor: "nwse-resize",
            position: "absolute",
            width: "5px",
            height: "5px",
            left: block.position.x + (block.width * zoom) - 3.5,
            top: block.position.y + (block.height * zoom) - 3.5,
        }} 
        />
    </>
    );

};

export default GraphicComponent;