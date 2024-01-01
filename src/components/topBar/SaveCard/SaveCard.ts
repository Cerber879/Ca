import html2canvas from 'html2canvas';

export function SaveCard() {
  const container = document.getElementById('container');

  if(container) {
    html2canvas(container).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');

      link.download = 'snapshot.png';

      link.click();
    });
  }
}