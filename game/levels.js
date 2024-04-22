import { canvas, ctx } from "./setup.js";

export const levelsProperties = [
  null,
  { map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    diamonds: [
    {x: 10, y: 6}, {x: 5, y: 8}],
    startPoz: {x: 2, y: 4},
    endPoz: {x: 11, y: 6},
  },
  { map: [
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    diamonds: [
    {x: 10, y: 6}, {x: 5, y: 8}],
    startPoz: {x: 2, y: 8},
    endPoz: {x: 11, y: 6},
  }
]

export class Level{
  constructor(nr, map, assets){
    this.sizeY = map.length;
    this.sizeX = map[0].length;
    this.map = map;
    this.boxSizeX = canvas.width / this.sizeX; 
    this.boxSizeY = canvas.height / this.sizeY, 
    this.assets = assets;
    this.nr = nr;
  }
  
  drawBackground(){
    let canvasSizeX = canvas.width;
    let canvasSizeY = canvas.height;
    ctx.drawImage(this.assets[`lvl${this.nr}Background`], 0, 0, canvasSizeX, canvasSizeY);
  }
  drawForeground(){
    let canvasSizeX = canvas.width;
    let canvasSizeY = canvas.height;
    ctx.drawImage(this.assets[`lvl${this.nr}Foreground`], 0, 0, canvasSizeX, canvasSizeY);
  }
}