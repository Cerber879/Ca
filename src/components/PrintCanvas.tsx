import React, { useEffect, useRef, useState } from "react";
import { Canvas, TextBlock, Position, ImageBlock, GraphicObject } from "../modules/types";
import { textBlock, graphicBlock } from "../modules/data";
import { setactivePen, setactiveImage, onClick, setactiveColor, setactiveBorderColor, setactiveObjTriangle, setactiveObSquare, setactiveObjCircle, setObj, setactiveFont, setactiveFontFamilies, setTextBold, setTextItalic, setTextUnderline, setTextStriketrough } from "./SetCanvas";
import { setDeleteData, deleteDisActive } from "./PopupClean"
import "../index.css";

type CanvasProps = {
  canvas: Canvas;
  width: number;
  height: number;
};

export let canvasTop: number;
export let canvasLeft: number;

export function PrintCanvas({canvas, width, height }: CanvasProps) {

  const handleCanvas = (event: React.MouseEvent) => {
    canvasTop = event.currentTarget.getBoundingClientRect().top;
    canvasLeft = event.currentTarget.getBoundingClientRect().left;
    if(setDeleteData()) {
      setInputBlocks([]);
      setImageBlocks([]);
      setDrawPixels([]);
      setObjBlocksTriangle([]);
      setObjBlocksSquare([]);
      setObjBlocksCircle([]);
      deleteDisActive();
    }; 
  }

  const getLinePixels = (x1: number, y1: number, x2: number, y2: number) => {
    const pixels: { x: number; y: number }[] = [];
  
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const sx = x1 < x2 ? 1 : -1;
    const sy = y1 < y2 ? 1 : -1;
    let err = dx - dy;
  
    while (true) {
      pixels.push({ x: x1, y: y1 });
  
      if (x1 === x2 && y1 === y2) break;
  
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x1 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y1 += sy;
      }
    }
  
    return pixels;
  };

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [drawPixels, setDrawPixels] = useState<{ x: number; y: number }[]>([]);
  const [inputBlocks, setInputBlocks] = useState<TextBlock[]>([]);
  const [imageBlocks, setImageBlocks] = useState<ImageBlock[]>([]);
  const [objBlocksTriangle, setObjBlocksTriangle] = useState<GraphicObject[]>([]);
  const [objBlocksSquare, setObjBlocksSquare] = useState<GraphicObject[]>([]);
  const [objBlocksCircle, setObjBlocksCircle] = useState<GraphicObject[]>([]);

  const [zIndex, setzIndex] = useState(2);

  const [currentTarget, setCurrentTarget] = useState("");
  const [searchTarget, setSearchTarget] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [delX, setDelX] = useState(0);
  const [delY, setDelY] = useState(0);

  const handleMouseDown = (e: { clientX: number; clientY: number; }, x: number, y: number) => {
    setDragging(true);
    setDelX(e.clientX - x);
    setDelY(e.clientY - y);
  };
  
  const handleMouseMove = (x: number, y: number, id: number, type: string) => {
    if (!dragging) {
      return;
    }
  
    if (type === "text") {
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => { 
        const updatedInputBlocks = inputBlocks.map((inputBlock) => {
        if (inputBlock.id === id) {
          if (
            e.clientX - delX + 10 < e.clientX &&
            e.clientX < e.clientX - delX + inputBlock.width - 10 &&
            e.clientY - delY + 10 < e.clientY &&
            e.clientY < e.clientY - delY + inputBlock.height - 10 && 
            ( searchTarget || currentTarget === "text-target")
          ) {
            if (searchTarget) { setCurrentTarget("text-target"); setSearchTarget(false)};
            return {
              ...inputBlock,
              position: {
                x: e.clientX - delX,
                y: e.clientY - delY,
              },
            };
          } else if (
            e.clientX < e.clientX - delX + 10 &&
            e.clientY < e.clientY - delY + 10 && 
            ( searchTarget || currentTarget === "text-ul")
          ) {
            if (searchTarget) { setCurrentTarget("text-ul"); setSearchTarget(false)};
            return {
              ...inputBlock,
              position: {
                x: inputBlock.position.x - (inputBlock.position.x - e.clientX),
                y: inputBlock.position.y - (inputBlock.position.y - e.clientY),
              },
              width: inputBlock.position.x - e.clientX + inputBlock.width,
              height: inputBlock.position.y - e.clientY + inputBlock.height
            };
          } else if (
            e.clientX > e.clientX - delX + inputBlock.width - 10 &&
            e.clientY < e.clientY - delY + 10 && 
            ( searchTarget || currentTarget === "text-ur")
          ) {
            if (searchTarget) { setCurrentTarget("text-ur"); setSearchTarget(false)};
            return {
              ...inputBlock,
              position: {
                x: inputBlock.position.x,
                y: inputBlock.position.y - (inputBlock.position.y - e.clientY),
              },
              width: e.clientX - inputBlock.position.x,
              height: inputBlock.position.y - e.clientY + inputBlock.height
            };
          } else if (
            e.clientX < e.clientX - delX + 10 &&
            e.clientY > e.clientY - delY + inputBlock.height - 10 && 
            ( searchTarget || currentTarget === "text-dl")
          ) {
            if (searchTarget) { setCurrentTarget("text-dl"); setSearchTarget(false)};
            return {
              ...inputBlock,
              position: {
                x: inputBlock.position.x - (inputBlock.position.x - e.clientX),
                y: inputBlock.position.y,
              },
              width: inputBlock.position.x - e.clientX + inputBlock.width,
              height: e.clientY - inputBlock.position.y
            };
          } else if (
            e.clientX > e.clientX - delX + inputBlock.width - 10 &&
            e.clientY > e.clientY - delY + inputBlock.height - 10 && 
            ( searchTarget || currentTarget === "text-dr")
          ) {
            if (searchTarget) {setCurrentTarget("text-dr"); setSearchTarget(false)};
            return {
              ...inputBlock,
              width: e.clientX - inputBlock.position.x,
              height: e.clientY - inputBlock.position.y
            };
          } 
        }
        return inputBlock;
        });
    
        setInputBlocks(updatedInputBlocks);
      };

      const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

    }
    else if (type === "image") {
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        const updatedImagesBlocks = imageBlocks.map((block) => {
          if (block.id === id) {
            if (searchTarget) setCurrentTarget("image-target");
            return {
              ...block,
              position: {
                x: e.clientX - delX,
                y: e.clientY - delY,
              },
            };
          }
          return block;
        });
    
        setImageBlocks(updatedImagesBlocks);
      };
    
      const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
  };
  
  const handleMouseUp = () => {
    setDragging(false);
    setSearchTarget(true);
    setCurrentTarget("");
  };

  const handleCanvasClick = (event: React.MouseEvent) => {
    const active = onClick();
    const activeImage = setactiveImage();
    const activeObj = setactiveObjTriangle() || setactiveObSquare() || setactiveObjCircle();

    setzIndex(zIndex + 1);

    const clickedPosition: Position = {
      x: event.clientX - 6,
      y: event.clientY - 5
    };
  
    if (active) {
      const inputBlock: TextBlock = {
        id: inputBlocks.length + 1,
        position: clickedPosition,
        type: textBlock.type,
        width: textBlock.width,
        height: textBlock.height,
        zIndex: zIndex,
        text: { 
          fontSize: setactiveFont(),
          fontFamily: setactiveFontFamilies(),
          fontWeight: setTextBold(),
          fontStyle: setTextItalic(),
          textDecorationLine: `${setTextUnderline()} ${setTextStriketrough()}`,
          borderColor: setactiveBorderColor(),
          color: setactiveColor(),
          value: textBlock.text.value,
        }
      };
  
      setInputBlocks([...inputBlocks, inputBlock]);
    } 
    if (activeImage) {
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
                  zIndex: zIndex,
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
      if (activeObj) {
        let obj = setObj();
        if (obj === "triangle") {
          const objBlock: GraphicObject = {
            id: objBlocksTriangle.length + 1,
            type: graphicBlock.type,
            borderColor: setactiveBorderColor(),
            color: setactiveColor(),
            zIndex: zIndex,
            position: clickedPosition, 
          }
        setObjBlocksTriangle([...objBlocksTriangle, objBlock])
        } else if (obj === "square") {
          const objBlock: GraphicObject = {
            id: objBlocksSquare.length + 1,
            type: graphicBlock.type,
            borderColor: setactiveBorderColor(),
            color: setactiveColor(),
            zIndex: zIndex,
            position: clickedPosition, 
          }
        setObjBlocksSquare([...objBlocksSquare, objBlock])
        } else if (obj === "circle") {
          const objBlock: GraphicObject = {
            id: objBlocksCircle.length + 1,
            type: graphicBlock.type,
            borderColor: setactiveBorderColor(),
            color: setactiveColor(),
            zIndex: zIndex,
            position: clickedPosition, 
          }
        setObjBlocksCircle([...objBlocksCircle, objBlock])
        }

      }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputBlocks.length]);  

  const isDrawing = useRef(false);

  const onMouseDown = () => {
    isDrawing.current = true;
  };

  const onMouseUp = () => {
    isDrawing.current = false;
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
    
  const draw = (event: { clientX: number; clientY: number }) => {
    if (!setactivePen()) return;
    if (!isDrawing.current) return;
    
  
    const x = event.clientX;
    const y = event.clientY;
  
    const lastPixel = drawPixels[drawPixels.length - 1];
    if (lastPixel && (lastPixel.x !== x || lastPixel.y !== y) && (lastPixel.x !== -10)) {
      const linePixels = getLinePixels(lastPixel.x, lastPixel.y, x, y);
      setDrawPixels((prevPixels) => [...prevPixels, ...linePixels]);
    } else {
      const newPixel = {
        x: x,
        y: y,
      };
  
      setDrawPixels((prevPixels) => [...prevPixels, newPixel]);
    }
  };

  return (
    <div>
      <canvas
        id="canvas"
        className="canvas"
        style={{
          backgroundColor: canvas.backgroundColor,
          width: `${width}px`, 
          height: `${height}px`,
        }}
        onClick={handleCanvasClick}
        onMouseMove={(event) => draw(event)}
        onMouseEnter={handleCanvas}
      ></canvas>
      {drawPixels.map((pixel, index) => (
      <div
        id={`pixel-${index}`}
        className="pixel"
        key={index}
        style={{
          zIndex: zIndex + 1,
          position: "fixed",
          width: 1,
          height: 1,
          backgroundColor: setactiveColor(),
          left: pixel.x,
          top: pixel.y,
        }}
      />
      ))}
      {inputBlocks.map((block) => (
        <input
          id="textInput"
          className="input-block"
          key={block.id}
          style={{
            zIndex: block.zIndex,
            width: block.width,
            height: block.height,
            fontSize: block.text.fontSize,
            fontFamily: block.text.fontFamily,
            color: block.text.color,
            fontWeight: block.text.fontWeight,
            fontStyle: block.text.fontStyle,
            textDecorationLine: block.text.textDecorationLine,
            position: "absolute",
            left: block.position.x,
            top: block.position.y,
            background: block.text.borderColor,
            border: 'none', 
            outline: 'none', 
            boxShadow: 'none', 
            padding: 0,
          }}
          ref={inputRef}
          onMouseDown={(event) => {handleMouseDown(event, block.position.x, block.position.y)}}
          onMouseMove={() => handleMouseMove(block.position.x, block.position.y, block.id, block.type)}
          onMouseUp={handleMouseUp}
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
        />
      ))}
      {imageBlocks.map((block) => (
        <img
          alt=""
          id={`imageBlock-${block.id}`}
          className="image-block selector"
          draggable="false"
          key={block.id}
          src={block.imageUrl}
          style={{
            zIndex: block.zIndex,
            position: "absolute",
            width: "100px",
            height: "100px",
            left: block.position.x,
            top: block.position.y,
          }}
          onMouseDown={(event) => {handleMouseDown(event, block.position.x, block.position.y)}}
          onMouseMove={() => handleMouseMove(block.position.x, block.position.y, block.id, block.type)}
          onMouseUp={handleMouseUp}
        />
      ))}
      {objBlocksTriangle.map((block) => (
        <svg 
        className="image-block obj-block"
        key={block.id}
        style={{
          zIndex: block.zIndex,
          position: "absolute",
          width: "130px",
          height: "130px",
          left: block.position.x,
          top: block.position.y
        }}
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
        <g>
          <g>
            <polygon points="256,30 486,472 26,472" fill={block.color} stroke={block.borderColor} strokeWidth="25" />
          </g>
        </g>
      </svg>
        
      ))}
      {objBlocksSquare.map((block) => (
      <svg 
        className="image-block obj-block"
        key={block.id}
        style={{
          zIndex: block.zIndex,
          position: "absolute",
          width: "130px",
          height: "130px",
          left: block.position.x,
          top: block.position.y
        }}
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
        <g>
          <g>
            <rect width="100%" height="100%" fill={block.color} stroke={block.borderColor} strokeWidth="25" />
          </g>
        </g>
      </svg>
      ))}
      {objBlocksCircle.map((block) => (
      <svg 
        className="image-block obj-block"
        key={block.id}
        style={{
          zIndex: block.zIndex,
          position: "absolute",
          width: "130px",
          height: "130px",
          left: block.position.x,
          top: block.position.y
        }}
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
        <g>
          <g>
            <circle cx="256" cy="256" r="250" fill={block.color} stroke={block.borderColor} strokeWidth="25" />
          </g>
        </g>
      </svg>
      ))}
    </div>
  );
}
