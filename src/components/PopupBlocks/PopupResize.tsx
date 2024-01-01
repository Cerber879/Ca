<<<<<<< HEAD
import React, { Dispatch, useEffect, useState } from "react";
import styles from "../../index.module.css";
import { setSize } from "../../reducers/canvas/fontCanvas";
import { AnyAction } from "redux";
=======
import { useEffect, useState } from "react";
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

type PopupProps = {
  width: number;
  height: number;
  close: () => void;
<<<<<<< HEAD
  dispatch: Dispatch<AnyAction>,
};

export function PopupResize({ width, height, dispatch, close }: PopupProps) {
=======
  onResize: (newWidth: number, newHeight: number) => void;
};

export function PopupResize({ width, height, close, onResize }: PopupProps) {
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  const [inputWidth, setInputWidth] = useState(String(width));
  const [inputHeight, setInputHeight] = useState(String(height));

  useEffect(() => {
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "block";
    popup.style.display = "block";
<<<<<<< HEAD
  }, []);

=======
  },[])
  
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  function closePopup() {
    close();
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  function resizeCanvas() {
    close();
    closePopup();
    const newWidth = parseInt(inputWidth);
    const newHeight = parseInt(inputHeight);
<<<<<<< HEAD
    dispatch(setSize(newWidth, newHeight));
=======
    onResize(newWidth, newHeight);
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  }

  return (
    <>
<<<<<<< HEAD
      <div id="overlay" className={styles.overlay}></div>
      <div id="popup" className={styles.popup}>
        <div className={styles.popupContent}>
          <div className={`${styles.flex_block} ${styles.headerPopup}`}>
            <span className={styles.resizeText}>Resize</span>
            <button
              className={`${styles.button} ${styles.btnClose}`}
              onClick={closePopup}
            >
              x
            </button>
          </div>
          <div>
            <label>Width:</label>
            <input
              value={inputWidth}
              onChange={(e) => setInputWidth(e.target.value)}
            />
            <label>Height:</label>
            <input
              value={inputHeight}
              onChange={(e) => setInputHeight(e.target.value)}
            />
          </div>
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
              onClick={resizeCanvas}
            >
              Resize
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
=======
    <div id="overlay" className="overlay"></div>
    <div id="popup" className="popup">
      <div className="popup-content">
        <div className="flex_block headerPopup">
          <span className="resizeText">Resize</span>
          <button id="closeButton" className="button btn-close" onClick={closePopup}>
            x
          </button>
        </div>
        <div>
          <label htmlFor="widthInput">Width:</label>
          <input
            id="widthInput"
            type="text"
            className="widthInput"
            value={inputWidth}
            onChange={(e) => setInputWidth(e.target.value)} />
          <label htmlFor="heightInput">Height:</label>
          <input
            id="heightInput"
            type="text"
            className="heightInput"
            value={inputHeight}
            onChange={(e) => setInputHeight(e.target.value)} />
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
            onClick={resizeCanvas}
          >
            Resize
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
