const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(100, 100);
const ctx = canvas.getContext('2d');
const PDF417 = require("pdf417-generator");

const barcodeCreator = value => {
  PDF417.draw(value, canvas);
  return canvas;
}

module.exports = barcodeCreator;