import { setObjectBlocks } from "../../createBlock/appSlice";
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
}