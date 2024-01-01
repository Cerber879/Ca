import { AnyAction, Dispatch } from "redux";
import { setObjectBlocks } from "../../canvas/createBlock/appSlice";
import { setSize } from "../../../reducers/canvas/fontCanvas";

export function DownloadFile(dispatch: Dispatch<AnyAction>) {
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
          // Обработка загруженного JSON-файла
          try {
            const parsedData = JSON.parse(jsonData);
            dispatch(setObjectBlocks(parsedData.objectBlocks));
            dispatch(setSize(parsedData.width, parsedData.height));
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
