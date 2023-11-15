import { useEffect } from "react";
import { setOpenCleaner } from "./SetCanvas"

type PopupProps = {
  close: () => void;
};

let deleteData = false;

export const deleteDisActive = () => {
  deleteData = false;
}

export function PopupClean({ close }: PopupProps) {

  useEffect(() => {
    if(setOpenCleaner()) {
      console.log("open");
      const overlay = document.getElementById("overlay") as HTMLDivElement;
      const popup = document.getElementById("popup") as HTMLDivElement;
      overlay.style.display = "block";
      popup.style.display = "block";
    };
  }, [])
  
  function closePopup() {
    close();
    console.log("close");
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  function CleanCanvas() {
    console.log("clean");
    deleteData = true;
    console.log(deleteData)
    closePopup();
  }

  return (
    <>
    <div id="overlay" className="overlay"></div>
    <div id="popup" className="popup" style={{ width: "220px", height: "85px" }}>
      <div className="popup-content">
        <div style={{justifyContent: "center"}} className="flex_block headerPopup">
          <span className="resizeText">Clear entire drawing?</span>
          <button id="closeButton" className="button btn-close" onClick={closePopup}>
            x
          </button>
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

export function setDeleteData() {
  return deleteData;
}