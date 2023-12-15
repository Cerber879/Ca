import React, { useState } from "react";
import { PrintCanvas } from "./components/canvas/PrintCanvas";
import { SetCanvas } from "./components/topBar/SetCanvas";
import { DownCanvas } from "./components/downBar/DownCanvas";
import { canvas } from "./modules/data";

function App() {
  const [width, setWidth] = useState(canvas.select.size.width);
  const [height, setHeight] = useState(canvas.select.size.height);
  const [inputZoom, setInputZoom] = useState(100);

  const handleSizeChange = (newWidth: number, newHeight: number) => {
    setWidth(newWidth);
    setHeight(newHeight);
  };

  return (
    <div style={{ top: "42px", left: "0px", width: width * (inputZoom / 100), height: height * (inputZoom / 100), overflow: "hidden", position: "relative" }}>
      <SetCanvas />
      <PrintCanvas width={width * (inputZoom / 100)} height={height * (inputZoom / 100)} canvas={canvas} />
      <DownCanvas
        width={width}
        height={height}
        onSizeChange={handleSizeChange}
        AppZoom={setInputZoom}
      />
    </div>
  );
}

export default App;