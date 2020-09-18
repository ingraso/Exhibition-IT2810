import React from "react";

export class Circle {
  id: string;
  cx: string;
  cy: string;
  r: string;
  strokeWidth?: string;
  stroke?: string;
  fillColor: string;

  constructor(
    id: string,
    cx: string,
    cy: string,
    r: string,
    strokeWidth: string,
    stroke: string,
    fillColor: string
  ) {
    this.id = id;
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.strokeWidth = strokeWidth;
    this.stroke = stroke;
    this.fillColor = fillColor;
  }

  createCircle = () => {
    return (
      <circle
        id={this.id}
        cx={this.cx}
        cy={this.cy}
        r={this.r}
        strokeWidth={this.strokeWidth}
        stroke={this.stroke}
        fill={this.fillColor}
      />
    );
  };
}

export class Rect {
  id: string;
  rx: string;
  ry: string;
  width: string;
  height: string;
  fillColor?: string;
  strokeColor?: string;

  constructor(
    id: string,
    rx: string,
    ry: string,
    width: string,
    height: string,
    fillColor: string,
    strokeColor: string
  ) {
    this.id = id;
    this.rx = rx;
    this.ry = ry;
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
  }

  createRect = () => {
    return (
      <rect
        id={this.id}
        x={this.rx}
        y={this.ry}
        width={this.width}
        height={this.height}
        fill={this.fillColor}
        stroke={this.strokeColor}
      />
    );
  };
}

export class Ellipse {
  id: string;
  cx: string;
  cy: string;
  rx: string;
  ry: string;
  fill: string;
  stroke: string;

  constructor(id: string, cx: string, cy: string, rx: string, ry:string, fill: string, stroke: string) {
    this.id = id;
    this.cx = cx;
    this.cy = cy;
    this.rx = rx;
    this.ry = ry;
    this.fill = fill;
    this.stroke = stroke;
  }

  createEllipse = () => {
    return (
        <ellipse
            id={this.id}
            cx={this.cx}
            cy={this.cy}
            rx={this.rx}
            ry={this.ry}
            fill={this.fill}
            stroke={this.stroke}
        />
    );
  };
}

export class Triangle {
  id: string;
  points: string;
  stroke: string;
  fill: string;

  constructor(id: string, points: string, stroke: string, fill: string) {
    this.id = id;
    this.points = points;
    this.stroke = stroke;
    this.fill = fill;
  }

  createTriangle = () => {
    return(
        <polygon
            id={this.id}
            points={this.points}
            stroke={this.stroke}
            fill={this.fill}
        />
    );
  };
}