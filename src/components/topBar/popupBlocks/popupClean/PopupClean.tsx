import React from "react";
import styles from "../popup.module.css";

import { useDispatch } from "react-redux";

import { setDeleteData } from "../../../../reducers/canvas/deleteDataSlice";

type PopupProps = {
  close: () => void;
};

export function PopupClean({ close }: PopupProps) {
  const dispatch = useDispatch();

  const popupStyle = "block";
  const overlayStyle = "block";

  function closePopup() {
    close();
  }

  function getSelected() {
    const selectedOption = document.querySelector('input[name="clear"]:checked') as HTMLInputElement;
    if (selectedOption) {
      const selectedValue = selectedOption.value;
      console.log(selectedValue);
      dispatch(setDeleteData(selectedValue));
    } else {
      dispatch(setDeleteData(""));
    }
  }

  function CleanCanvas() {
    getSelected();
    closePopup();
  }

  return (
    <>
      <div style={{ display: overlayStyle }} className={styles.overlay}></div>
      <div style={{ display: popupStyle, width: "220px", height: "235px" }} className={styles.popup}>
        <div>
          <div
            style={{ justifyContent: "center" }}
            className={styles.flex_block}
          >
            <span className={styles.resizeText}>Clear entire drawing?</span>
            <button
              className={`${styles.button} ${styles.btnClose}`}
              onClick={closePopup}
            >
              x
            </button>
          </div>
          <form style={{ marginTop: 20 }}>
            <label>
              <input type="radio" name="clear" value="all" />
              all
            </label>
            <label>
              <input type="radio" name="clear" value="text" />
              text
            </label>
            <label>
              <input type="radio" name="clear" value="image" />
              image
            </label>
            <label>
              <input type="radio" name="clear" value="object" />
              object
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
              onClick={CleanCanvas}
            >
              Clean
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
