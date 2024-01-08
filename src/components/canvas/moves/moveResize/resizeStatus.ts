import { setObjectBlocks } from "../../createBlock/appSlice";
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
      if (objectBlock.active === true && move.resizeDirection === "lu") {
        const newPositionX = e.clientX - canvasLeft;
        const newPositionY = e.clientY - canvasTop;

        const maxX = objectBlock.position.x + objectBlock.width;
        const maxY = objectBlock.position.y + objectBlock.height;

        const clampedX = Math.min(newPositionX, maxX);
        const clampedY = Math.min(newPositionY, maxY);

        return {
          ...objectBlock,
          position: {
            x: clampedX,
            y: clampedY,
          },
          width: objectBlock.position.x - clampedX + objectBlock.width,
          height: objectBlock.position.y - clampedY + objectBlock.height,
        };
      } else if (objectBlock.active === true && move.resizeDirection === "ru") {
        const newPositionY = e.clientY - canvasTop;
        const maxY = objectBlock.position.y + objectBlock.height;
        const clampedY = Math.min(newPositionY, maxY);

        let newWidth = e.clientX - objectBlock.position.x - canvasLeft;
        if (newWidth <= 0) {
          newWidth = 0;
        }

        return {
          ...objectBlock,
          position: {
            ...objectBlock.position,
            y: clampedY,
          },
          width: newWidth,
          height: objectBlock.position.y - clampedY + objectBlock.height,
        };
      } else if (objectBlock.active === true && move.resizeDirection === "ld") {
        const newPositionX = e.clientX - canvasLeft;
        const maxX = objectBlock.position.x + objectBlock.width;
        const clampedX = Math.min(newPositionX, maxX);

        let newHeight = e.clientY - objectBlock.position.y - canvasTop;
        if (newHeight <= 0) {
          newHeight = 0;
        }

        return {
          ...objectBlock,
          position: {
            ...objectBlock.position,
            x: clampedX,
          },
          width: objectBlock.position.x - clampedX + objectBlock.width,
          height: newHeight,
        };
      } else if (objectBlock.active === true && move.resizeDirection === "rd") {
        let newWidth = e.clientX - objectBlock.position.x - canvasLeft;
        let newHeight = e.clientY - objectBlock.position.y - canvasTop;

        if (newWidth <= 0) {
          newWidth = 0;
        }
        if (newHeight <= 0) {
          newHeight = 0;
        }

        return {
          ...objectBlock,
          width: newWidth,
          height: newHeight,
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
