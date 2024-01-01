import { ObjectList } from "../../../modules/types";

export function SaveToFile(objectBlocks: ObjectList, size: {width: number, height: number}) {
  // Создать объект с массивами данных
  const data = {
    objectBlocks: objectBlocks,
    width: size.width,
    height: size.height,
  };

  // Преобразуй объект в текстовый формат (JSON)
  const dataText = JSON.stringify(data);

  // file setting
  const objects = [dataText]; // Оберни в массив, чтобы Blob мог его принять
  const name = "sample.json";
  const type = "text/plain";

  // create file
  const a = document.createElement("a");
  const file = new Blob(objects, { type: type }); // Передай массив вместо простого объекта
  a.href = URL.createObjectURL(file);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
