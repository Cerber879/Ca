import React, { useState } from "react";
import styles from "../popup.module.css";
import conservation from "./conservation.module.css";

import { SaveCard } from "../../viewButtonsActionCanvas/SaveCard/SaveCard";

type PopupProps = {
  close: () => void;
};

export function PopupConservation({ close }: PopupProps) {
  const [nameCard, setNameCard] = useState("snapshot");
  const [formatCard, setFormatCard] = useState("jpeg");

  const popupStyle = "block";
  const overlayStyle = "block";

  function closePopup() {
    close();
  }

  function saveCard() {
    closePopup();
    SaveCard(nameCard, formatCard);
  }

  return (
    <>
      <div style={{ display: overlayStyle }} className={styles.overlay}></div>
      <div style={{ display: popupStyle, width: "200px", height: "185px" }} className={styles.popup}>
        <div>
          <div
            style={{ justifyContent: "center" }}
            className={styles.flex_block}
          >
            <span className={styles.resizeText}>Save card</span>
            <button
              className={`${styles.button} ${styles.btnClose}`}
              onClick={closePopup}
            >
              x
            </button>
          </div>
          <div className={styles.flex_block}>
            <p className={conservation.name}>Name:</p>
            <input
              className={conservation.inputName}
              value={nameCard}
              onChange={(e) => setNameCard(e.target.value)}
            />
          </div>
          <div className={styles.flex_block}>
            <button
              className={conservation.buttonFormat}
              onClick={() => setFormatCard("jpeg")}
              style={ formatCard === "jpeg" ?
                { backgroundColor: "rgb(70, 128, 255)", color: "rgb(255, 255, 255)" } :
                { backgroundColor: "rgb(187, 195, 236)", color: "rgb(70, 128, 255)" }
              }
            >
              jpeg
            </button>
            <button
              className={conservation.buttonFormat}
              onClick={() => setFormatCard("png")}
              style={ formatCard === "png" ?
                { backgroundColor: "rgb(70, 128, 255)", color: "rgb(255, 255, 255)" } :
                { backgroundColor: "rgb(187, 195, 236)", color: "rgb(70, 128, 255)" }
              }
            >
              png
            </button>
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
              onClick={saveCard}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
