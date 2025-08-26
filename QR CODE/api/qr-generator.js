import qr from "qr-image";
import fs from "fs";
import path from "path";

export default function generateQR(url) {
  const qr_png = qr.image(url, { type: "png" });
  const filePath = path.join("public", "qr-image.png");
  return qr_png.pipe(fs.createWriteStream(filePath));
}
