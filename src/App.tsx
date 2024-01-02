import React from "react";
import { ViewCanvas } from "./components/canvas/ViewCanvas";
import { TopPanel } from "./components/topBar/TopPanel";
import { DownPanel } from "./components/downBar/DownPanel";
import { useSelector } from "react-redux";
import { RootState } from "./ReduxStore";

function App() {
  const width = useSelector((state: RootState) => state.fontCanvas.width);
  const height = useSelector((state: RootState) => state.fontCanvas.height);
  const zoom = useSelector((state: RootState) => state.zoom.zoom) / 100;

  return (
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
        width={width}
        height={height}
      />
    </div>
  );
}

export default App;
