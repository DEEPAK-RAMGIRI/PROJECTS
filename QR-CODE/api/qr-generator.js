import qr from "qr-image";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    const qr_png = qr.imageSync(url, { type: "png" });
    const base64QR = `data:image/png;base64,${qr_png.toString("base64")}`;

    res.status(200).json({ qrPath: base64QR });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate QR" });
  }
}
