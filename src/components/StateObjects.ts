import { setObjectBlocks } from "./canvas/createBlock/appSlice";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ObjectList } from "../modules/types";
import { setHistory, CanvasState } from "./canvas/history/historySettings";
import { fontCanvasState } from "../reducers/canvas/fontCanvas";

export function delActiveStateObjects(objectBlocks: ObjectList) {
  const updatedBlocks = objectBlocks.map((objectBlock) => {
    if (objectBlock.active === true) {
      return {
        ...objectBlock,
        active: false,
      };
    }
    return objectBlock;
  });
  return updatedBlocks;
}

export function ActiveStateObjects(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  id: number
) {
  const updatedBlocks = objectBlocks.map((objectBlock) => {
    if (objectBlock.id === id) {
      return {
        ...objectBlock,
        active: true,
      };
    }
    return objectBlock;
  });

  dispatch(setObjectBlocks([...updatedBlocks]));
}

export function isStateObjects(objectBlocks: ObjectList) {
  return objectBlocks.some((objectBlock) => objectBlock.active === true);
}

export function getActiveObjectId(objectBlocks: ObjectList) {
  const activeObject = objectBlocks.find(
    (objectBlock) => objectBlock.active === true
  );
  return activeObject ? activeObject.id : -2;
}

function setIdObjectBlocks(objectBlocks: ObjectList, id: number) {
  const updatedBlocks = objectBlocks.map((objectBlock) => {
    if (objectBlock.id > id) {
      return {
        ...objectBlock,
        id: objectBlock.id - 1,
      };
    }
    return objectBlock;
  });
  return updatedBlocks;
}

export function removeActiveStateObjects(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  fontCanvas: fontCanvasState
) {
  const elHistory: CanvasState = {
    objects: objectBlocks,
    size: { width: fontCanvas.width, height: fontCanvas.height },
    font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
  };
  dispatch(setHistory([...history, elHistory]));
  const updatedObjects = objectBlocks.filter((objectBlock) => !objectBlock.active);
  const updatedIdObjeects = setIdObjectBlocks(updatedObjects, getActiveObjectId(objectBlocks));
  dispatch(setObjectBlocks(updatedIdObjeects));
}

export function moveElementForward(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  fontCanvas: fontCanvasState
) {
  const elHistory: CanvasState = {
    objects: objectBlocks,
    size: { width: fontCanvas.width, height: fontCanvas.height },
    font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
  };
  dispatch(setHistory([...history, elHistory]));
  const activeIndex = objectBlocks.findIndex((objectBlock) => objectBlock.active === true);
  if (activeIndex < objectBlocks.length - 1) {
    const temp1 = objectBlocks[activeIndex];
    const temp2 = objectBlocks[activeIndex + 1];
    const updatedBlocks = objectBlocks.map((objectBlock) => {
      if (objectBlock.id === activeIndex + 1) {
        return {
          ...temp2,
          id: temp1.id
        };
      } else if (objectBlock.id === activeIndex + 2) {
        return {
          ...temp1,
          id: temp2.id
        };
      }
      return objectBlock;
    });
    console.log(updatedBlocks);
    dispatch(setObjectBlocks(updatedBlocks));
  }
}

export function moveElementBack(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
  history: CanvasState[],
  fontCanvas: fontCanvasState
) {
  const elHistory: CanvasState = {
    objects: objectBlocks,
    size: { width: fontCanvas.width, height: fontCanvas.height },
    font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
  };
  dispatch(setHistory([...history, elHistory]));
  const activeIndex = objectBlocks.findIndex((objectBlock) => objectBlock.active === true);
  if (activeIndex > 0) {
    const temp1 = objectBlocks[activeIndex - 1];
    const temp2 = objectBlocks[activeIndex];
    const updatedBlocks = objectBlocks.map((objectBlock) => {
      if (objectBlock.id === activeIndex) {
        return {
          ...temp2,
          id: temp1.id
        };
      } else if (objectBlock.id === activeIndex + 1) {
        return {
          ...temp1,
          id: temp2.id
        };
      }
      return objectBlock;
    });
    console.log(updatedBlocks);
    dispatch(setObjectBlocks(updatedBlocks));
  }
}
