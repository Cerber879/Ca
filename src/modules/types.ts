export type Size = {
  width: number;
  height: number;
};

export type Position = {
  x: number;
  y: number;
};

export type Select = {
  position: Position;
  size: Size;
};

export type Block = {
  id: number;
  position: Position;
};

 export type standartText = {
  fontSize: number,
  fontFamily: string,
  color: string,
  value: string;
 }

export type TextBlock = Block & {
  type: string;
  text: standartText;
};

export type ImageBlock = Block & {
  type: string;
  imageUrl: string;
};

export type GraphicObject = Block & {
  type: string;
  data: object;
};

export type Layer = {
  id: number;
  layerType: string;
  size: Size;
  content: Array<TextBlock | ImageBlock | GraphicObject>;
};

export type Canvas = {
  backgroundColor: string;
  layers: Array<Layer>;
  select: Select;
};
