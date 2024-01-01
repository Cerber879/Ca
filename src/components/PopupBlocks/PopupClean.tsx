<<<<<<< HEAD
import React, { useEffect } from "react";
import styles from "../../index.module.css";
=======
import { useEffect } from "react";
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../ReduxStore";

<<<<<<< HEAD
import { setDeleteData } from "../../reducers/canvas/deleteDataSlice";
=======
import { clearDeleteData, setDeleteData } from "../../reducers/canvas/deleteDataSlice";
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5

type PopupProps = {
  close: () => void;
};

export function PopupClean({ close }: PopupProps) {
<<<<<<< HEAD
=======

>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "block";
    popup.style.display = "block";
<<<<<<< HEAD
  }, []);

=======
  }, [])
  
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  function closePopup() {
    close();
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

<<<<<<< HEAD
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

=======
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  function CleanCanvas() {
    getSelected();
    closePopup();
  }

<<<<<<< HEAD
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
=======
  function getSelected() {
    const selectedOption = document.querySelector('input[name="clear"]:checked') as HTMLInputElement; 
    if (selectedOption) {
      const selectedValue = selectedOption.value; 
      dispatch(setDeleteData(selectedValue));
    } else {
      dispatch(clearDeleteData());
    }
  }

  return (
    <>
    <div id="overlay" className="overlay"></div>
    <div id="popup" className="popup" style={{ width: "220px", height: "255px" }}>
      <div>
        <div style={{justifyContent: "center"}} className="flex_block headerPopup">
          <span className="resizeText">Clear entire drawing?</span>
          <button id="closeButton" className="button btn-close" onClick={closePopup}>
            x
          </button>
        </div>
        <form style={{marginTop: 20}}>
          <label><input type="radio" name="clear" value="all"/>all</label>
          <label><input type="radio" name="clear" value="text"/>text</label>
          <label><input type="radio" name="clear" value="image"/>image</label>
          <label><input type="radio" name="clear" value="object"/>object</label>
          <label><input type="radio" name="clear" value="draw"/>draw</label>
        </form>
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
            Clean
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
