import React from "react";

export class Circle {
  id: string;
  cx: string;
  cy: string;
  r: string;
  strokeWidth?: string;
  fillColor: string;

  constructor(
    id: string,
    cx: string,
    cy: string,
    r: string,
    strokeWidth: string,
    fillColor: string
  ) {
    this.id = id;
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.strokeWidth = strokeWidth;
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
