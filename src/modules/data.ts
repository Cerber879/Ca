import {TextBlock, ImageBlock, GraphicObject, Canvas } from './types'
import { setactiveColor, setactiveBorderColor, setactiveFont, setactiveFontFamilies } from "../components/SetCanvas";

export const textBlock: TextBlock = {
  id: 0,
  type: "text",
  width: 100,
  height: 30,
  text: {
    fontSize: setactiveFont(),
    fontFamily: setactiveFontFamilies(),
    fontWeight: "normal",
    fontStyle: "none",
    textDecorationLine: "none",
    borderColor: setactiveBorderColor(),
    color: setactiveColor(),
    value: ""
  },
  zIndex: 2,
  position: {x:0, y:0},
};

export const imageBlock: ImageBlock = {
  id: 0,
  type: "image",
  width: 100,
  height: 100,
  imageUrl: "./images",
  zIndex: 2,
  position: {x:0, y:0},
};

export const graphicBlock: GraphicObject = {
  id: 0,
  type: "graphic",
  width: 100,
  height: 100,
  borderColor: setactiveBorderColor(),
  color: setactiveColor(),
  zIndex: 2,
  position: {x:0, y:0},
}; 

export const canvas: Canvas = {
  block: {text: textBlock , image: imageBlock , object: graphicBlock},
  backgroundColor: "white",
  select: { position: { x: 0, y: 0 }, size: { width: 800, height: 600 } },
};
