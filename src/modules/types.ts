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
  active: boolean;
};

export type standartText = {
  fontSize: number;
  fontFamily: string;
  borderColor: string;
  fontWeight: string;
  fontStyle: string;
  textDecorationLine: string;
  color: string;
  value: string;
};

export type TextBlock = Block & {
  type: string;
  width: number;
  height: number;
  text: standartText;
};

export type ImageBlock = Block & {
  type: string;
  width: number;
  height: number;
  imageUrl: string;
};

export type GraphicObject = Block & {
  type: string;
  color: string;
  width: number;
  height: number;
  borderColor: string;
};

export type draw = {
  x: number;
  y: number;
};

export type drawItem = {
  id: number;
  items: draw[];
};

export type ObjectType = TextBlock | ImageBlock | GraphicObject;

export type ObjectList = ObjectType[];

export type Canvas = {
  objects: ObjectList;
  backgroundColor: string;
  select: Select;
};
