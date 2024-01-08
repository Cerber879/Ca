import React, { useState } from "react";
import styles from "./zoom.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore";
import { setZoom } from "../../../reducers/bottomBar/zoom";

export function ViewZoomBlock() {
  const dispatch = useDispatch();

  const Zoom = useSelector((state: RootState) => state.zoom.zoom);
  const [inpStyle, setInputStyle] = useState({ borderColor: "#749df6" });

  const [valueRange, setValueRange] = useState(3);
  const [dragInputZoom, setDragInputZoom] = useState(false);

  const [btnStyleZoomOut, setBtnStyleZoomOut] = useState({ backgroundColor: "#3f51b5" });
  const [btnStyleZoomIn, setBtnStyleZoomIn] = useState({ backgroundColor: "#3f51b5" });

  const handleMouseDown = () => {
    setDragInputZoom(true);
  };

  const handleMouseUp = () => {
    setDragInputZoom(false);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!dragInputZoom) return;
    const clientX = e.clientX;
    const ranges = [1295, 1310.5, 1330, 1347.5, 1368, 1385.5, 1405, 1425];
    const zooms = [25, 50, 75, 100, 200, 400, 800];
    for (let i = 0; i < 7; i++) {
      if (clientX >= ranges[i] && clientX < ranges[i + 1]) {
        dispatch(setZoom(zooms[i]));
        setValueRange(i);
        break;
      }
    }
  };

  const ZoomOutHover = () => {
    setBtnStyleZoomOut({ backgroundColor: "#6489ef" });
  };

  const ZoomOutNotHover = () => {
    setBtnStyleZoomOut({ backgroundColor: "#3f51b5" });
  };

  const ClickZoomOut = () => {
    if (Zoom <= 100) {
      dispatch(setZoom(Zoom - 25));
    } else {
      dispatch(setZoom(Zoom - Zoom / 2));
    }
    setValueRange(valueRange - 1);
  };

  const ZoomInHover = () => {
    setBtnStyleZoomIn({ backgroundColor: "#6489ef" });
  };

  const ZoomInNotHover = () => {
    setBtnStyleZoomIn({ backgroundColor: "#3f51b5" });
  };

  const ClickZoomIn = () => {
    if (Zoom < 100) {
      dispatch(setZoom(Zoom + 25));
    } else {
      dispatch(setZoom(Zoom + Zoom));
    }
    setValueRange(valueRange + 1);
  };

  const handleChange = (event: { target: { value: unknown } }) => {
    const newValue = event.target.value;
    console.log(newValue);
  };
  return (
    <div className={`${styles.toolbox} ${styles.flex_block}`}>
      <div className={styles.flex_block} style={{ gap: "0px" }}>
        <input
          className={styles.numberZoom}
          type="number"
          min="1"
          max="999"
          value={Zoom}
          onChange={(e) => dispatch(setZoom(parseInt(e.target.value)))}
          onFocus={() => setInputStyle({ borderColor: "#ffff" })}
          onBlur={() => setInputStyle({ borderColor: "#749df6" })}
          style={inpStyle}
        />
        <span className={styles.icon} style={inpStyle}>
              %
        </span>
      </div>

      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={ZoomOutHover}
        onMouseLeave={ZoomOutNotHover}
        onClick={ClickZoomOut}
        style={btnStyleZoomOut}
      >
        <img src="/images/zoom_out.svg" alt="Icon" width="17" height="17" />
      </button>
      <input
        type="range"
        className={styles.Slider}
        id="zoomSlider"
        min="0"
        max="6"
        step="1"
        value={valueRange}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={(event) => handleMouseMove(event)}
        onChange={handleChange}
      />
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={ZoomInHover}
        onMouseLeave={ZoomInNotHover}
        onClick={ClickZoomIn}
        style={btnStyleZoomIn}
      >
        <img src="/images/zoom_in.svg" alt="Icon" width="17" height="17" />
      </button>
    </div>
  );
}