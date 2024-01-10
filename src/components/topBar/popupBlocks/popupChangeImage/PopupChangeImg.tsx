import React from "react";
import styles from "../popup.module.css";

import { useDispatch, useSelector } from "react-redux";
import { setSize } from "../../../../reducers/canvas/fontCanvas";
import { RootState } from "../../../../ReduxStore";
import { setObjectBlocks } from "../../../canvas/createBlock/appSlice";
import { ObjectList } from "../../../../modules/types";
import { setHistory } from "../../../canvas/history/historySettings";

type PopupProps = {
  close: () => void;
};

export function PopupChangeImg({ close }: PopupProps) {
  const dispatch = useDispatch();

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);

  const popupStyle = "block";
  const overlayStyle = "block";

  function closePopup() {
    close();
  }

  function getSelected() {
    const selectedOption = document.querySelector('input[name="changeImg"]:checked') as HTMLInputElement;
    if (selectedOption) {
      const selectedValue = selectedOption.value;
      if (selectedValue === "expand canvas") {
        const image = objectBlocks[objectBlocks.length - 1];
        dispatch(setSize(image.width, image.height));
        if (objectBlocks) {
          const updatedObjectBlocks = objectBlocks.map((objBlock) => {
            if (objBlock.id === objectBlocks.length) {
              return {
                ...objBlock,
                position: { x: 0, y: 0 },
              };
            }
            return objBlock;
          });
          dispatch(setObjectBlocks([...updatedObjectBlocks]));
        }
      }
      else if (selectedValue === "reduce image") {
        if(objectBlocks) {
          const updatedObjectBlocks = objectBlocks.map((objBlock) => {
            if (objBlock.id === objectBlocks.length) {

              const imgAspectRatio = objBlock.width / objBlock.height;
              let newImgWidth, newImgHeight;
              if (objBlock.width > objBlock.height) {
                newImgWidth = fontCanvas.width;
                newImgHeight = newImgWidth / imgAspectRatio;
              } else {
                newImgHeight = fontCanvas.height;
                newImgWidth = newImgHeight * imgAspectRatio;
              }

              return {
                ...objBlock,
                position: { x: 0, y: 0 },
                width: newImgWidth,
                height: newImgHeight,
              };
            }
            return objBlock;
          });
          dispatch(setObjectBlocks([...updatedObjectBlocks]));
        }
      }
      else if (selectedValue === "cancel insert") {
        if (objectBlocks) {
          const updatedObjectBlocks = objectBlocks.map((objBlock, index) => {
            if (index === objectBlocks.length - 1) {
              return null;
            }
            return objBlock;
          }).filter(Boolean) as ObjectList;
          dispatch(setObjectBlocks([...updatedObjectBlocks]));
          history.pop();
          dispatch(setHistory([...history]));
        }
      }
    }
  }

  function ChangeImage() {
    getSelected();
    closePopup();
  }

  return (
    <>
      <div style={{ display: overlayStyle }} className={styles.overlay}></div>
      <div style={{ display: popupStyle, width: "360px", height: "200px" }} className={styles.popup}>
        <div>
          <div
            style={{ justifyContent: "center" }}
            className={styles.flex_block}
          >
            <span className={styles.resizeText}>Change Image</span>
            <button
              className={`${styles.button} ${styles.btnClose}`}
              onClick={closePopup}
            >
              x
            </button>
          </div>
          <form style={{ marginTop: 20 }}>
            <label>
              <input type="radio" name="changeImg" value="expand canvas" />
              Expand the canvas to the size of the picture
            </label>
            <label>
              <input type="radio" name="changeImg" value="reduce image" />
              Reduce the image to the size of the canvas
            </label>
            <label>
              <input type="radio" name="changeImg" value="cancel insert" />
              Canceling the image insertion
            </label>
          </form>
          <div className={`${styles.flex_block} ${styles.menuPopup}`}>
            <button
              className={styles.button}
              style={{ backgroundColor: "#b53f3f" }}
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              className={styles.button}
              style={{ backgroundColor: "#3e67d7" }}
              onClick={ChangeImage}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
