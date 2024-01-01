import { setObjectBlocks } from "../../createBlock/appSlice";
<<<<<<< HEAD
import { ObjectList } from "../../../../modules/types";
import { moveSettingsState, setDrag } from "../moveSettings";
import { AnyAction, Dispatch } from "redux";

export function MoveStatus(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  move: moveSettingsState,
) {
  if (!move.dragging) {
    return;
  }

  dispatch(setDrag(true));

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const updatedInputBlocks = objectBlocks.map((objectBlock) => {
      if (objectBlock.active === true) {
        console.log(objectBlock);
        return {
          ...objectBlock,
          position: {
            x: e.clientX - move.delX,
            y: e.clientY - move.delY,
          },
        };
      }
      return objectBlock;
    });

    dispatch(setObjectBlocks(updatedInputBlocks));
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
=======
import { ObjectList } from "../../../../modules/types"
import { moveSettingsState } from "../moveSettings"
import { setDrag, setDragging, setDelX, setDelY } from "../moveSettings"
import { AnyAction, Dispatch } from "redux";

export function MoveStatus(objectBlocks: ObjectList, move: moveSettingsState, nameMove: string, dispatch: Dispatch<AnyAction>, e: { clientX: number; clientY: number; }, type: string, id: number, x: number, y: number) {
    switch(nameMove) {
    case "down": {
        dispatch(setDragging(true));
        dispatch(setDelX(e.clientX - x));
        dispatch(setDelY(e.clientY - y));
        break;
    }
    case "up": {
        dispatch(setDrag(false));
        dispatch(setDragging(false));
        break;
    }
    case "move": {
        if (!move.dragging) {
            return;
        }
    
        dispatch(setDrag(true));
    
        if (type === "text") {
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => { 
            const updatedInputBlocks = objectBlocks.map((objectBlock) => {
            if (objectBlock.id === id) {
                return {
                ...objectBlock,
                position: {
                    x: e.clientX - move.delX,
                    y: e.clientY - move.delY,
                },
                };
            }
            return objectBlock;
            });
        
            dispatch(setObjectBlocks(updatedInputBlocks));
        };
    
        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    
        }
        else if (type === "image") {
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            const updatedImagesBlocks = objectBlocks.map((objectBlock) => {
            if (objectBlock.id === id) {
                return {
                ...objectBlock,
                position: {
                    x: e.clientX - move.delX,
                    y: e.clientY - move.delY,
                },
                };
            }
            return objectBlock;
            });
        
            dispatch(setObjectBlocks(updatedImagesBlocks));
        };
        
        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        }
        else if (type === "triangle" || type === "square" || type === "circle" ) {
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            const updatedObjectsBlocks = objectBlocks.map((objectBlock) => {
            if (objectBlock.id === id) {
                return {
                ...objectBlock,
                position: {
                    x: e.clientX - move.delX,
                    y: e.clientY - move.delY,
                },
                };
            }
            return objectBlock;
            });
        
            dispatch(setObjectBlocks(updatedObjectsBlocks));
        };
        
        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        }
    }
    }
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
}