import { useEffect } from "react";
import { setOpenCleaner } from "./SetCanvas"

type PopupProps = {
  close: () => void;
};

let deleteData = "";

export const deleteDisActive = () => {
  deleteData = "";
}

export function PopupClean({ close }: PopupProps) {

  useEffect(() => {
    if(setOpenCleaner()) {
      const overlay = document.getElementById("overlay") as HTMLDivElement;
      const popup = document.getElementById("popup") as HTMLDivElement;
      overlay.style.display = "block";
      popup.style.display = "block";
    };
  }, [])
  
  function closePopup() {
    close();
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  function CleanCanvas() {
    getSelected();
    closePopup();
  }

  function getSelected() {
    const selectedOption = document.querySelector('input[name="clear"]:checked') as HTMLInputElement; 
    if (selectedOption) {
      const selectedValue = selectedOption.value; 
      deleteData = selectedValue
    } else {
      deleteData = ""
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

export function getDeleteData() {
  return deleteData;
}