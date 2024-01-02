import React, { useEffect } from "react";
import styles from "../../index.module.css";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../ReduxStore";

import { setDeleteData } from "../../reducers/canvas/deleteDataSlice";

type PopupProps = {
  close: () => void;
};

export function PopupClean({ close }: PopupProps) {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "block";
    popup.style.display = "block";
  }, []);

  function closePopup() {
    close();
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  function getSelected() {
    const selectedOption = document.querySelector(
      'input[name="clear"]:checked'
    ) as HTMLInputElement;
    if (selectedOption) {
      const selectedValue = selectedOption.value;
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
      <div id="overlay" className={styles.overlay}></div>
      <div
        id="popup"
        className={styles.popup}
        style={{ width: "220px", height: "255px" }}
      >
        <div>
          <div
            style={{ justifyContent: "center" }}
            className={`${styles.flex_block} ${styles.headerPopup}`}
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
            <label>
              <input type="radio" name="clear" value="draw" />
              draw
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
