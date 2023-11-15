import { useState } from "react";
import "../index.css";
import { PopupClean } from "./PopupClean"

let openCleaner = false;
let activePen = false;
let Active = false;
let activeImage = false;
let activeColor = "black";

export function SetCanvas() {

  const [isCleaneerOpen, serIsCleaneerOpen] = useState(false);
  const [btnStyleImage, setBtnStyleImage] = useState({});
  const [btnStylePen, setBtnStylePen] = useState({ backgroundColor: "#3f51b5" });
  const [styleColor, setStyleColor] = useState("rgb(0, 0, 0)");
  const [backStyleColorBlack, setBackStyleColorBlack] = useState({ backgroundColor: "#3f51b5" })
  const [backStyleColorWhite, setBackStyleColorWhite] = useState({ backgroundColor: "#3f51b5" })
  const [backStyleColorBlue, setBackStyleColorBlue] = useState({ backgroundColor: "#3f51b5" })

  const closeOrOpen = () => {
    if(openCleaner === false){
      openCleaner = true;
      serIsCleaneerOpen(true)
    } else {
      openCleaner = false;
      serIsCleaneerOpen(false)
    }
  }

  const handleClickPenHover = () => {
    if (activePen === false) {
      setBtnStylePen({ backgroundColor: "#6489ef" })
    }
  }

  const handleClickPenNotHover = () => {
    if (activePen === false) {
      setBtnStylePen({ backgroundColor: "#3f51b5" })
    }
  }

  const handleClickPen = () => {
    const svgIcon = document.getElementById('svg_icon_pen') as HTMLImageElement;
    if (activePen === false) {
        activePen = true;
        setBtnStylePen({ backgroundColor: "#ffffff" })
        svgIcon.setAttribute('src', '/images/pencil2.svg');
    } else {
        activePen = false;
        setBtnStylePen({ backgroundColor: "#3f51b5" })
        svgIcon.setAttribute('src', '/images/pencil.svg');
    } 
  };

  const handleClick = () => {
    const svgIcon = document.getElementById('svg_icon_text') as HTMLImageElement;
    if (Active === false) {
        Active = true;
        svgIcon.setAttribute('src', '/images/text_hover.svg');
    } else {
        Active = false;
        svgIcon.setAttribute('src', '/images/text2.svg');
    } 
  };

  const handleClickImage = () => {
    if (activeImage === false) {
      activeImage = true;
      setBtnStyleImage({ backgroundColor: "white", color: "rgb(32, 73, 159)" });
    } else {
      activeImage = false;
      setBtnStyleImage({});
    } 
  };

  const handleClickColorBlack = () => { setStyleColor("rgb(0, 0, 0)"); activeColor = "rgb(0, 0, 0)" };
  const handleClickColorWhite = () => { setStyleColor("rgb(255, 255, 255)"); activeColor = "rgb(255, 255, 255)" };
  const handleClickColorBlue = () => { setStyleColor("rgb(36, 123, 255)"); activeColor = "rgb(36, 123, 255)" };
  
  const handleColorHoverBlack = () => { setBackStyleColorBlack({ backgroundColor: "#6489ef" }) }
  const handleColorHoverWhite = () => { setBackStyleColorWhite({ backgroundColor: "#6489ef" }) }
  const handleColorHoverBlue = () => { setBackStyleColorBlue({ backgroundColor: "#6489ef" }) }

  const handleColorNotHoverBlack = () => { setBackStyleColorBlack({ backgroundColor: "#3f51b5" }) }
  const handleColorNotHoverWhite = () => { setBackStyleColorWhite({ backgroundColor: "#3f51b5" }) }
  const handleColorNotHoverBlue = () => { setBackStyleColorBlue({ backgroundColor: "#3f51b5" }) }

  return (
    <>
    <div className="flex_block settings-block" id="setBar">
      <button onClick={closeOrOpen} id="deleteButton" className="button btn-close"><img src="/images/krest.svg" alt="Icon" width="16px" height="16px" /></button>
      <span className="divider"></span>
      <button className="pen svg_btn" onMouseEnter={handleClickPenHover} onMouseLeave={handleClickPenNotHover} onClick={handleClickPen} style={btnStylePen}><img id="svg_icon_pen" src="/images/pencil.svg" alt="Icon" width="15" height="15" /></button>
      <span className="divider"></span>
      <div className="flex_block">
        <button className="text svg_btn" onClick={handleClick}><img id="svg_icon_text" src="/images/text2.svg" alt="Icon" width="30" height="30" /></button>
        <button className="button btn-setImage" style={btnStyleImage} onClick={handleClickImage}>Set Image</button>
      </div>
      <span className="divider"></span>
      <div className="flex_block">
        <div id="active-color" style={{ backgroundColor: `${styleColor}` }}></div>
        <button onClick={handleClickColorBlack} onMouseEnter={handleColorHoverBlack} onMouseLeave={handleColorNotHoverBlack}
          style={backStyleColorBlack} className="color-button"><img id="svg_icon_color" src="/images/black.svg" alt="Icon" width="18" height="18" />
        </button>
        <button onClick={handleClickColorWhite} onMouseEnter={handleColorHoverWhite} onMouseLeave={handleColorNotHoverWhite}
          style={backStyleColorWhite} className="color-button"><img id="svg_icon_color" src="/images/white.svg" alt="Icon" width="18" height="18" />
        </button>
        <button onClick={handleClickColorBlue} onMouseEnter={handleColorHoverBlue} onMouseLeave={handleColorNotHoverBlue}
          style={backStyleColorBlue} className="color-button"><img id="svg_icon_color" src="/images/blue.svg" alt="Icon" width="18" height="18" />
        </button>
      </div>
    </div>
    {isCleaneerOpen && (
      <PopupClean close={closeOrOpen} />
    )}
    </>
  );
}

export function onClick(): boolean {
    return Active;
}
  
export function setactiveImage(): boolean {
  return activeImage;
}

export function setactivePen(): boolean {
  return activePen;
}

export function setactiveColor(): string {
  return activeColor;
}

export function setOpenCleaner(): boolean {
  return openCleaner;
}