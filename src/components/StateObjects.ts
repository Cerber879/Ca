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
  objectBlocks: ObjectList
) {
  const updatedObjects = objectBlocks.filter(
    (objectBlock) => !objectBlock.active
  );
  const updatedIdObjeects = setIdObjectBlocks(
    updatedObjects,
    getActiveObjectId(objectBlocks)
  );
  dispatch(setObjectBlocks(updatedIdObjeects));
}

export function moveElementForward(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList
) {
  const activeIndex = objectBlocks.findIndex(
    (objectBlock) => objectBlock.active === true
  );

  if (activeIndex < objectBlocks.length - 1) {
    const temp = objectBlocks[activeIndex];
    objectBlocks[activeIndex] = objectBlocks[activeIndex + 1];
    objectBlocks[activeIndex + 1] = temp;

    objectBlocks[activeIndex + 1].id = objectBlocks[activeIndex + 1].id + 1;
    objectBlocks[activeIndex].id = objectBlocks[activeIndex].id - 1;
  }
  dispatch(setObjectBlocks(objectBlocks));
}

export function moveElementBack(
  dispatch: Dispatch<AnyAction>,
  objectBlocks: ObjectList,
) {
  const activeIndex = objectBlocks.findIndex((objectBlock) => objectBlock.active === true);
  if (activeIndex > 0) {

    const temp = objectBlocks[activeIndex];
    objectBlocks[activeIndex] = objectBlocks[activeIndex - 1];
    objectBlocks[activeIndex - 1] = temp;

    objectBlocks[activeIndex - 1].id = objectBlocks[activeIndex - 1].id - 1;
    objectBlocks[activeIndex].id = objectBlocks[activeIndex].id + 1;
  }
  dispatch(setObjectBlocks(objectBlocks));
}
