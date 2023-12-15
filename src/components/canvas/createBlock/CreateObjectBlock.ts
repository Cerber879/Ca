import { Position, GraphicObject, ObjectList } from "../../../modules/types";
import { graphicBlock } from "../../../modules/data";

import { setObjectBlocks } from "./appSlice";
import { AnyAction, Dispatch } from "redux";

export function СreateObjectBlock(
    obj: string,
    dispatch: Dispatch<AnyAction>, 
    objectBlocks: ObjectList, 
    isActiveObjFill: boolean, 
    isActiveObjStroke: boolean, 
    activeColor: string,
    activeColorBorder: string,
    clickedPosition: Position ) {

    switch(obj) {
    case "triangle": {
        const objBlock: GraphicObject = {
            id: objectBlocks.length + 1,
            type: "triangle",
            width: graphicBlock.width,
            height: graphicBlock.height,
            borderColor: isActiveObjFill ? "transparent" : activeColorBorder,
            color: isActiveObjStroke ? "transparent" : activeColor,
            position: clickedPosition, 
        }
        dispatch(setObjectBlocks([...objectBlocks, objBlock]))
        break;
    }
    case "square": {
        const objBlock: GraphicObject = {
            id: objectBlocks.length + 1,
            type: "square",
            width: graphicBlock.width,
            height: graphicBlock.height,
            borderColor: isActiveObjFill ? "transparent" : activeColorBorder,
            color: isActiveObjStroke ? "transparent" : activeColor,
            position: clickedPosition, 
        }
        dispatch(setObjectBlocks([...objectBlocks, objBlock]))
        break;
    }
    case "circle": {
        const objBlock: GraphicObject = {
            id: objectBlocks.length + 1,
            type: "circle",
            width: graphicBlock.width,
            height: graphicBlock.height,
            borderColor: isActiveObjFill ? "transparent" : activeColorBorder,
            color: isActiveObjStroke ? "transparent" : activeColor,
            position: clickedPosition, 
        }
        dispatch(setObjectBlocks([...objectBlocks, objBlock]))
        break;
    }
    }       
}