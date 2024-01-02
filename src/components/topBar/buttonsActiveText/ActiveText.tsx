import React from "react";
import styles from "../../../index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../ReduxStore";
import { PopupStatus } from "../../PopupBlocks/PopupStatus";
import { MuddyStatusProcessing } from "../TextDecoration/TextStyle/TextBack/muddyStatus/muddyStatusProcessing";
import { TransparentStatusProcessing } from "../TextDecoration/TextStyle/TextBack/tranparentStatus/trasparentStatusProcessing";
import { TextBoldStatusProcessing } from "../TextDecoration/TextStyle/TextFont/boldStatus/boldStatusProcessing";
import { TextItalicStatusProcessing } from "../TextDecoration/TextStyle/TextFont/italicStatus/italicStatusProcessing";
import { TextStrikeThroughStatusProcessing } from "../TextDecoration/TextStyle/TextFont/strikeThroughStatus/strikeThroughStatusProcessing";
import { TextUnderLineStatusProcessing } from "../TextDecoration/TextStyle/TextFont/underLineStatus/underLineStatusProcessing";

export function ActiveText() {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const popupSLice = useSelector((state: RootState) => state.popupSLice);
  const elStyle = useSelector((state: RootState) => state.styleElements);

  const textTransparentSlice = useSelector(
    (state: RootState) => state.textTransparentSlice
  );
  const textMuddySlice = useSelector(
    (state: RootState) => state.textMuddySlice
  );

  const textBoldSettSlice = useSelector(
    (state: RootState) => state.textBoldSettSlice
  );
  const textItalicSettSlice = useSelector(
    (state: RootState) => state.textItalicSettSlice
  );
  const textUnderLineSettSlice = useSelector(
    (state: RootState) => state.textUnderLineSettSlice
  );
  const textStrikeThroughSettSlice = useSelector(
    (state: RootState) => state.textStrikeThroughSettSlice
  );

  return (
    <>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={() =>
          TransparentStatusProcessing(
            "transparentHover",
            dispatch,
            textMuddySlice.activeTextMuddy,
            textTransparentSlice.activeTextTransparent,
            "svg_icon_text_transparent"
          )
        }
        onMouseLeave={() =>
          TransparentStatusProcessing(
            "transparentNotHover",
            dispatch,
            textMuddySlice.activeTextMuddy,
            textTransparentSlice.activeTextTransparent,
            "svg_icon_text_transparent"
          )
        }
        onClick={() =>
          TransparentStatusProcessing(
            "transparentClick",
            dispatch,
            textMuddySlice.activeTextMuddy,
            textTransparentSlice.activeTextTransparent,
            "svg_icon_text_transparent"
          )
        }
        style={textTransparentSlice.btnStyleTextTransparent}
      >
        <img
          id="svg_icon_text_transparent"
          src={
            !textTransparentSlice.activeTextTransparent
              ? "/images/text2.svg"
              : "/images/text_hover.svg"
          }
          alt="Icon"
          width="17"
          height="17"
        />
      </button>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={() =>
          MuddyStatusProcessing(
            "muddyHover",
            dispatch,
            textMuddySlice.activeTextMuddy,
            textTransparentSlice.activeTextTransparent,
            "svg_icon_text_transparent"
          )
        }
        onMouseLeave={() =>
          MuddyStatusProcessing(
            "muddyNotHover",
            dispatch,
            textMuddySlice.activeTextMuddy,
            textTransparentSlice.activeTextTransparent,
            "svg_icon_text_transparent"
          )
        }
        onClick={() =>
          MuddyStatusProcessing(
            "muddyClick",
            dispatch,
            textMuddySlice.activeTextMuddy,
            textTransparentSlice.activeTextTransparent,
            "svg_icon_text_transparent"
          )
        }
        style={textMuddySlice.btnStyleTextMuddy}
      >
        <img
          id="svg_icon_text_muddy"
          src={
            !textMuddySlice.activeTextMuddy
              ? "/images/text3.svg"
              : "/images/text_hover2.svg"
          }
          alt="Icon"
          width="17"
          height="17"
        />
      </button>
      <span className={styles.divider}></span>
      <button
        onClick={() =>
          PopupStatus("fontSize", dispatch, popupSLice.isFontSizesOpen)
        }
        className={`${styles.flex_block} ${styles.fontBar}`}
      >
        <img
          id="svg_icon_font"
          src="/images/font1.svg"
          alt="Icon"
          width="13"
          height="13"
        />
        <span className={styles.fontSize}>{elStyle.activeFont}</span>
        <img
          id="svg_icon_arrow"
          src="/images/down_arrow.svg"
          alt="Icon"
          width="6"
          height="6"
        />
      </button>
      <button
        onClick={() =>
          PopupStatus("fontFamily", dispatch, popupSLice.isFontFamiliesOpen)
        }
        className={`${styles.flex_block} ${styles.fontBar}`}
        style={{ width: "140px", padding: "5px", fontSize: "10px" }}
      >
        <img
          id="svg_icon_font"
          src="/images/font-family-custom.svg"
          alt="Icon"
          width="13"
          height="13"
        />
        <span className="fontSize">{elStyle.activeFontFamily}</span>
        <img
          id="svg_icon_arrow"
          src="/images/down_arrow.svg"
          alt="Icon"
          width="6"
          height="6"
        />
      </button>
      <span className={styles.divider}></span>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={() =>
          TextBoldStatusProcessing(
            "textBoldHover",
            dispatch,
            textBoldSettSlice.activeTextBold,
            "svg_icon_text_bold"
          )
        }
        onMouseLeave={() =>
          TextBoldStatusProcessing(
            "textBoldNotHover",
            dispatch,
            textBoldSettSlice.activeTextBold,
            "svg_icon_text_bold"
          )
        }
        onClick={() =>
          TextBoldStatusProcessing(
            "textBoldClick",
            dispatch,
            textBoldSettSlice.activeTextBold,
            "svg_icon_text_bold"
          )
        }
        style={textBoldSettSlice.btnStyleTextBold}
      >
        <img
          id="svg_icon_text_bold"
          src={
            !textBoldSettSlice.activeTextBold
              ? "/images/text_bold.svg"
              : "/images/text_bold_active.svg"
          }
          alt="Icon"
          width="17"
          height="17"
        />
      </button>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={() =>
          TextItalicStatusProcessing(
            "textItalicHover",
            dispatch,
            textItalicSettSlice.activeTextItalic,
            "svg_icon_text_italic"
          )
        }
        onMouseLeave={() =>
          TextItalicStatusProcessing(
            "textItalicNotHover",
            dispatch,
            textItalicSettSlice.activeTextItalic,
            "svg_icon_text_italic"
          )
        }
        onClick={() =>
          TextItalicStatusProcessing(
            "textItalicClick",
            dispatch,
            textItalicSettSlice.activeTextItalic,
            "svg_icon_text_italic"
          )
        }
        style={textItalicSettSlice.btnStyleTextItalic}
      >
        <img
          id="svg_icon_text_italic"
          src={
            !textItalicSettSlice.activeTextItalic
              ? "/images/text_italic.svg"
              : "/images/text_italic_active.svg"
          }
          alt="Icon"
          width="17"
          height="17"
        />
      </button>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={() =>
          TextUnderLineStatusProcessing(
            "textUnderLineHover",
            dispatch,
            textUnderLineSettSlice.activeTextUnderLine,
            "svg_icon_text_underline"
          )
        }
        onMouseLeave={() =>
          TextUnderLineStatusProcessing(
            "textUnderLineNotHover",
            dispatch,
            textUnderLineSettSlice.activeTextUnderLine,
            "svg_icon_text_underline"
          )
        }
        onClick={() =>
          TextUnderLineStatusProcessing(
            "textUnderLineClick",
            dispatch,
            textUnderLineSettSlice.activeTextUnderLine,
            "svg_icon_text_underline"
          )
        }
        style={textUnderLineSettSlice.btnStyleTextUnderLine}
      >
        <img
          id="svg_icon_text_underline"
          src={
            !textUnderLineSettSlice.activeTextUnderLine
              ? "/images/text_underline.svg"
              : "/images/text_underline_active.svg"
          }
          alt="Icon"
          width="17"
          height="17"
        />
      </button>
      <button
        className={`${styles.text} ${styles.svg_btn}`}
        onMouseEnter={() =>
          TextStrikeThroughStatusProcessing(
            "textStrikeThroughHover",
            dispatch,
            textStrikeThroughSettSlice.activeTextStrikeThrough,
            "svg_icon_text_strikethrough"
          )
        }
        onMouseLeave={() =>
          TextStrikeThroughStatusProcessing(
            "textStrikeThroughNotHover",
            dispatch,
            textStrikeThroughSettSlice.activeTextStrikeThrough,
            "svg_icon_text_strikethrough"
          )
        }
        onClick={() =>
          TextStrikeThroughStatusProcessing(
            "textStrikeThroughClick",
            dispatch,
            textStrikeThroughSettSlice.activeTextStrikeThrough,
            "svg_icon_text_strikethrough"
          )
        }
        style={textStrikeThroughSettSlice.btnStyleTextStrikeThrough}
      >
        <img
          id="svg_icon_text_strikethrough"
          src={
            !textStrikeThroughSettSlice.activeTextStrikeThrough
              ? "/images/text_strikethrough.svg"
              : "/images/text_strikethrough_active.svg"
          }
          alt="Icon"
          width="17"
          height="17"
        />
      </button>
      <span className={styles.divider}></span>
    </>
  );
}
