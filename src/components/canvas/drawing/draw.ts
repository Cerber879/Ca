import { AnyAction, Dispatch } from "redux";
<<<<<<< HEAD
import { setCTX, setDrawing, setLastX, setLastY } from "./drawSettings";

export const startDrawing = (
  dispatch: Dispatch<AnyAction>,
  isActivePen: boolean,
  e: { offsetX: number; offsetY: number },
  lastX: number,
  lastY: number
) => {
  if (!isActivePen) return;
  dispatch(setDrawing(true));
  dispatch(setLastX(e.offsetX));
  dispatch(setLastY(e.offsetY));
};

export const draw = (
  dispatch: Dispatch<AnyAction>,
  ctx: CanvasRenderingContext2D | null,
  isDrawing: boolean,
  e: { offsetX: number; offsetY: number },
  lastX: number,
  lastY: number,
  elStyle: { activeColor: string }
) => {
  if (!isDrawing) return;
  if (ctx === null) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetX);
  ctx.stroke();
  ctx.strokeStyle = elStyle.activeColor;

  dispatch(setLastX(e.offsetX));
  dispatch(setLastY(e.offsetY));
  dispatch(setCTX(ctx));
};

export const stopDrawing = (dispatch: Dispatch<AnyAction>) => {
  dispatch(setDrawing(false));
};

export function saveDrawing(
  ctx: CanvasRenderingContext2D | null,
  canvasBlock: HTMLCanvasElement
) {
  if (ctx === null) return;

  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
=======
import { setCTX, setDrawing, setLastX, setLastY } from "./drawSettings"

export const startDrawing = (dispatch: Dispatch<AnyAction>, isActivePen: boolean, e: { offsetX: number; offsetY: number; }, lastX: number, lastY: number) => {
    if (!isActivePen) return;
    dispatch(setDrawing(true));
    dispatch(setLastX(e.offsetX));
    dispatch(setLastY(e.offsetY));
  };
  
export const draw = (dispatch: Dispatch<AnyAction>, ctx: CanvasRenderingContext2D | null, isDrawing: boolean, e: { offsetX: number; offsetY: number; }, lastX: number, lastY: number, elStyle: { activeColor: string; }) => {
    if (!isDrawing) return;
    if (ctx === null) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetX);
    ctx.stroke();
    ctx.strokeStyle = elStyle.activeColor;
  
    dispatch(setLastX(e.offsetX));
    dispatch(setLastY(e.offsetY));
    dispatch(setCTX(ctx))
};
  
export const stopDrawing = (dispatch: Dispatch<AnyAction>) => {
    dispatch(setDrawing(false));
};

export function saveDrawing(ctx: CanvasRenderingContext2D | null, canvasBlock: HTMLCanvasElement) {
  if (ctx === null) return;

  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
  tempCanvas.width = canvasBlock.width;
  tempCanvas.height = canvasBlock.height;
  tempCtx?.drawImage(canvasBlock, 0, 0);

  return tempCanvas;
}

<<<<<<< HEAD
export const clearCanvas = (
  ctx: CanvasRenderingContext2D | null,
  // eslint-disable-next-line no-undef
  canvasRef: React.RefObject<HTMLCanvasElement>
) => {
  if (ctx === null || canvasRef.current === null) return;

  const canvas = canvasRef.current;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
=======
export const clearCanvas = (ctx: CanvasRenderingContext2D | null, canvasRef: React.RefObject<HTMLCanvasElement>) => {
    if (ctx === null || canvasRef.current === null) return;
  
    const canvas = canvasRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  
>>>>>>> 1f6e83e1e21e19c58527c77695a6b65e6ccadfb5
