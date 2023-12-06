import { useState } from "react";
import "../index.css";
import { PopupClean } from "./PopupClean";
import { PopupFonts } from "./PopupFonts";
import { PopupFontFamily } from "./PopupFontFamily";
import { PopupColors } from "./PopupColors";

let openCleaner = false;
let active = "";
let activePen = false;
let activeText = false;
let activeTextTransparent = true;
let activeTextMuddy = false;
let activeTextBold = false;
let activeTextItalic = false;
let activeTextUnderLine = false;
let activeTextLineStriketrough = false;
let activeImage = false;
let activeObjTriangle = false;
let activeObjSquare = false;
let activeObjCircle = false;
let activeObjStroke = true;
let activeObjFill = false;
let activeObjFillStroke = false;
let obj = "";
let activeColor = "black";
let activeColorBorder = "white";
let activeFont = 12;
let openFonts = false;
let openColors = false;
let activeFontFamily= "Arial";
let openFontFamilies = false;

export function SetCanvas() {

  const [isCleaneerOpen, serIsCleaneerOpen] = useState(false);
  const [isFontSizesOpen, serIsFontSizesOpen] = useState(false);
  const [isFontFamiliesOpen, serIsFontFamiliesOpen] = useState(false);
  const [isColorsOpen, serIsColorsOpen] = useState(false);

  const [btnStylePen, setBtnStylePen] = useState({ backgroundColor: "#3f51b5" });
  const [btnStyleText, setBtnStyleText] = useState({ backgroundColor: "#3f51b5" });
  const [btnStyleImage, setBtnStyleImage] = useState({ backgroundColor: "#3f51b5" });

  const [btnStyleTextBold, setBtnStyleTextBold] = useState({ backgroundColor: "#3f51b5" });
  const [btnStyleTextItalic, setBtnStyleTextItalic] = useState({ backgroundColor: "#3f51b5" });
  const [btnStyleTextUnderLine, setBtnStyleTextUnderLine] = useState({ backgroundColor: "#3f51b5" });
  const [btnStyleTextLineStriketrough, setBtnStyleTextLineStriketrough] = useState({ backgroundColor: "#3f51b5" });

  const [typeColor, setTypeColor] = useState(true);

  const [btnStyleTextTransparent, setBtnStyleTextTransparent] = useState({  backgroundColor: "#ffffff" });
  const [btnStyleTextMuddy, setBtnStyleTextMuddy] = useState({ backgroundColor: "#3f51b5" });

  const [btnStyleTriangle, setBtnStyleTriangle] = useState({ backgroundColor: "#3f51b5" })
  const [btnStyleSquare, setBtnStyleSquare] = useState({ backgroundColor: "#3f51b5" })
  const [btnStyleCircle, setBtnStyleCircle] = useState({ backgroundColor: "#3f51b5" })

  const [btnStyleStroke, setBtnStyleStroke] = useState({ backgroundColor: "#ffffff" })
  const [btnStyleFill, setBtnStyleFill] = useState({ backgroundColor: "#3f51b5" })
  const [btnStyleFillStroke, setBtnStyleFillStroke] = useState({ backgroundColor: "#3f51b5" })

  const closeOrOpen = () => {
    if(openCleaner === false){
      openCleaner = true;
      serIsCleaneerOpen(true)
    } else {
      openCleaner = false;
      serIsCleaneerOpen(false)
    }
  }

  const closeOrOpenFontSizes = () => {
    if(openFonts === false){
      openFonts = true;
      serIsFontSizesOpen(true)
    } else {
      openFonts = false;
      serIsFontSizesOpen(false)
    }
  }

  const closeOrOpenFontFamilies = () => {
    if(openFontFamilies === false){
      openFontFamilies = true;
      serIsFontFamiliesOpen(true)
    } else {
      openFontFamilies = false;
      serIsFontFamiliesOpen(false)
    }
  }
  
  const closeOrOpenColors = () => {
    if(openColors === false){
      openColors = true;
      serIsColorsOpen(true)
    } else {
      openColors = false;
      serIsColorsOpen(false)
    }
  }

  const handleOffClick = () => {
    if (activePen === true && active !== "Pen") { handleClickPen(); }
    if (activeText === true && active !== "Text") { handleClickText(); }
    if (activeImage === true && active !== "Image") { handleClickImage(); }
    if (activeObjTriangle === true && active !== "Triangle") { handleClickObjTriangle(); }
    if (activeObjSquare === true && active !== "Square") { handleClickObjSquare(); }
    if (activeObjCircle === true && active !== "Circle") { handleClickObjCircle(); }
  }

  const handleClickPenHover = () => {
    if (activePen === false) { setBtnStylePen({ backgroundColor: "#6489ef" }) }
  }

  const handleClickPenNotHover = () => {
    if (activePen === false) {setBtnStylePen({ backgroundColor: "#3f51b5" })}
  }

  const handleClickPen = () => {
    active = "Pen";
    handleOffClick();
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

  const handleClickTextHover = () => {
    if (activeText === false) { setBtnStyleText({ backgroundColor: "#6489ef" }) }
  }
  
  const handleClickTextNotHover = () => {
    if (activeText === false) {setBtnStyleText({ backgroundColor: "#3f51b5" })}
  }

  const handleClickText = () => {
    active = "Text";
    handleOffClick();
    const svgIcon = document.getElementById('svg_icon_text') as HTMLImageElement;
    if (activeText === false) {
        activeText = true;
        setBtnStyleText({ backgroundColor: "#ffffff" })
        svgIcon.setAttribute('src', '/images/text_hover.svg');
    } else {
        activeText = false;
        setBtnStyleText({ backgroundColor: "#3f51b5" })
        svgIcon.setAttribute('src', '/images/text2.svg');
    } 
  };

  const SetHandleClickTextHoverTransparent = () => {
    if (activeTextTransparent === false) { setBtnStyleTextTransparent({ backgroundColor: "#6489ef" }) }
  }
  
  const SetHandleClickTextNotHoverTransparent = () => {
    if (activeTextTransparent === false) {setBtnStyleTextTransparent({ backgroundColor: "#3f51b5" })}
  }

  const SetHandleClickTextTransparent = () => {
    if (activeTextMuddy === true) SetHandleClickTextMuddy();
    const svgIcon = document.getElementById('svg_icon_text_transparent') as HTMLImageElement;
    if (activeTextTransparent === false) {
      activeTextTransparent = true;
        setBtnStyleTextTransparent({ backgroundColor: "#ffffff" })
        svgIcon.setAttribute('src', '/images/text_hover.svg');
    } else {
      activeTextTransparent = false;
        setBtnStyleTextTransparent({ backgroundColor: "#3f51b5" })
        svgIcon.setAttribute('src', '/images/text2.svg');
    } 
  };

  const SetHandleClickTextHoverMuddy = () => {
    if (activeTextMuddy === false) { setBtnStyleTextMuddy({ backgroundColor: "#6489ef" }) }
  }
  
  const SetHandleClickTextNotHoverMuddy = () => {
    if (activeTextMuddy === false) {setBtnStyleTextMuddy({ backgroundColor: "#3f51b5" })}
  }

  const SetHandleClickTextMuddy = () => {
    if (activeTextTransparent === true) SetHandleClickTextTransparent();
    const svgIcon = document.getElementById('svg_icon_text_muddy') as HTMLImageElement;
    if (activeTextMuddy === false) {
        activeTextMuddy = true;
        setBtnStyleTextMuddy({ backgroundColor: "#ffffff" })
        svgIcon.setAttribute('src', '/images/text_hover2.svg');
    } else {
        activeTextMuddy = false;
        setBtnStyleTextMuddy({ backgroundColor: "#3f51b5" })
        svgIcon.setAttribute('src', '/images/text3.svg');
    } 
  };

  const handleClickTextBoldHover = () => {
    if (activeTextBold === false) { setBtnStyleTextBold({ backgroundColor: "#6489ef" }) }
  }
  
  const handleClickTextBoldNotHover = () => {
    if (activeTextBold === false) {setBtnStyleTextBold({ backgroundColor: "#3f51b5" })}
  }

  const handleClickTextBold = () => {
    const svgIcon = document.getElementById('svg_icon_text_bold') as HTMLImageElement;
    if (activeTextBold === false) {
      activeTextBold = true;
      setBtnStyleTextBold({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/text_bold_active.svg');
    } else {
      activeTextBold = false;
      setBtnStyleTextBold({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/text_bold.svg');
    } 
  };

  const handleClickTextItalicHover = () => {
    if (activeTextItalic === false) { setBtnStyleTextItalic({ backgroundColor: "#6489ef" }) }
  }
  
  const handleClickTextItalicNotHover = () => {
    if (activeTextItalic === false) {setBtnStyleTextItalic({ backgroundColor: "#3f51b5" })}
  }

  const handleClickTextItalic = () => {
    const svgIcon = document.getElementById('svg_icon_text_italic') as HTMLImageElement;
    if (activeTextItalic === false) {
      activeTextItalic = true;
      setBtnStyleTextItalic({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/text_italic_active.svg');
    } else {
      activeTextItalic = false;
      setBtnStyleTextItalic({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/text_italic.svg');
    } 
  };

  const handleClickTextUnderLineHover = () => {
    if (activeTextUnderLine === false) { setBtnStyleTextUnderLine({ backgroundColor: "#6489ef" }) }
  }
  
  const handleClickTextUnderLineNotHover = () => {
    if (activeTextUnderLine === false) {setBtnStyleTextUnderLine({ backgroundColor: "#3f51b5" })}
  }

  const handleClickTextUnderLine = () => {
    const svgIcon = document.getElementById('svg_icon_text_underline') as HTMLImageElement;
    if (activeTextUnderLine === false) {
      activeTextUnderLine = true;
      setBtnStyleTextUnderLine({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/text_underline_active.svg');
    } else {
      activeTextUnderLine = false;
      setBtnStyleTextUnderLine({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/text_underline.svg');
    } 
  };

  const handleClickTextStrikeTroughHover = () => {
    if (activeTextLineStriketrough === false) { setBtnStyleTextLineStriketrough({ backgroundColor: "#6489ef" }) }
  }
  
  const handleClickTextStrikeTroughNotHover = () => {
    if (activeTextLineStriketrough === false) {setBtnStyleTextLineStriketrough({ backgroundColor: "#3f51b5" })}
  }

  const handleClickTextStrikeTrough = () => {
    const svgIcon = document.getElementById('svg_icon_text_striketrough') as HTMLImageElement;
    if (activeTextLineStriketrough === false) {
      activeTextLineStriketrough = true;
      setBtnStyleTextLineStriketrough({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/text_striketrough_active.svg');
    } else {
      activeTextLineStriketrough = false;
      setBtnStyleTextLineStriketrough({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/text_striketrough.svg');
    } 
  };

  const handleClickImageHover = () => {
    if (activeImage === false) { setBtnStyleImage({ backgroundColor: "#6489ef" }) }
  }
  
  const handleClickImageNotHover = () => {
    if (activeImage === false) {setBtnStyleImage({ backgroundColor: "#3f51b5" })}
  }

  const handleClickImage = () => {
    active = "Image";
    handleOffClick();
    const svgIcon = document.getElementById('svg_icon_image') as HTMLImageElement;
    if (activeImage === false) {
      activeImage = true;
      setBtnStyleImage({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/photo.svg');
    } else {
      activeImage = false;
      setBtnStyleImage({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/photo2.svg');
    } 
  };

  const handleClickTriangleHover = () => {
    if (activeObjTriangle === false) { setBtnStyleTriangle({ backgroundColor: "#6489ef" }) }
  }

  const handleClickTriangleNotHover = () => {
    if (activeObjTriangle === false) {setBtnStyleTriangle({ backgroundColor: "#3f51b5" })}
  }

  const handleClickObjTriangle = () => {
    active = "Triangle";
    handleOffClick();
    const svgIcon = document.getElementById('svg_icon_triangle') as HTMLImageElement;
    if (activeObjTriangle === false) {
      activeObjTriangle = true;
      setBtnStyleTriangle({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/triangle_active.svg');
    } else {
      activeObjTriangle = false;
      setBtnStyleTriangle({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/triangle.svg');
    }
  }

  const handleClickSquareHover = () => {
    if (activeObjSquare === false) { setBtnStyleSquare({ backgroundColor: "#6489ef" }) }
  }

  const handleClickSquareNotHover = () => {
    if (activeObjSquare === false) {setBtnStyleSquare({ backgroundColor: "#3f51b5" })}
  }

  const handleClickObjSquare = () => {
    active = "Square";
    handleOffClick();
    const svgIcon = document.getElementById('svg_icon_square') as HTMLImageElement;
    if (activeObjSquare === false) {
      activeObjSquare = true;
      setBtnStyleSquare({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/square_active.svg');
    } else {
      activeObjSquare = false;
      setBtnStyleSquare({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/square.svg');
    }
  }

  const handleClickCircleHover = () => {
    if (activeObjCircle === false) { setBtnStyleCircle({ backgroundColor: "#6489ef" }) }
  }

  const handleClickCircleNotHover = () => {
    if (activeObjCircle === false) {setBtnStyleCircle({ backgroundColor: "#3f51b5" })}
  }

  const handleClickObjCircle = () => {
    active = "Circle";
    handleOffClick();
    const svgIcon = document.getElementById('svg_icon_circle') as HTMLImageElement;
    if (activeObjCircle === false) {
      activeObjCircle = true;
      setBtnStyleCircle({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/circle_active.svg');
    } else {
      activeObjCircle = false;
      setBtnStyleCircle({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/circle.svg');
    }
  }

  const handleClickStrokeHover = () => {
    if (activeObjStroke === false) { setBtnStyleStroke({ backgroundColor: "#6489ef" }) }
  }

  const handleClickStrokeNotHover = () => {
    if (activeObjStroke === false) {setBtnStyleStroke({ backgroundColor: "#3f51b5" })}
  }

  const handleClickObjStroke = () => {
    const svgIcon = document.getElementById('svg_icon_stroke') as HTMLImageElement;
    if (activeObjStroke === false) {
      activeObjStroke = true;
      setBtnStyleStroke({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/stroke_active.svg');
    } else {
      activeObjStroke = false;
      setBtnStyleStroke({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/stroke.svg');
    }
  }

  const handleClickFillHover = () => {
    if (activeObjFill === false) { setBtnStyleFill({ backgroundColor: "#6489ef" }) }
  }

  const handleClickFillNotHover = () => {
    if (activeObjFill === false) {setBtnStyleFill({ backgroundColor: "#3f51b5" })}
  }

  const handleClickObjFill = () => {
    const svgIcon = document.getElementById('svg_icon_fill') as HTMLImageElement;
    if (activeObjFill === false) {
      activeObjFill = true;
      setBtnStyleFill({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/fill_active.svg');
    } else {
      activeObjFill = false;
      setBtnStyleFill({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/fill.svg');
    }
  }

  const handleClickFillStrokeHover = () => {
    if (activeObjFillStroke === false) { setBtnStyleFillStroke({ backgroundColor: "#6489ef" }) }
  }

  const handleClickFillStrokeNotHover = () => {
    if (activeObjFillStroke === false) {setBtnStyleFillStroke({ backgroundColor: "#3f51b5" })}
  }

  const handleClickObjFillStroke = () => {
    const svgIcon = document.getElementById('svg_icon_fill_stroke') as HTMLImageElement;
    if (activeObjFillStroke === false) {
      activeObjFillStroke = true;
      setBtnStyleFillStroke({ backgroundColor: "#ffffff" })
      svgIcon.setAttribute('src', '/images/fill_stroke_active.svg');
    } else {
      activeObjFillStroke = false;
      setBtnStyleFillStroke({ backgroundColor: "#3f51b5" })
      svgIcon.setAttribute('src', '/images/fill_stroke.svg');
    }
  }

  const handleClickColorBlack = () => { if (typeColor) { activeColor = "rgb(0, 0, 0)"}
                                        else { activeColorBorder = "rgb(0, 0, 0)" } };
  const handleClickColorWhite = () => { if (typeColor) { activeColor = "rgb(255, 255, 255)" } 
                                        else { activeColorBorder = "rgb(255, 255, 255)" } };
  const handleClickColorBlue = () => { if (typeColor) { activeColor = "rgb(36, 123, 255)"} 
                                       else { activeColorBorder = "rgb(36, 123, 255)" } };
  const handleClickColorRed = () => { if (typeColor) { activeColor = "rgb(255, 0, 0)" } 
                                      else { activeColorBorder = "rgb(255, 0, 0)" } };
  const handleClickColorGreen = () => { if (typeColor) { activeColor = "rgb(0, 255, 26)" } 
                                        else { activeColorBorder = "rgb(0, 255, 26)" } };


  return (
    <>
    <div className="flex_block settings-block" id="setBar">
      <button onClick={closeOrOpen} id="deleteButton" className="button btn-close"><img src="/images/krest.svg" alt="Icon" width="16px" height="16px" /></button>
      <span className="divider"></span>
      <button className="text svg_btn" onMouseEnter={handleClickPenHover} onMouseLeave={handleClickPenNotHover} onClick={handleClickPen} style={btnStylePen}><img id="svg_icon_pen" src="/images/pencil.svg" alt="Icon" width="15" height="15" /></button>
      <span className="divider"></span>
      <div className="flex_block">
        <button className="text svg_btn" onMouseEnter={handleClickTextHover} onMouseLeave={handleClickTextNotHover} onClick={handleClickText} style={btnStyleText}><img id="svg_icon_text" src="/images/text2.svg" alt="Icon" width="17" height="17" /></button>
        <button className="text svg_btn" onMouseEnter={handleClickImageHover} onMouseLeave={handleClickImageNotHover} onClick={handleClickImage} style={btnStyleImage}><img id="svg_icon_image" src="/images/photo2.svg" alt="Icon" width="19" height="19" /></button>
      </div>
      <span className="divider"></span>
      <div className="flex_block">
        <button className="text svg_btn" onMouseEnter={handleClickTriangleHover} onMouseLeave={handleClickTriangleNotHover} onClick={() => {handleClickObjTriangle(); obj = "triangle"}} style={btnStyleTriangle}><img id="svg_icon_triangle" src="/images/triangle.svg" alt="Icon" width="15" height="15" /></button>
        <button className="text svg_btn" onMouseEnter={handleClickSquareHover} onMouseLeave={handleClickSquareNotHover} onClick={() => {handleClickObjSquare(); obj = "square" }} style={btnStyleSquare}><img id="svg_icon_square" src="/images/square.svg" alt="Icon" width="15" height="15" /></button>
        <button className="text svg_btn" onMouseEnter={handleClickCircleHover} onMouseLeave={handleClickCircleNotHover} onClick={() => {handleClickObjCircle(); obj = "circle" }} style={btnStyleCircle}><img id="svg_icon_circle" src="/images/circle.svg" alt="Icon" width="15" height="15" /></button>
      </div>
      <span className="divider"></span>
      {activeText && (
        <>
          <button className="text svg_btn" onMouseEnter={SetHandleClickTextHoverTransparent} onMouseLeave={SetHandleClickTextNotHoverTransparent} onClick={SetHandleClickTextTransparent} style={btnStyleTextTransparent}><img id="svg_icon_text_transparent" src={!activeTextTransparent ? "/images/text2.svg" : "/images/text_hover.svg"} alt="Icon" width="17" height="17" /></button>
          <button className="text svg_btn" onMouseEnter={SetHandleClickTextHoverMuddy} onMouseLeave={SetHandleClickTextNotHoverMuddy} onClick={SetHandleClickTextMuddy} style={btnStyleTextMuddy}><img id="svg_icon_text_muddy" src={!activeTextMuddy ? "/images/text3.svg" : "/images/text_hover2.svg"} alt="Icon" width="17" height="17" /></button>
          <span className="divider"></span>
          <button onClick={closeOrOpenFontSizes} id="fontBar" className="flex_block hover">
            <img id="svg_icon_font" src="/images/font1.svg" alt="Icon" width="13" height="13" />
            <span className="fontSize">{activeFont}</span>
            <img id="svg_icon_arrow" src="/images/down_arrow.svg" alt="Icon" width="6" height="6" />
          </button>
          <button onClick={closeOrOpenFontFamilies} id="fontBar" className="lenFont flex_block hover" style={{width: "140px", padding: "5px", fontSize: "10px"}}>
            <img id="svg_icon_font" src="/images/font-family-custom.svg" alt="Icon" width="13" height="13" style={{}}/>
            <span className="fontSize">{activeFontFamily}</span>
            <img id="svg_icon_arrow" src="/images/down_arrow.svg" alt="Icon" width="6" height="6" />
          </button>
          <span className="divider"></span>
          <button className="text svg_btn" onMouseEnter={handleClickTextBoldHover} onMouseLeave={handleClickTextBoldNotHover} onClick={handleClickTextBold} style={btnStyleTextBold}><img id="svg_icon_text_bold" src={!activeTextBold ? "/images/text_bold.svg" : "/images/text_bold_active.svg"} alt="Icon" width="17" height="17" /></button>
          <button className="text svg_btn" onMouseEnter={handleClickTextItalicHover} onMouseLeave={handleClickTextItalicNotHover} onClick={handleClickTextItalic} style={btnStyleTextItalic}><img id="svg_icon_text_italic" src={!activeTextItalic ? "/images/text_italic.svg" : "/images/text_italic_active.svg"} alt="Icon" width="17" height="17" /></button>
          <button className="text svg_btn" onMouseEnter={handleClickTextUnderLineHover} onMouseLeave={handleClickTextUnderLineNotHover} onClick={handleClickTextUnderLine} style={btnStyleTextUnderLine}><img id="svg_icon_text_underline" src={!activeTextUnderLine ? "/images/text_underline.svg" : "/images/text_underline_active.svg"} alt="Icon" width="17" height="17" /></button>
          <button className="text svg_btn" onMouseEnter={handleClickTextStrikeTroughHover} onMouseLeave={handleClickTextStrikeTroughNotHover} onClick={handleClickTextStrikeTrough} style={btnStyleTextLineStriketrough}><img id="svg_icon_text_striketrough" src={!activeTextLineStriketrough ? "/images/text_striketrough.svg" : "/images/text_striketrough_active.svg"} alt="Icon" width="17" height="17" /></button>
          <span className="divider"></span>
        </>
      )}
      {(activeObjTriangle || activeObjSquare || activeObjCircle) && (
        <>
          <button className="text svg_btn" onMouseEnter={handleClickStrokeHover} onMouseLeave={handleClickStrokeNotHover} onClick={() => { if(activeObjFill) handleClickObjFill(); if(activeObjFillStroke) handleClickObjFillStroke();  handleClickObjStroke()}} style={btnStyleStroke}><img id="svg_icon_stroke" src={!activeObjStroke ? "/images/stroke.svg" : "/images/stroke_active.svg"} alt="Icon" width="15" height="15" /></button>
          <button className="text svg_btn" onMouseEnter={handleClickFillHover} onMouseLeave={handleClickFillNotHover} onClick={() => { if(activeObjStroke) handleClickObjStroke(); if(activeObjFillStroke) handleClickObjFillStroke();  handleClickObjFill()}} style={btnStyleFill}><img id="svg_icon_fill" src={!activeObjFill ? "/images/fill.svg" : "/images/fill_active.svg"} alt="Icon" width="15" height="15" /></button>
          <button className="text svg_btn" onMouseEnter={handleClickFillStrokeHover} onMouseLeave={handleClickFillStrokeNotHover} onClick={() => { if(activeObjFill) handleClickObjFill(); if(activeObjStroke) handleClickObjStroke();  handleClickObjFillStroke()}} style={btnStyleFillStroke}><img id="svg_icon_fill_stroke" src={!activeObjFillStroke ? "/images/fill_stroke.svg" : "/images/fill_stroke_active.svg"} alt="Icon" width="15" height="15" /></button>
          <span className="divider"></span>
        </>
      )}
      <div className="flex_block">
        <button id="active-color" onClick={closeOrOpenColors} style={{ backgroundColor: `${activeColor}`, border: `5px solid ${activeColorBorder}`}}></button>
        <button onClick={() => {if(typeColor) {setTypeColor(false)} else {setTypeColor(true)}}} style={{ paddingRight: "1px", marginRight: "-5px", marginLeft: "-10px"}} className="color-button hover"><img id="svg_icon_color" src="/images/refresh.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={handleClickColorBlack} className="color-button hover"><img id="svg_icon_color" src="/images/black.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={handleClickColorWhite} className="color-button hover"><img id="svg_icon_color" src="/images/white.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={handleClickColorBlue} className="color-button hover"><img id="svg_icon_color" src="/images/blue.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={handleClickColorRed} className="color-button hover"><img id="svg_icon_color" src="/images/red.svg" alt="Icon" width="18" height="18" /></button>
        <button onClick={handleClickColorGreen} className="color-button hover"><img id="svg_icon_color" src="/images/green.svg" alt="Icon" width="18" height="18" /></button>
      </div>
    </div>
    {isFontSizesOpen && (
      <PopupFonts close={closeOrOpenFontSizes}/>
    )}
    {isFontFamiliesOpen && (
      <PopupFontFamily close={closeOrOpenFontFamilies}/>
    )}
    {isCleaneerOpen && (
      <PopupClean close={closeOrOpen} />
    )}
    {isColorsOpen && (
      <PopupColors close={closeOrOpenColors} />
    )}
    </>
  );
}

export function setactiveText(): boolean { return activeText; }
export function setactiveTextTransparent(): boolean { if (activeTextTransparent) return true; else return false}
export function setactiveImage(): boolean { return activeImage; }
export function setactivePen(): boolean { return activePen; }
export function setactiveObjTriangle(): boolean { return activeObjTriangle; }
export function setactiveObSquare(): boolean { return activeObjSquare; }
export function setactiveObjCircle(): boolean { return activeObjCircle; }
export function setactiveObj(): string { if(activeObjStroke) return "stroke"; else if(activeObjFill) return "fill"; else return "fill_stroke" }
export function setObj(): string { return obj; }
export function setactiveColor(): string { return activeColor; }
export function setactiveBorderColor(): string { return activeColorBorder; }
export function setOpenCleaner(): boolean { return openCleaner; }
export function setOpenColors(): boolean { return openColors; }
export function setIsOpenFonts(): boolean { return openFonts; }
export function setactiveFont(): number { return activeFont; }
export function setFont(newFont: number) { activeFont = newFont }
export function setIsOpenFontFamilies(): boolean { return openFontFamilies; }
export function setactiveFontFamilies(): string { return activeFontFamily; }
export function setFontFamily(newFont: string) { activeFontFamily = newFont }
export function setActiveColor(newColor:string) { activeColor = newColor }
export function setActiveColorBack(newColor:string) { activeColorBorder = newColor }
export function setTextBold():string { if (activeTextBold) { return "bold" } else { return "normal" } }
export function setTextItalic():string { if (activeTextItalic) { return "italic" } else { return "none" } }
export function setTextUnderline():string { if (activeTextUnderLine) { return "underline" } else { return "" } }
export function setTextStriketrough():string { if (activeTextLineStriketrough) { return "line-through" } else { return "" } }
