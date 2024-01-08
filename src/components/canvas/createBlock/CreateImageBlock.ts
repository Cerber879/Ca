import { Position, ImageBlock, ObjectList } from "../../../modules/types";
import { fontCanvasState } from "../../../reducers/canvas/fontCanvas";
import {
  setHistory,
  setProphecy,
  CanvasState,
} from "../history/historySettings";

import { setObjectBlocks } from "./appSlice";
import { AnyAction, Dispatch } from "redux";

export function СreateImageBlock(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  prophecy: CanvasState[],
  fontCanvas: fontCanvasState,
  clickedPosition: Position
) {
  const elHistory: CanvasState = {
    objects: objectBlocks,
    size: { width: fontCanvas.width, height: fontCanvas.height },
    font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
  };
  dispatch(setHistory([...history, elHistory]));
  const inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = "image/*";
  inputElement.onchange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        if (imageUrl && typeof imageUrl === "string") {
          const image = new Image();
          image.onload = () => {
            const width = image.naturalWidth;
            const height = image.naturalHeight;
            const imageBlock: ImageBlock = {
              id: objectBlocks.length + 1,
              active: true,
              position: clickedPosition,
              type: "image",
              width: width,
              height: height,
              imageUrl: imageUrl,
            };
            dispatch(setObjectBlocks([...objectBlocks, imageBlock]));
          };
          image.src = imageUrl;
        }
      };
      reader.readAsDataURL(file);
    }
  };
  inputElement.click();

  if (prophecy.length !== 0) {
    dispatch(setProphecy([]));
  }

  return;
}
