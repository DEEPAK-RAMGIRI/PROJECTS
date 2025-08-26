import express from "express";
import bodyParser from "body-parser";
import generateQR from "./api/qr-generator.js";
import path from "path";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/generate-qr", (req, res) => {
  const url = req.body.url;
  if (!url) return res.status(400).json({ error: "URL is required" });

  generateQR(url)
    .on("finish", () => {
      res.json({ qrPath: `/qr-image.png?${Date.now()}` });
    })
    .on("error", () => {
      res.status(500).json({ error: "Failed to generate QR" });
    });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
