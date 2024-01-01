import { setObjectBlocks } from "../../createBlock/appSlice";
<<<<<<< HEAD
import { ObjectList } from "../../../../modules/types";
import { moveSettingsState, setDrag } from "../moveSettings";
import { AnyAction, Dispatch } from "redux";

export function ResizeStatus(
  objectBlocks: ObjectList,
  move: moveSettingsState,
  dispatch: Dispatch<AnyAction>,
  canvasTop: number,
  canvasLeft: number
) {
  if (!move.draggingSize) {
    return;
  }

  dispatch(setDrag(true));

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    const updatedBlocks = objectBlocks.map((objectBlock) => {
      if (objectBlock.active === true) {
        return {
          ...objectBlock,
          width: e.clientX - objectBlock.position.x - canvasLeft,
          height: e.clientY - objectBlock.position.y - canvasTop,
        };
      }
      return objectBlock;
    });
    dispatch(setObjectBlocks([...updatedBlocks]));
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

}

=======
import { ObjectList } from "../../../../modules/types"
import { moveSettingsState, setDraggingSize, setDrag } from "../moveSettings"
import { AnyAction, Dispatch } from "redux";

export function ResizeStatus(
    objectBlocks: ObjectList, 
    move: moveSettingsState, nameMove: string, dispatch: Dispatch<AnyAction>, 
    type: string, id: number, canvasTop: number, canvasLeft: number) {

    switch(nameMove) {
    case "down": {
        dispatch(setDraggingSize(true));
        break;
    }
    case "up": {
        dispatch(setDrag(false));
        dispatch(setDraggingSize(false));
        break;
    }
    case "move": {
        if (!move.draggingSize) {
            return;
        }
    
        dispatch(setDrag(true));
    
        if (type === "text") {
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => { 
            const updatedInputBlocks = objectBlocks.map((objectBlock) => {
            if (objectBlock.id === id) {
            return {
                ...objectBlock,
                width: e.clientX - objectBlock.position.x - canvasLeft,
                height: e.clientY - objectBlock.position.y - canvasTop
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
                width: e.clientX - objectBlock.position.x - canvasLeft,
                height: e.clientY - objectBlock.position.y - canvasTop
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
                const updatedObjectBlocks = objectBlocks.map((objectBlock) => {
                if (objectBlock.id === id) {
                    return {
                    ...objectBlock,
                    width: e.clientX - objectBlock.position.x - canvasLeft,
                    height: e.clientY - objectBlock.position.y - canvasTop
                    };
                }
                return objectBlock;
                });
            
                dispatch(setObjectBlocks(updatedObjectBlocks));
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
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
