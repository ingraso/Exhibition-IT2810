import { Circle, Rect, Triangle, Ellipse } from "./shapes";

const installation1 = {
  shapes: [
    new Rect("r1", "0", "0", "350", "350", "#4e4e4e", "#4e4e4e"),
    new Circle("c1", "156", "78", "30", "0", "black", "black"),
    new Circle("c2", "130", "276", "60", "0", "black", "black"),
    new Circle("c3", "300", "175", "35", "0", "black", "black"),
    new Circle("c4", "275", "40", "20", "0", "black", "black"),
    new Circle("c5", "60", "200", "30", "0", "black", "black"),
    new Circle("c6", "25", "30", "40", "0", "black", "black"),
    new Circle("c7", "270", "350", "55", "0", "black", "black"),
  ],
  title: "Dark dots",
  year: 2000,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1gAzs4UwdenQmNbEm9mdDIunb8Ef-kn5i",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem1",
};
const installation2 = {
  shapes: [
    new Rect("r2", "0", "0", "350", "350", "#f7c4d4", "#f7c4d4"),
    new Circle("c8", "32", "78", "30", "0", "white", "white"),
    new Circle("c9", "175", "100", "30", "0", "white", "white"),
    new Circle("c10", "100", "200", "10", "0", "white", "white"),
  ],
  title: "Polka",
  year: 1952,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=13-YgFevw6zqpnV96zCkuvxCZL9ij7FvA",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem2",
};
const installation3 = {
  shapes: [
    new Rect("r2", "0", "0", "350", "350", "#ecb5ff", "#ecb5ff"),
    new Circle("c11", "175", "175", "150", "50", "white", "#6bffb5"),
    new Circle("c12", "175", "175", "100", "50", "white", "#6bffb5"),
    new Circle("c13", "175", "175", "50", "50", "white", "#6bffb5"),
  ],
  title: "Changing colors",
  year: 1974,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1DIDOj7PlYM0XczQKTlmK5zbr_jwn4nNB",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem3",
};
const installation5 = {
  shapes: [
    new Circle("c14", "100", "75", "35", "3", "black", "black"),
    new Circle("c15", "70", "55", "15", "3", "blue", "blue"),
    new Circle("c16", "30", "105", "25", "3", "red", "red"),
  ],
  title: "Please name me",
  year: 2024,
  artist: "No idea",
  audioUrl: "",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem5",
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
  audioUrl: "",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem4",
};
const installation7 = {
  shapes: [
    new Rect("i7_r1", "0", "0", "350", "350", "#656E70", "#464049"),
    new Rect("i7_r2", "100", "150", "100", "100", "#BFD6D2", "#464049"),
    new Rect("i7_r3", "50", "200", "100", "100", "#65D4C1", "#464049"),
    new Circle("i7_c1", "270", "65", "50", "3", "#464049", "#65D4C1"),
    new Circle("i7_c2", "300", "270", "30", "3", "#464049", "#BFD6D2"),
  ],
  title: "Time",
  year: 1998,
  artist: "A Literal Crow",
  audioUrl: "",
  poemUrl:
      "https://poetrydb.org/title/Yesterday%20is%20History,/lines.json",
  poemId: "poem7",
};
const installation8 = {
  shapes: [
    new Rect("i8_r1", "0", "0", "350", "350", "#B1B697", "#B1B697"),
    //Tombstone
    new Ellipse("i8_e1", "175", "225", "50", "45", "#F2F5F1", "#F2F5F1"),
    new Rect("i8_r2", "125", "225", "100", "70", "#F2F5F1", "#F2F5F1"),
    //Bird
    new Triangle("i8_t2", "200,110 190,180 150,200 100,250 150,135 ", "#252629", "#2D4054"),
    new Triangle("i8_t1", "200,100 220,200 175,125", "#252629", "#2D4054"),
    //Rain
    new Ellipse("i8_e2", "50", "300", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e3", "220", "320", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e4", "90", "330", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e5", "310", "310", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e6", "170", "315", "10", "5", "none", "#5D767B"),
    new Ellipse("i8_e7", "290", "280", "10", "5", "none", "#5D767B"),
  ],
  title: "Title",
  year: 2000,
  artist: "A Literal Crow",
  audioUrl: "https://docs.google.com/uc?export=download&id=19XOSLsjikfU3M1whFgDj5p9I4tZld89x",
  poemUrl:
      "https://poetrydb.org/title/Pain%20has%20but%20one%20Acquaintance/lines.json",
  poemId: "poem8",
};
const installation9 = {
  shapes: [
    new Rect("i9_r1", "0", "0", "350", "350", "#94C4BD", "#94C4BD"),
    new Rect("i9_r2", "100", "150", "100", "100", "#66776B", "#324655"),
    new Rect("i9_r3", "50", "200", "100", "100", "#324655", "#66776B"),
    new Circle("i9_c1", "270", "65", "50", "3", "#324655", "#66776B"),
    new Circle("i9_c2", "300", "270", "30", "3", "#66776B", "#324655"),
  ],
  title: "Title",
  year: 1881,
  artist: "A Literal Crow",
  audioUrl: "",
  poemUrl:
      "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem9",
};

export const installations = [
  installation1,
  installation2,
  installation3,
  installation4,
  installation5,
  installation7,
  installation8,
  installation9,
];

export const createShape = (shape: Object): Object => {
  if (shape instanceof Circle) {
    return shape.createCircle();
  }
  if (shape instanceof Rect) {
    return shape.createRect();
  }
  if (shape instanceof Ellipse) {
    return shape.createEllipse();
  }
  if (shape instanceof Triangle) {
    return shape.createTriangle();
  }
  return false;
};