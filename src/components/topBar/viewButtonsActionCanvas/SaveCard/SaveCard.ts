import html2canvas from "html2canvas";

export function SaveCard(name: string, format: string) {
  const container = document.getElementById("container");

  if (container) {
    html2canvas(container).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL(`image/${format}`);

      link.download = `${name}.${format}`;

      link.click();
    });
  }
}
