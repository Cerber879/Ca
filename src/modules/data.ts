import {TextBlock, ImageBlock, GraphicObject, Layer, Canvas} from './types'
import { setactiveColor } from "../components/SetCanvas";

export const textBlock: TextBlock = {
  id: 1,
  type: "text",
  text: {
    fontSize: 12,
    fontFamily: "Arial",
    color: setactiveColor(),
    value: ""
  },
  position: {x:0, y:0},
};

export const imageBlock: ImageBlock = {
  id: 2,
  type: "image",
  imageUrl: "./images",
  position: {x:0, y:0},
};

export const graphicBlock: GraphicObject = {
  id: 3,
  type: "graphic",
  data: {},
  position: {x:0, y:0},
}; 

export const layers: Layer[] = [ 
  {
    id: 1,
    layerType: "",
    size: { width: 800, height: 600 },
    content: []
  }
]

export const canvas: Canvas = {
  backgroundColor: "white",
  layers: layers,
  select: { position: { x: 0, y: 0 }, size: { width: 800, height: 600 } },
};
