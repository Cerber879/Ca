import { setObjectBlocks } from "./canvas/createBlock/appSlice";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ObjectList } from "../modules/types";

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

export function ActiveStateObjects(dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList, id: number) {

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

export function removeActiveStateObjects(dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList) {
  const updatedObjects = objectBlocks.filter((objectBlock) => !objectBlock.active);
  dispatch(setObjectBlocks(updatedObjects));
}

export function moveElementForward(dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList) {
  const activeIndex = objectBlocks.findIndex((objectBlock) => objectBlock.active === true);

  if (activeIndex < objectBlocks.length - 1) {
    const temp = objectBlocks[activeIndex];
    objectBlocks[activeIndex] = objectBlocks[activeIndex + 1];
    objectBlocks[activeIndex + 1] = temp;
  }
  dispatch(setObjectBlocks(objectBlocks));
}

export function moveElementBack(dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList) {
  const activeIndex = objectBlocks.findIndex((objectBlock) => objectBlock.active === true);
  if (activeIndex > 0) {
    const temp = objectBlocks[activeIndex];
    objectBlocks[activeIndex] = objectBlocks[activeIndex - 1];
    objectBlocks[activeIndex - 1] = temp;
  }

  dispatch(setObjectBlocks(objectBlocks));
}