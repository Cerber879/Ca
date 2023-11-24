import {  useEffect, useState } from "react";
import { canvasLeft, canvasTop } from "./PrintCanvas";
import { Popup } from "./Popup";

type CanvasProps = {
  width: number;
  height: number;
  onSizeChange: (newWidth: number, newHeight: number) => void;
};

export let openBlock = false;

export function BottomCanvas({ width, height, onSizeChange }: CanvasProps) {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    openBlock = true;
    setIsOpen(true);
  }

  function close() {
    openBlock = false;
    setIsOpen(false);
  }

  useEffect(() => {
    function handleMouseMove(event: { clientX: number; clientY: number }) {
      const mouseX = Math.round(event.clientX - canvasLeft);
      const mouseY = Math.round(event.clientY - canvasTop);

      if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        const coordinatesElement = document.getElementById("coordinates") as HTMLDivElement;
        if (coordinatesElement) {
          coordinatesElement.textContent = `${mouseX}, ${mouseY}px`;
        }
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [height, width]);

  return (
    <>
    <div className="bottom-Bar" id="setBar">
      <button className="button size-canvas" onClick={open}>
        {width} <span>x</span> {height}
      </button>

      <div>
        <img className="cursor_img" src="/images/cursor3.svg" alt="Icon" width="20" height="20" />
        <span id="coordinates"></span>
      </div>

    </div>
    {isOpen && (
      <Popup width={width} height={height} close={close} onResize={onSizeChange}/>
    )}
    </>
    
  );
}