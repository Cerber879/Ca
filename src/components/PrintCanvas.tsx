import React, { useEffect, useRef, useState } from "react";
import { Canvas, TextBlock, Position, ImageBlock, GraphicObject } from "../modules/types";
import { graphicBlock, textBlock } from "../modules/data";
import { setactivePen, setactiveImage, setactiveText, setactiveTextTransparent, setactiveColor, setactiveBorderColor, setactiveObjTriangle, setactiveObSquare, setactiveObjCircle, setactiveObj, setObj, setactiveFont, setactiveFontFamilies, setTextBold, setTextItalic, setTextUnderline, setTextStriketrough } from "./SetCanvas";
import { zoom } from "./BottomCanvas"
import { getDeleteData, deleteDisActive } from "./PopupClean"
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
    if(getDeleteData() === "all") {
      setInputBlocks([]);
      setImageBlocks([]);
      setDrawPixels([]);
      setObjBlocks([]);
      deleteDisActive();
    } 
    else if (getDeleteData() === "text") { setInputBlocks([]); deleteDisActive(); }
    else if (getDeleteData() === "image") { setImageBlocks([]); deleteDisActive(); }
    else if (getDeleteData() === "object") { setObjBlocks([]); deleteDisActive(); }
    else if (getDeleteData() === "draw") { setDrawPixels([]); deleteDisActive(); }
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

  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [drawPixels, setDrawPixels] = useState<{ x: number; y: number }[]>([]);
  const [inputBlocks, setInputBlocks] = useState<TextBlock[]>([]);
  const [imageBlocks, setImageBlocks] = useState<ImageBlock[]>([]);
  const [objBlocks, setObjBlocks] = useState<GraphicObject[]>([]);

  const [zIndex, setzIndex] = useState(2);

  const [dragg, setDragg] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [draggingSize, setDraggingSize] = useState(false);
  const [delX, setDelX] = useState(0);
  const [delY, setDelY] = useState(0);

  const handleMouseDownSize = (e: { clientX: number; clientY: number; }, x: number, y: number) => {
    setDraggingSize(true);
  };
  
  const handleMouseMoveSize = (x: number, y: number, id: number, type: string, isNwseSize: boolean) => {
    if (!draggingSize) {
      return;
    }

    setDragg(true);
  
    if (type === "text") {
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => { 
        const updatedInputBlocks = inputBlocks.map((block) => {
        if (block.id === id) {
          return {
            ...block,
            width: e.clientX - block.position.x - canvasLeft,
            height: e.clientY - block.position.y - canvasTop
          };
        }
        return block;
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
            return {
              ...block,
              width: e.clientX - block.position.x - canvasLeft,
              height: e.clientY - block.position.y - canvasTop
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
  
  const handleMouseUpSize = () => {
    setDraggingSize(false);
    setDragg(false);
  };

  const handleMouseDown = (e: { clientX: number; clientY: number; }, x: number, y: number) => {
    setDragging(true);
    setDelX(e.clientX - x);
    setDelY(e.clientY - y);
  };
  
  const handleMouseMove = (x: number, y: number, id: number, type: string, isNwseSize: boolean) => {
    if (!dragging) {
      return;
    }

    setDragg(true);
  
    if (type === "text") {
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => { 
        const updatedInputBlocks = inputBlocks.map((inputBlock) => {
        if (inputBlock.id === id) {
            return {
              ...inputBlock,
              position: {
                x: e.clientX - delX,
                y: e.clientY - delY,
              },
            };
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
    else if (type === "graphic") {
      const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        const updatedObjectsBlocks = objBlocks.map((block) => {
          if (block.id === id) {
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
    
        setObjBlocks(updatedObjectsBlocks);
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
    setDragg(false);
    setDragging(false);
  };

  const handleCanvasClick = (event: React.MouseEvent) => {
    const active = setactiveText();
    const activeImage = setactiveImage();
    const activeObj = setactiveObjTriangle() || setactiveObSquare() || setactiveObjCircle();

    setzIndex(zIndex + 1);

    const clickedPosition: Position = {
      x: event.clientX - canvasLeft,
      y: event.clientY - canvasTop
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
          borderColor: !setactiveTextTransparent() ? setactiveBorderColor() : "transparent",
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
              const image = new Image();
              image.src = imageUrl;
              const width = image.naturalWidth;
              const height = image.naturalHeight;
              const imageBlock: ImageBlock = {
                id: imageBlocks.length + 1,
                position: clickedPosition,
                type: "image",
                width: width,
                height: height,
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
          id: objBlocks.length + 1,
          type: "triangle",
          width: graphicBlock.width,
          height: graphicBlock.height,
          borderColor: setactiveObj() === "fill" ? "transparent" : setactiveBorderColor(),
          color: setactiveObj() === "stroke" ? "transparent" : setactiveColor(),
          zIndex: zIndex,
          position: clickedPosition, 
        }
      setObjBlocks([...objBlocks, objBlock])
      } else if (obj === "square") {
        const objBlock: GraphicObject = {
          id: objBlocks.length + 1,
          type: "square",
          width: graphicBlock.width,
          height: graphicBlock.height,
          borderColor: setactiveObj() === "fill" ? "transparent" : setactiveBorderColor(),
          color: setactiveObj() === "stroke" ? "transparent" : setactiveColor(),
          zIndex: zIndex,
          position: clickedPosition, 
        }
        setObjBlocks([...objBlocks, objBlock])
      } else if (obj === "circle") {
        const objBlock: GraphicObject = {
          id: objBlocks.length + 1,
          type: "circle",
          width: graphicBlock.width,
          height: graphicBlock.height,
          borderColor: setactiveObj() === "fill" ? "transparent" : setactiveBorderColor(),
          color: setactiveObj() === "stroke" ? "transparent" : setactiveColor(),
          zIndex: zIndex,
          position: clickedPosition, 
        }
        setObjBlocks([...objBlocks, objBlock])
      }
    }
  }

  const handleMouseClickFocus = (event: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => {
    event.preventDefault();
    const targetInput = inputRefs.current[index];
    if (targetInput && document.activeElement !== targetInput) {
      targetInput.focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current[inputBlocks.length]) {
      inputRefs.current[inputBlocks.length].focus();
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
    <div id="container" style={{ width: width, height: height }}>
      <canvas
        id="canvas"
        className="canvas"
        style={{
          backgroundColor: canvas.backgroundColor,
          width: `${width}px`, 
          height: `${height}px`,
          position: "relative"
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
      <>
        { document.activeElement === inputRefs.current[block.id] && 
          <div
            style={{
              position: "absolute",
              zIndex: block.zIndex + 1,
              left: block.position.x - 1,
              top: block.position.y - 1,
              width: block.width * zoom,
              height: block.height * zoom,
              border: "1px dashed black",
              pointerEvents: "none",
            }}
          />}
        <input
          id="textInput"
          className="input-block draggable-element"
          key={block.id}
          style={{
            zIndex: block.zIndex,
            width: block.width * zoom,
            height: block.height * zoom,
            fontSize: block.text.fontSize * zoom,
            fontFamily: block.text.fontFamily,
            color: block.text.color,
            fontWeight: block.text.fontWeight,
            fontStyle: block.text.fontStyle,
            textDecorationLine: block.text.textDecorationLine,
            position: "absolute",
            left: block.position.x * zoom,
            top: block.position.y * zoom,
            background: block.text.borderColor,
            border: 'none', 
            outline: 'none', 
            boxShadow: 'none', 
            padding: 0,
          }}
          ref={(el) => { if (el) inputRefs.current[block.id] = el}}
          onClick={(event) => {
            handleMouseClickFocus(event, block.id)
          }}
          onMouseDown={(event) => {handleMouseDown(event, block.position.x, block.position.y); event.preventDefault(); inputRefs.current[block.id].blur()}}
          onMouseMove={() => { if (!dragg) handleMouseMove(block.position.x, block.position.y, block.id, block.type, false)}}
          onMouseUp={handleMouseUp}
          onFocus={(event) => {
            const updatedInputBlocks = inputBlocks.map((inputBlock) => {
              if (inputBlock.id === block.id) {
                return {
                  ...inputBlock,
                  text: { 
                    fontSize: setactiveFont(),
                    fontFamily: setactiveFontFamilies(),
                    fontWeight: setTextBold(),
                    fontStyle: setTextItalic(),
                    textDecorationLine: `${setTextUnderline()} ${setTextStriketrough()}`,
                    borderColor: !setactiveTextTransparent() ? setactiveBorderColor() : "transparent",
                    color: setactiveColor(),
                    value: event.target.value 
                  }
                };
              }
              return inputBlock;
            });

            setInputBlocks(updatedInputBlocks);
          }}
        />
        { document.activeElement === inputRefs.current[block.id] && 
          <div 
            onMouseDown={(event) => {handleMouseDownSize(event, block.position.x, block.position.y) }}
            onMouseMove={() => { if (!dragg) handleMouseMoveSize(block.position.x, block.position.y, block.id, block.type, true)}}
            onMouseUp={handleMouseUpSize} 
            style={{
              cursor: "nwse-resize", 
              zIndex: block.zIndex + 1, 
              position: "absolute", 
              width: "5px", 
              height: "5px", 
              left: block.position.x + (block.width * zoom) - 3.5, 
              top: block.position.y + (block.height * zoom) - 3.5, 
              border: "1px solid black"
            }}
          />}
      </>
      ))}
      {imageBlocks.map((block) => (
        <><img
          alt=""
          id={`imageBlock-${block.id}`}
          className="image-block selector"
          draggable="false"
          key={block.id}
          src={block.imageUrl}
          style={{
            zIndex: block.zIndex,
            position: "absolute",
            width: block.width * zoom,
            height: block.height * zoom,
            left: block.position.x * zoom,
            top: block.position.y * zoom,
          }}
          onMouseDown={(event) => { handleMouseDown(event, block.position.x, block.position.y); } }
          onMouseMove={() => { if (!dragg) handleMouseMove(block.position.x, block.position.y, block.id, block.type, true)}}
          onMouseUp={handleMouseUp} />
          <div
            onMouseDown={(event) => { handleMouseDownSize(event, block.position.x, block.position.y); } }
            onMouseMove={() => { if (!dragg)handleMouseMoveSize(block.position.x, block.position.y, block.id, block.type, true)}}
            onMouseUp={handleMouseUpSize}
            style={{
              cursor: "nwse-resize",
              zIndex: block.zIndex + 1,
              position: "absolute",
              width: "10px", 
              height: "10px", 
              left: block.position.x + (block.width * zoom) - 10,
              top: block.position.y + (block.height * zoom) - 10,
            }} 
          />
        </>
      ))}
      {objBlocks.map((block) => (
        <svg 
          className="image-block obj-block"
          key={block.id}
          style={{
            zIndex: block.zIndex,
            position: "absolute",
            width: block.width * zoom,
            height: block.height * zoom,
            left: block.position.x * zoom,
            top: block.position.y * zoom
          }}
          onMouseDown={(event) => {handleMouseDown(event, block.position.x, block.position.y); }}
          onMouseMove={() => { if (!dragg) handleMouseMove(block.position.x, block.position.y, block.id, graphicBlock.type, false)}}
          onMouseUp={handleMouseUp}
          version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
          {block.type === "triangle" && (
            <g>
              <g>
                <polygon points="256,30 486,472 26,472" fill={block.color} stroke={block.borderColor} strokeWidth={25} />
              </g>
            </g>
          )}
          {block.type === "square" && (
            <g>
              <g>
                <rect width="100%" height="100%" fill={block.color} stroke={block.borderColor} strokeWidth={25 * 2} />
              </g>
            </g>
          )}
          {block.type === "circle" && (
            <g>
            <g>
              <circle cx={256} cy={256} r={250 - 25 / 2} fill={block.color} stroke={block.borderColor} strokeWidth={25} />
            </g>
          </g>
          )}   
      </svg> 
      ))}
    </div>
  );
}