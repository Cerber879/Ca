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
  borderColor: string;
  fontWeight: string,
  fontStyle: string,
  textDecorationLine: string,
  color: string,
  value: string;
 }

export type TextBlock = Block & {
  type: string;
  width: number;
  height: number;
  text: standartText;
  zIndex: number;
};

export type ImageBlock = Block & {
  type: string;
  imageUrl: string;
  zIndex: number;
};

export type GraphicObject = Block & {
  type: string;
  color: string;
  borderColor: string;
  zIndex: number;
};

export type draw = {
  x: number;
  y: number;
};

export type drawItem = {
  id: number;
  items: draw[];
}

export type Canvas = {
  backgroundColor: string;
  select: Select;
};
