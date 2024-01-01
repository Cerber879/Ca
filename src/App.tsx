<<<<<<< HEAD
import React from "react";
import { ViewCanvas } from "./components/canvas/ViewCanvas";
import { TopPanel } from "./components/topBar/TopPanel";
import { DownPanel } from "./components/downBar/DownPanel";
import { useSelector } from "react-redux";
import { RootState } from "./ReduxStore";
=======
import React, { useState } from "react";
import { PrintCanvas } from "./components/canvas/PrintCanvas";
import { SetCanvas } from "./components/topBar/SetCanvas";
import { DownCanvas } from "./components/downBar/DownCanvas";
import { canvas } from "./modules/data";
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

function App() {
  const width = useSelector((state: RootState) => state.size.width);
  const height = useSelector((state: RootState) => state.size.height);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;

  return (
<<<<<<< HEAD
    <div
      style={{
        top: "42px",
        left: "0px",
        width: width * (zoom),
        height: height * (zoom),
        overflow: "hidden",
        position: "relative",
      }}
    >
      <TopPanel />
      <ViewCanvas
        width={width * (zoom)}
        height={height * (zoom)}
      />
      <DownPanel
=======
    <div style={{ top: "42px", left: "0px", width: width * (inputZoom / 100), height: height * (inputZoom / 100), overflow: "hidden", position: "relative" }}>
      <SetCanvas />
      <PrintCanvas width={width * (inputZoom / 100)} height={height * (inputZoom / 100)} canvas={canvas} />
      <DownCanvas
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
        width={width}
        height={height}
      />
    </div>
  );
}

export default App;
