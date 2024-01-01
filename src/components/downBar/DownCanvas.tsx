import {  useEffect, useState } from "react";
import { canvasLeft, canvasTop } from "../canvas/PrintCanvas";
import { PopupResize } from "../PopupBlocks/PopupResize";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxStore";

import { PopupStatus } from "../PopupBlocks/PopupStatus";

type CanvasProps = {
  width: number;
  height: number;
  onSizeChange: (newWidth: number, newHeight: number) => void;
  AppZoom: (inputZoom: number) => void;
};

export let zoom = 1;   

export function DownCanvas({ width, height, onSizeChange, AppZoom }: CanvasProps) {
  
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const isResizeCanvasOpen = useSelector((state: RootState) => state.popupSLice.isResizeCanvasOpen);

  const [inputZoom, setInputZoom] = useState(100);
  const [inpStyle, setInputStyle] = useState({ borderColor: "#749df6"})

  const [valueRange, setValueRange] = useState(3);
  const [dragInputZoom, setDragInputZoom] = useState(false)

  const [btnStyleZoomOut, setBtnStyleZoomOut] = useState({ backgroundColor: "#3f51b5" });
  const [btnStyleZoomIn, setBtnStyleZoomIn] = useState({ backgroundColor: "#3f51b5" });
  
  const handleMouseDown = () => {
    setDragInputZoom(true)
  };

  const handleMouseUp = () => {
    setDragInputZoom(false)
  };

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {

    if(!dragInputZoom) return;
    const clientX = e.clientX;
    const ranges = [1295, 1305.5, 1330, 1347.5, 1368, 1385.5, 1405, 1425]
    const zooms = [25, 50, 75, 100, 200, 400, 800]
    for (let i = 0; i < 7; i++) {
      if (clientX >= ranges[i] && clientX < ranges[i+1]) {
        setInputZoom(zooms[i]);
        setValueRange(i);
        break; 
      }
    }
    zoom = (inputZoom / 100);
    AppZoom(inputZoom)
  }

  const ZoomOutHover = () => { setBtnStyleZoomOut({ backgroundColor: "#6489ef" })}
  const ZoomOutNotHover = () => { setBtnStyleZoomOut({ backgroundColor: "#3f51b5" })}

  const ClickZoomOut = () => {
    if(inputZoom <= 100) {
      setInputZoom(inputZoom - 25)
      zoom = (inputZoom / 100);
      AppZoom(inputZoom)
    }
    else {
      setInputZoom(inputZoom - inputZoom / 2)
      zoom = (inputZoom / 100);
      AppZoom(inputZoom)
    }
    setValueRange(valueRange - 1)
  };

  const ZoomInHover = () => {setBtnStyleZoomIn({ backgroundColor: "#6489ef" }) }
  const ZoomInNotHover = () => {setBtnStyleZoomIn({ backgroundColor: "#3f51b5" })}
  
  const ClickZoomIn = () => {
    if(inputZoom < 100) {
      setInputZoom(inputZoom + 25)
      zoom = (inputZoom / 100);
      AppZoom(inputZoom)
    }
    else {
      setInputZoom(inputZoom + inputZoom)
      zoom = (inputZoom / 100);
      AppZoom(inputZoom)
    }
    setValueRange(valueRange + 1);
  };

  useEffect(() => {
    zoom = (inputZoom / 100);
    AppZoom(inputZoom)
  }, [AppZoom, inputZoom]);

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
      <button className="size-canvas flex_block" onClick={() => PopupStatus("size", dispatch, isResizeCanvasOpen)}>
        <img className="img-size" src="/images/picture.svg" alt="" />
        {width} <span>x</span> {height}px
      </button>

      <span className="divider"></span>

      <div>
        <img className="cursor_img" src="/images/cursor3.svg" alt="Icon" width="20" height="20" />
        <span id="coordinates"></span>
      </div>

      <div className="toolbox flex_block" id="zoomToolbox">
        <div className="flex_block" style={{ gap:"0px"}}>
          <input className="numberZoom" type="number" id="zoomPercent" min="1" max="999" title="Zoom level"
          value={inputZoom}
          onChange={(e) => setInputZoom(parseInt(e.target.value))}
          onFocus={() => setInputStyle({ borderColor: "#ffff"})}
          onBlur={() => setInputStyle({ borderColor: "#749df6"})}
          style={inpStyle}
        />
        <span className="icon" style={inpStyle}>%</span>
        </div>

        <button 
          className="text svg_btn" 
          onMouseEnter={ZoomOutHover} 
          onMouseLeave={ZoomOutNotHover} 
          onClick={ClickZoomOut} 
          style={btnStyleZoomOut}>
          <img id="svg_icon_text" src="/images/zoom_out.svg" alt="Icon" width="17" height="17" />
        </button>
        <input type="range" className="Slider" id="zoomSlider" min="0" max="6" step="1" value={valueRange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp} 
          onMouseMove={(event) => handleMouseMove(event)}
        />
        <button 
          className="text svg_btn" 
          onMouseEnter={ZoomInHover} 
          onMouseLeave={ZoomInNotHover} 
          onClick={ClickZoomIn} 
          style={btnStyleZoomIn}>
          <img id="svg_icon_text" src="/images/zoom_in.svg" alt="Icon" width="17" height="17" />
        </button>
      </div>
    </div>
    {isResizeCanvasOpen && (
      <PopupResize width={width} height={height} close={() => PopupStatus("size", dispatch, isResizeCanvasOpen)} onResize={onSizeChange}/>
    )}
    </>
  );
}