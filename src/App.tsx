  import React, { useState } from "react";
  import { PrintCanvas } from "./components/PrintCanvas";
  import { SetCanvas } from "./components/SetCanvas";
  import { BottomCanvas } from "./components/BottomCanvas";
  import { canvas } from "./modules/data";

  function App() {

    const [width, setWidth] = useState(canvas.select.size.width);
    const [height, setHeight] = useState(canvas.select.size.height);

    const handleSizeChange = (newWidth: number, newHeight: number) => {
      setWidth(newWidth);
      setHeight(newHeight);
    };

    return (
      <>
        <SetCanvas />
        <PrintCanvas width={width} height={height} canvas={canvas} />
        <BottomCanvas
          width={width}
          height={height}
          onSizeChange={handleSizeChange}
        />
      </>
    );
  }

  export default App;