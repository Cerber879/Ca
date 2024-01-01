import { TextBlock, ImageBlock, GraphicObject } from "./types";

export const textBlock: TextBlock = {
  id: 1,
  active: false,
  type: "text",
  width: 130,
  height: 20,
  text: {
    fontSize: 15,
    fontFamily: "Arial",
    fontWeight: "normal",
    fontStyle: "italic",
    textDecorationLine: "none",
    borderColor: "white",
    color: "black",
    value: "text",
  },
  position: { x: 100, y: 150 },
};

export const imageBlock: ImageBlock = {
  id: 2,
  active: false,
  type: "image",
  width: 200,
  height: 200,
  imageUrl: "./images/favicon.png",
  position: { x: 300, y: 350 },
};

export const graphicBlock: GraphicObject = {
  id: 3,
  active: false,
  type: "triangle",
  width: 150,
  height: 100,
  borderColor: "black",
  color: "blue",
  position: { x: 400, y: 100 },
};

export const objects = [
  textBlock,
  imageBlock,
  graphicBlock
];