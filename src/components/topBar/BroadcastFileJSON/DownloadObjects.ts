import { AnyAction, Dispatch } from "redux";
import { ObjectList } from "../../../modules/types";
import { setObjectBlocks } from "../../canvas/createBlock/appSlice";
import { fontCanvasState, setFilter, setSize } from "../../../reducers/canvas/fontCanvas";
import { setHistory , CanvasState } from "../../canvas/history/historySettings";

export function DownloadFile(dispatch: Dispatch<AnyAction>, objectBlocks: ObjectList, history: CanvasState[], fontCanvas: fontCanvasState) {
  const inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = "application/json"; // Принимаем только JSON-файлы
  inputElement.onchange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const jsonData = reader.result;
        if (jsonData && typeof jsonData === "string") {
          try {
            const parsedData = JSON.parse(jsonData);
            dispatch(setObjectBlocks(parsedData.objectBlocks));
            dispatch(setSize(parsedData.width, parsedData.height));
            dispatch(setFilter(parsedData.filter, parsedData.opacity));
            const elHistory: CanvasState = {
              objects: objectBlocks,
              size: { width: fontCanvas.width, height: fontCanvas.height },
              font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity }
            };
            dispatch(setHistory([...history, elHistory]));
          } catch (error) {
            console.error("Ошибка в формате JSON:", error);
          }
        }
      };
      reader.readAsText(file);
    }
  };
  inputElement.click();
}
