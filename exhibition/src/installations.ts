import { Circle, Rect } from "./shapes";

const installation1 = {
  shapes: [
    new Circle("c1", "100", "75", "35", "3", "black"),
    new Circle("c2", "70", "55", "15", "3", "blue"),
    new Circle("c3", "30", "105", "25", "3", "red"),
  ],
  title: "Please name me",
  year: 2024,
  artist: "No idea",
};
const installation4 = {
  shapes: [
    new Rect("r1", "100", "100", "100", "100", "green", "yellow"),
    new Rect("r2", "50", "50", "100", "100", "green", "yellow"),
    new Rect("r3", "0", "0", "100", "100", "green", "yellow"),
  ],
  title: "Title",
  year: 1997,
  artist: "Him",
};
export const installations = [installation1, installation4];

export const createShape = (shape: Object): Object => {
  if (shape instanceof Circle) {
    return shape.createCircle();
  }
  if (shape instanceof Rect) {
    return shape.createRect();
  }
  return false;
};
