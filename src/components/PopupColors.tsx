import { useEffect, useState } from "react";
import { setActiveColorBack, setOpenColors, setActiveColor } from "./SetCanvas"

type PopupProps = {
  close: () => void;
};

export function PopupColors({ close }: PopupProps) {

  const [styleColor, setStyleColor] = useState({backgroundColor: "black"})
  const [styleColorBack, setStyleColorBack] = useState({backgroundColor: "black"})
  const [color, setColor] = useState("")
  const [colorBack, setColorBack] = useState("")

  useEffect(() => {
    if(setOpenColors()) {
      const overlay = document.getElementById("overlay") as HTMLDivElement;
      const popup = document.getElementById("popup") as HTMLDivElement;
      overlay.style.display = "block";
      popup.style.display = "block";
    };
  }, [])
  
  function closePopup() {
    close();
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  function CleanCanvas() {
    setActiveColor(color)
    setActiveColorBack(colorBack)
    closePopup();
  }

  useEffect(() => {
    const colorRanges1 = document.querySelector('.color-range1') as HTMLInputElement;
    const colorRanges2 = document.querySelector('.color-range2') as HTMLInputElement;
    const colorRanges3 = document.querySelector('.color-range3') as HTMLInputElement;

    const red = colorRanges1.value;
    const green = colorRanges2.value;
    const blue = colorRanges3.value;
    const color = `rgb(${red}, ${green}, ${blue})`;
    setColor(color)
    setStyleColor({backgroundColor: color})

    const colorRanges4 = document.querySelector('.color-range4') as HTMLInputElement;
    const colorRanges5 = document.querySelector('.color-range5') as HTMLInputElement;
    const colorRanges6 = document.querySelector('.color-range6') as HTMLInputElement;

    const redBack = colorRanges4.value;
    const greenBack = colorRanges5.value;
    const blueBack = colorRanges6.value;
    const colorBack = `rgb(${redBack}, ${greenBack}, ${blueBack})`;
    setColorBack(colorBack)
    setStyleColorBack({backgroundColor: colorBack})
  })

  return (
    <>
    <div id="overlay" className="overlay"></div>
    <div id="popup" className="popup" style={{ width: "300px", height: "300px" }}>
      <div className="flex_block headerPopup">
        <span className="resizeText">Colors</span>
        <button id="closeButton" className="button btn-close" onClick={closePopup}>
          x
        </button>
      </div>
      <div className="flex_block">
        <div className="color-block" style={{ display: "flex", flexDirection: "column", flexWrap: "nowrap",  width: 120 }}>
          <label htmlFor="color-range1">red: </label>
          <input id="color-range1" className="color-range1" type="range" min="0" max="255" />

          <label htmlFor="color-range2">green: </label>
          <input id="color-range2" className="color-range2" type="range" min="0" max="255" />

          <label htmlFor="color-range3">blue: </label>
          <input id="color-range3" className="color-range3" type="range" min="0" max="255" />

          <div style={styleColor} className="color-preview"></div>
        </div>
        <div className="color-block" style={{ display: "flex", flexDirection: "column", flexWrap: "nowrap",  width: 120 }}>
          <label htmlFor="color-range1">red: </label>
          <input id="color-range4" className="color-range4" type="range" min="0" max="255" />

          <label htmlFor="color-range2">green: </label>
          <input id="color-range5" className="color-range5" type="range" min="0" max="255" />

          <label htmlFor="color-range3">blue: </label>
          <input id="color-range6" className="color-range6" type="range" min="0" max="255" />

          <div style={styleColorBack} className="color-preview"></div>
        </div>
      </div>
      
      <div className="flex_block menuPopup">
        <button
        id="closeButton"
        className="button btn-cancel-Size"
        style={{ backgroundColor: "#b53f3f" }}
        onClick={closePopup}
        >
        Cancel
        </button>
        <button
        id="btn-confirm-Size"
        className="button"
        style={{ backgroundColor: "#3e67d7" }}
        onClick={CleanCanvas}
        >
        Save
        </button>
      </div>
    </div>
    </>
  );
}
