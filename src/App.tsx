import React from "react";
import styles from "./index.module.css";

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
    <div className={styles.page}
      style={{
        width: width * zoom,
        height: height * zoom,
      }}
    >
      <TopPanel />
      <ViewCanvas width={width * zoom} height={height * zoom} />
      <DownPanel />
    </div>
  );
}

export default App;
