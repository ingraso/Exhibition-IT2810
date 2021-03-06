import { Circle, Rect, Triangle, Ellipse } from "./shapes";

export interface Installation {
  id: number;
  shapes: Object[];
  title: string;
  year: number;
  artist: string;
  audioUrl: string;
  poemUrl: string;
  poemId: string;
  tags: string[];
}

const installation1: Installation = {
  id: 1,
  shapes: [
    new Rect("i1_r1", "0", "0", "350", "350", "#4e4e4e", "#4e4e4e"),
    new Circle("i1_c1", "156", "78", "30", "0", "black", "black"),
    new Circle("i1_c2", "130", "276", "60", "0", "black", "black"),
    new Circle("i1_c3", "300", "175", "35", "0", "black", "black"),
    new Circle("i1_c4", "275", "40", "20", "0", "black", "black"),
    new Circle("i1_c5", "60", "200", "30", "0", "black", "black"),
    new Circle("i1_c6", "25", "30", "40", "0", "black", "black"),
    new Circle("i1_c7", "270", "350", "55", "0", "black", "black"),
  ],
  title: "Dark dots",
  year: 2000,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1gAzs4UwdenQmNbEm9mdDIunb8Ef-kn5i",
  poemUrl:
    "https://poetrydb.org/title/Through%20the%20Dark%20Sod%20--%20as%20Education/lines.json",
  poemId: "poem1",
  tags: ["Dark", "Circles"],
};
const installation2: Installation = {
  id: 2,
  shapes: [
    new Rect("i2_r1", "0", "0", "350", "350", "#f7c4d4", "#f7c4d4"),
    new Circle("i2_c1", "32", "78", "30", "0", "white", "white"),
    new Circle("i2_c2", "175", "100", "30", "0", "white", "white"),
    new Circle("i2_c3", "100", "200", "10", "0", "white", "white"),
  ],
  title: "Polka",
  year: 1952,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=13-YgFevw6zqpnV96zCkuvxCZL9ij7FvA",
  poemUrl: "https://poetrydb.org/lines/Snow%20flakes./lines.json",
  poemId: "poem2",
  tags: ["Light", "Circles"],
};
const installation3: Installation = {
  id: 3,
  shapes: [
    new Rect("i3_r1", "0", "0", "350", "350", "#ecb5ff", "#ecb5ff"),
    new Circle("i3_c1", "175", "175", "150", "50", "white", "#6bffb5"),
    new Circle("i3_c2", "175", "175", "100", "50", "white", "#6bffb5"),
    new Circle("i3_c3", "175", "175", "50", "50", "white", "#6bffb5"),
  ],
  title: "Changing colors",
  year: 1974,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1DIDOj7PlYM0XczQKTlmK5zbr_jwn4nNB",
  poemUrl:
    "https://poetrydb.org/title/Great%20Streets%20of%20silence%20led%20away/lines.json",
  poemId: "poem3",
  tags: ["Colorful", "Circles"],
};
const installation4: Installation = {
  id: 4,
  shapes: [
    new Rect("i4_r0", "1", "1", "1", "1", "beige", "beige"),
    new Rect("i4_r1", "1", "1", "60", "60", "green", ""),
    new Rect("i4_r2", "1", "1", "60", "60", "yellow", ""),
    new Rect("i4_r3", "1", "1", "60", "60", "blue", ""),
    new Rect("i4_r4", "1", "1", "60", "60", "yellow", ""),
    new Rect("i4_r5", "1", "1", "60", "60", "green", ""),
    new Rect("i4_r6", "1", "1", "60", "60", "green", ""),
    new Rect("i4_r7", "1", "1", "60", "60", "yellow", ""),
    new Rect("i4_r8", "1", "1", "60", "60", "yellow", ""),
    new Rect("i4_r9", "1", "1", "60", "60", "green", ""),
  ],
  title: "Crossing squares",
  year: 2000,
  artist: "Milly Kinson",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1nHadQ-Dy8C_s_wJ31nTHzDfIYdIwjYoA",
  poemUrl:
    "https://poetrydb.org/title/Not%20at%20Home%20to%20Callers/lines.json",
  poemId: "poem4",
  tags: ["Colorful", "Rectangles"],
};
const installation5: Installation = {
  id: 5,
  shapes: [
    new Rect("i5_r0", "1", "1", "1", "1", "black", "black"),
    new Rect("i5_r1", "1", "1", "5", "350", "#999999", "#999999"),
    new Rect("i5_r2", "1", "1", "345", "5", "#666666", "#666666"),
    new Rect("i5_r3", "1", "1", "5", "315", "#333333", "#333333"),
    new Rect("i5_r4", "1", "1", "300", "5", "#999999", "#999999"),
    new Rect("i5_r5", "1", "1", "5", "280", "#666666", "#666666"),
    new Rect("i5_r6", "1", "1", "260", "5", "#333333", "#333333"),
    new Rect("i5_r7", "1", "1", "5", "240", "#999999", "#999999"),
    new Rect("i5_r8", "1", "1", "220", "5", "#666666", "#666666"),
    new Rect("i5_r9", "1", "1", "5", "200", "#333333", "#333333"),
    new Rect("i5_r10", "1", "1", "180", "5", "#999999", "#999999"),
    new Rect("i5_r11", "1", "1", "5", "160", "#666666", "#666666"),
    new Rect("i5_r12", "1", "1", "140", "5", "#333333", "#333333"),
    new Rect("i5_r13", "1", "1", "5", "120", "#999999", "#999999"),
    new Rect("i5_r14", "1", "1", "100", "5", "#666666", "#666666"),
    new Rect("i5_r15", "1", "1", "5", "80", "#333333", "#333333"),
    new Rect("i5_r16", "1", "1", "60", "5", "#999999", "#999999"),
    new Rect("i5_r17", "1", "1", "5", "40", "#666666", "#666666"),
    new Rect("i5_r18", "1", "1", "20", "5", "#333333", "#333333"),
  ],
  title: "Doomsday",
  year: 1984,
  artist: "Milly Kinson",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1gRJLJnj3TcYAO52syqnoRQ7LP-Nocr5q",
  poemUrl: "https://poetrydb.org/title,linecount/Edinburgh;4/lines.json",
  poemId: "poem5",
  tags: ["Dark", "Rectangles"],
};
const installation6: Installation = {
  id: 6,
  shapes: [
    new Rect("i6_r0", "0", "0", "1", "1", "#e2ffd1", "#e2ffd1"),
    new Rect("i6_r1", "0", "0", "100", "100", "green", "yellow"),
    new Rect("i6_r2", "50", "50", "100", "100", "yellow", "green"),
    new Rect("i6_r3", "100", "100", "100", "100", "green", "yellow"),
    new Rect("i6_r4", "150", "150", "100", "100", "yellow", "green"),
    new Rect("i6_r5", "200", "200", "100", "100", "green", "yellow"),
  ],
  title: "Nature",
  year: 1856,
  artist: "Milly Kinson",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1lj_DfEeGyP6XymXjwXc8EgWU7sT3SNCu",
  poemUrl:
    "https://poetrydb.org/title/Nature%20assigns%20the%20Sun%20--/lines.json",
  poemId: "poem6",
  tags: ["Colorful", "Rectangles"],
};
const installation7: Installation = {
  id: 7,
  shapes: [
    new Rect("i7_r1", "0%", "0%", "100%", "100%", "#656E70", "#464049"),
    new Rect("i7_r2", "29%", "43%", "29%", "29%", "#BFD6D2", "#464049"),
    new Rect("i7_r3", "14%", "57%", "29%", "29%", "#65D4C1", "#464049"),
    new Circle("i7_c1", "77%", "19%", "14%", "3", "#464049", "#65D4C1"),
    new Circle("i7_c2", "86%", "77%", "9%", "3", "#464049", "#BFD6D2"),
  ],
  title: "Time",
  year: 1998,
  artist: "A Literal Crow",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1t7nx2CCSaqM-qirDU2bSgtQWcW6CpzU0",
  poemUrl: "https://poetrydb.org/title/Yesterday%20is%20History,/lines.json",
  poemId: "poem7",
  tags: ["Dark", "Rectangles", "Circles"],
};
const installation8: Installation = {
  id: 8,
  shapes: [
    new Rect("i8_r1", "0", "0", "100%", "100%", "#B1B697", "#B1B697"),
    //Tombstone
    new Ellipse("i8_e1", "50%", "64%", "14%", "13%", "#F2F5F1", "#F2F5F1"),
    new Rect("i8_r2", "36%", "64%", "29%", "20%", "#F2F5F1", "#F2F5F1"),
    //Bird
    new Triangle(
      "i8_t2",
      "200,110 190,180 150,200 100,250 150,135 ",
      "#252629",
      "#2D4054"
    ),
    new Triangle("i8_t1", "200,100 220,200 175,125", "#252629", "#2D4054"),
    //Rain
    new Ellipse("i8_e2", "14%", "86%", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e3", "63%", "91%", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e4", "26%", "94%", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e5", "89%", "89%", "10", "5", "none", "#2D4054"),
    new Ellipse("i8_e6", "49%", "90%", "10", "5", "none", "#5D767B"),
    new Ellipse("i8_e7", "83%", "80%", "10", "5", "none", "#5D767B"),
  ],
  title: "Crow on the Grave",
  year: 2000,
  artist: "A Literal Crow",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=19XOSLsjikfU3M1whFgDj5p9I4tZld89x",
  poemUrl:
    "https://poetrydb.org/title/Pain%20has%20but%20one%20Acquaintance/lines.json",
  poemId: "poem8",
  tags: ["Colorful", "Complex"],
};
const installation9: Installation = {
  id: 9,
  shapes: [
    new Rect("i9_r1", "0", "0", "100%", "100%", "#94C4BD", "#94C4BD"),
    new Ellipse("i9_e1", "175", "150", "35", "35", "#324655", "#324655"),
    new Triangle("i9_t1", "116,165 116,210 80,220", "#324655", "#324655"),
    new Triangle("i9_t2", "231,165 231,210, 267,220", "#324655", "#324655"),
    new Triangle("i9_t3", "140,221 150,261 110,275", "#324655", "#324655"),
    new Triangle("i9_t4", "207,221 197,261 237,275", "#324655", "#324655"),
    new Rect("i9_r2", "116", "150", "116", "81", "#66776B", "#66776B"),
    new Triangle("i9_t5", "116,231 231,231 175,290", "#66776B", "#66776B"),
  ],
  title: "Happy Turtle",
  year: 1881,
  artist: "A Literal Crow",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1GcEfc1iy6p-EK-22SlyvSacaYC3igZT8",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem9",
  tags: ["Complex", "Colorful"],
};

export const allInstallations: Installation[] = [
  installation1,
  installation2,
  installation3,
  installation4,
  installation5,
  installation6,
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
