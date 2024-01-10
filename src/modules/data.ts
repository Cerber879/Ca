import { TextBlock, ImageBlock, GraphicObject, Canvas } from "./types";

export const textBlock: TextBlock = {
  id: -1,
  active: false,
  type: "text",
  width: 150,
  height: 50,
  text: {
    fontSize: 12,
    fontFamily: "Arial",
    fontWeight: "normal",
    fontStyle: "none",
    textDecorationLine: "none",
    borderColor: "white",
    color: "black",
    value: "",
  },
  position: { x: 0, y: 0 },
};

export const imageBlock: ImageBlock = {
  id: -1,
  active: false,
  type: "image",
  width: 100,
  height: 100,
  imageUrl: "./images",
  position: { x: 0, y: 0 },
};

export const graphicBlock: GraphicObject = {
  id: -1,
  active: false,
  type: "graphic",
  width: 100,
  height: 100,
  borderColor: "white",
  color: "black",
  position: { x: 0, y: 0 },
};

export const canvas: Canvas = {
  objects: [],
  backgroundColor: "white",
  select: { position: { x: 0, y: 0 }, size: { width: 800, height: 600 } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isTextBlock(block: any): block is TextBlock {
  try {
    if (
      block &&
      typeof block.type === "string" &&
      typeof block.width === "number" &&
      typeof block.height === "number" &&
      typeof block.text.value === "string"
    ) {
      return true;
    }
  }
  catch {
    return false;
  }
  return false;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isGraphicObject(block: any): block is GraphicObject {
  try {
    if (
      block &&
      typeof block.type === "string" &&
      typeof block.color === "string" &&
      typeof block.width === "number" &&
      typeof block.height === "number" &&
      typeof block.borderColor === "string"
    ) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
}
