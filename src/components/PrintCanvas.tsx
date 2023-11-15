import React, { useRef, useState } from "react";
import { Canvas, TextBlock, Position, ImageBlock } from "../modules/types";
import { textBlock } from "../modules/data";
import { setactivePen, setactiveImage, onClick, setactiveColor } from "./SetCanvas";
import { setDeleteData, deleteDisActive } from "./PopupClean"
import "../index.css";

type CanvasProps = {
  canvas: Canvas;
  width: number;
  height: number;
};

type draw = {
  id: number;
  x: number;
  y: number;
  color: string;
  type: string;
}

const Draw: draw = {
  id: 0,
  x: 0,
  y: 0,
  color: setactiveColor(),
  type: "draw",
}

type drawItem = {
  id: number;
  items: draw[];
}

export let canvasTop: number;
export let canvasLeft: number;

export function PrintCanvas({canvas, width, height }: CanvasProps) {

  const handleCanvas = (event: React.MouseEvent) => {
    canvasTop = event.currentTarget.getBoundingClientRect().top;
    canvasLeft = event.currentTarget.getBoundingClientRect().left;
    if(setDeleteData()) {
      setInputBlocks([]);
      setImageBlocks([]);
      setDrawBlocks([]);
      deleteDisActive();
    } 
  }

  const [drawBlocks, setDrawBlocks] = useState<draw[]>([]);
  const [drawItems, setdrawItems] = useState<drawItem[]>([])
  const [inputBlocks, setInputBlocks] = useState<TextBlock[]>([]);
  const [imageBlocks, setImageBlocks] = useState<ImageBlock[]>([]);

  const handleCanvasClick = (event: React.MouseEvent) => {
    const active = onClick();
    const activeImage = setactiveImage();
  
    if (!active && !activeImage && (event.target as HTMLElement).closest(".input-block") && (event.target as HTMLElement).closest(".image-block")) {
      return;
    }
  
    const clickedPosition: Position = {
      x: event.clientX - 6,
      y: event.clientY- 10
    };
  
    if (active) {
      const inputBlock: TextBlock = {
        id: inputBlocks.length + 1,
        position: clickedPosition,
        type: textBlock.type,
        text: { 
          fontSize: textBlock.text.fontSize,
          fontFamily: textBlock.text.fontFamily,
          color: setactiveColor(),
          value: textBlock.text.value,
        }
      };

      console.log(inputBlocks.length + 1, clickedPosition.x, clickedPosition.y)
  
      setInputBlocks([...inputBlocks, inputBlock]);
    } if (activeImage) {
        const inputElement = document.createElement("input");
        inputElement.type = "file";
        inputElement.accept = "image/*";
        inputElement.onchange = (e: Event) => {
          const target = e.target as HTMLInputElement;
          if ((target.files && target.files[0])) {
            const file = target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
              const imageUrl = reader.result;
              if (imageUrl && typeof imageUrl === "string") {
                const imageBlock: ImageBlock = {
                  id: imageBlocks.length + 1,
                  position: clickedPosition,
                  type: "image",
                  imageUrl: imageUrl,
                };
                setImageBlocks([...imageBlocks, imageBlock]);
              }
            };
            reader.readAsDataURL(file);
          }
        };
        inputElement.click();
        return;
      }
    }

    const isDrawing = useRef(false);

    const onMouseDown = () => {
      isDrawing.current = true;
      const newDrawItem: drawItem = {
        id: drawItems.length + 1,
        items: []
      };
      setdrawItems([...drawItems, newDrawItem]);
    };

    const onMouseUp = () => {
      isDrawing.current = false;
    };

  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  const draw = (event: { clientX: number; clientY: number }) => {
    if (!setactivePen()) return;
    if (!isDrawing.current) return;
  
      const x = event.clientX;
      const y = event.clientY;

      const drawBlock: draw = {
        id: drawBlocks.length + 1,
        x: x,
        y: y,
        color: setactiveColor(),
        type: Draw.type,
      };

      const lastDrawItem = drawItems[drawItems.length - 1];
      if (lastDrawItem) {
        lastDrawItem.items.push(drawBlock);
        setdrawItems([...drawItems.slice(0, -1), lastDrawItem]);
      }

      setDrawBlocks([...drawBlocks, drawBlock]);
  };

  return (
    <div>
      <div
        id="bckCanvas"
        className="canvas"
        style={{
          backgroundColor: canvas.backgroundColor,
          width: `${width}px`, 
          height: `${height}px`,
        }}
        onClick={handleCanvasClick}
        onMouseMove={draw}
        onMouseEnter={handleCanvas}
      ></div>
      {drawBlocks.map((block) => (
        <div
        id="drawBlock"
        className="pixel"
        key={block.id}
        style={{
          zIndex: 2,
          position: "absolute",
          width: 3,
          height: 3,
          backgroundColor: block.color,
          left: block.x,
          top: block.y
        }}
        />
      ))}
      {inputBlocks.map((block) => (
        <input
          id="textInput"
          className="input-block"
          key={block.id}
          style={{
            color: block.text.color,
            position: "absolute",
            left: block.position.x,
            top: block.position.y,
            background: 'transparent', 
            border: 'none', 
            outline: 'none', 
            boxShadow: 'none', 
            padding: 0, 
          }}
          onChange={(event) => {
            const updatedInputBlocks = inputBlocks.map((inputBlock) => {
              if (inputBlock.id === block.id) {
                return {
                  ...inputBlock,
                  text: { ...inputBlock.text, value: event.target.value }
                };
              }
              return inputBlock;
            });

            setInputBlocks(updatedInputBlocks);
          }}
          onClick={(event) => {
            event.stopPropagation();
          }}
        />
      ))}
      {imageBlocks.map((block) => (
        <img
          alt=""
          id={`imageBlock-${block.id}`}
          className="image-block"
          key={block.id}
          src={block.imageUrl}
          style={{
            position: "absolute",
            left: block.position.x,
            top: block.position.y
          }}
          onClick={(event) => {
            event.stopPropagation();
          }}
        />
      ))}
    </div>
  );
}
