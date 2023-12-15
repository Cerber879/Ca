import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxStore";
import { objFillStatusProcessing } from "../ObjectDecoration/ObjectStrokeAndFill/fillStatus/fillStatusProcessing";
import { objStrokeFillStatusProcessing } from "../ObjectDecoration/ObjectStrokeAndFill/strokeAndFillStatus/strokeFillStatusProcessing";
import { objStrokeStatusProcessing } from "../ObjectDecoration/ObjectStrokeAndFill/strokeStatus/strokeStatusProcessing";


export function ActiveObject() {

    const useAppDispatch = () => useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    const objFillSettSlice = useSelector((state: RootState) => state.objFillSettSlice);
    const objStrokeSettSlice = useSelector((state: RootState) => state.objStrokeSettSlice);
    const objStrokeFillSettSlice = useSelector((state: RootState) => state.objStrokeFillSettSlice);

    const offFill = () => {
        objFillStatusProcessing("objFillClick", dispatch, objFillSettSlice.activeObjFill, "svg_icon_fill");
    }
    const offStroke = () => {
        objStrokeStatusProcessing("objStrokeClick", dispatch, objStrokeSettSlice.activeObjStroke, "svg_icon_stroke");
    }
    const offStrFill = () => {
        objStrokeFillStatusProcessing("objStrokeFillClick", dispatch, objStrokeFillSettSlice.activeObjStrokeFill, "svg_icon_fill_stroke");
    }

    return (
        <>
          <button className="text svg_btn" 
            onMouseEnter={() => objStrokeStatusProcessing("objStrokeHover", dispatch, objStrokeSettSlice.activeObjStroke, "svg_icon_stroke")} 
            onMouseLeave={() => objStrokeStatusProcessing("objStrokeNotHover", dispatch, objStrokeSettSlice.activeObjStroke, "svg_icon_stroke")} 
            onClick={() => { if (objFillSettSlice.activeObjFill) offFill(); if (objStrokeFillSettSlice.activeObjStrokeFill) offStrFill(); 
              objStrokeStatusProcessing("objStrokeClick", dispatch, objStrokeSettSlice.activeObjStroke, "svg_icon_stroke"); }} 
            style={objStrokeSettSlice.btnStyleStroke}>
              <img id="svg_icon_stroke" src={!objStrokeSettSlice.activeObjStroke ? "/images/stroke.svg" : "/images/stroke_active.svg"} 
                alt="Icon" width="15" height="15" />
          </button>
          <button className="text svg_btn" 
            onMouseEnter={() => objFillStatusProcessing("objFillHover", dispatch, objFillSettSlice.activeObjFill, "svg_icon_fill")} 
            onMouseLeave={() => objFillStatusProcessing("objFillNotHover", dispatch, objFillSettSlice.activeObjFill, "svg_icon_fill")} 
            onClick={() => { if (objStrokeSettSlice.activeObjStroke) offStroke(); if (objStrokeFillSettSlice.activeObjStrokeFill) offStrFill(); 
              objFillStatusProcessing("objFillClick", dispatch, objFillSettSlice.activeObjFill, "svg_icon_fill"); }} 
            style={objFillSettSlice.btnStyleFill}>
              <img id="svg_icon_fill" src={!objFillSettSlice.activeObjFill ? "/images/fill.svg" : "/images/fill_active.svg"} 
              alt="Icon" width="15" height="15" />
          </button>
          <button className="text svg_btn" 
            onMouseEnter={() => objStrokeFillStatusProcessing("objStrokeFillHover", dispatch, objStrokeFillSettSlice.activeObjStrokeFill, "svg_icon_fill_stroke")} 
            onMouseLeave={() => objStrokeFillStatusProcessing("objStrokeFillNotHover", dispatch, objStrokeFillSettSlice.activeObjStrokeFill, "svg_icon_fill_stroke")} 
            onClick={() => { if (objFillSettSlice.activeObjFill) offFill(); if (objStrokeSettSlice.activeObjStroke) offStroke(); 
              objStrokeFillStatusProcessing("objStrokeFillClick", dispatch, objStrokeFillSettSlice.activeObjStrokeFill, "svg_icon_fill_stroke"); }} 
            style={objStrokeFillSettSlice.btnStyleStrokeFill}>
              <img id="svg_icon_fill_stroke" src={!objStrokeFillSettSlice.activeObjStrokeFill ? "/images/fill_stroke.svg" : "/images/fill_stroke_active.svg"} 
              alt="Icon" width="15" height="15" />
          </button>
          <span className="divider"></span>
        </>
    )
}