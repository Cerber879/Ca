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

