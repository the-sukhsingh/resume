import { ResumeData } from "@/types/resume";
import html2canvas from 'html2canvas';

function labToHex(l: number, a: number, b: number) {
  // LAB → XYZ
  const refX = 95.047;
  const refY = 100.0;
  const refZ = 108.883;

  let y = (l + 16) / 116;
  let x = a / 500 + y;
  let z = y - b / 200;

  const transform = (t: number) =>
    t ** 3 > 0.008856 ? t ** 3 : (t - 16 / 116) / 7.787;

  x = refX * transform(x);
  y = refY * transform(y);
  z = refZ * transform(z);

  // XYZ → RGB
  x /= 100;
  y /= 100;
  z /= 100;

  let r =
    x * 3.2406 +
    y * -1.5372 +
    z * -0.4986;

  let g =
    x * -0.9689 +
    y * 1.8758 +
    z * 0.0415;

  let bl =
    x * 0.0557 +
    y * -0.204 +
    z * 1.057;

  const gamma = (c: number) =>
    c > 0.0031308
      ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055
      : 12.92 * c;

  r = Math.min(Math.max(0, gamma(r)), 1);
  g = Math.min(Math.max(0, gamma(g)), 1);
  bl = Math.min(Math.max(0, gamma(bl)), 1);

  // RGB → HEX
  const toHex = (c: number) =>
    Math.round(c * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(bl)}`;
}



export const generatePdf = () => {
  document.querySelectorAll("*").forEach((el) => {
    const htmlEl = el as HTMLElement;
    const style = getComputedStyle(htmlEl);
    if (style.color.includes("lab")) {
      // Handle LAB color conversion
      htmlEl.style.color = labToHex(
        parseFloat(style.color.split("lab")[1].split(",")[0]),
        parseFloat(style.color.split("lab")[1].split(",")[1]),
        parseFloat(style.color.split("lab")[1].split(",")[2])
      );
    }
  });
  const shot = html2canvas(document.getElementById("resume-preview-designer")!).then(function (canvas) {
    document.body.appendChild(canvas);
  });
}