<<<<<<< HEAD
import { TextBlock, ImageBlock, GraphicObject, Canvas } from "./types";
=======
import {TextBlock, ImageBlock, GraphicObject, Canvas } from './types'
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

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
<<<<<<< HEAD
    value: "",
  },
  position: { x: 0, y: 0 },
=======
    value: ""
  },
  position: {x:0, y:0},
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
};

export const imageBlock: ImageBlock = {
  id: -1,
  active: false,
  type: "image",
  width: 100,
  height: 100,
  imageUrl: "./images",
<<<<<<< HEAD
  position: { x: 0, y: 0 },
=======
  position: {x:0, y:0},
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
};

export const graphicBlock: GraphicObject = {
  id: -1,
  active: false,
  type: "graphic",
  width: 100,
  height: 100,
  borderColor: "white",
  color: "black",
<<<<<<< HEAD
  position: { x: 0, y: 0 },
};
=======
  position: {x:0, y:0},
}; 
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

export const canvas: Canvas = {
  objects: [],
  backgroundColor: "white",
  select: { position: { x: 0, y: 0 }, size: { width: 800, height: 600 } },
};
