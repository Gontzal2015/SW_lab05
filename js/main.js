import SpriteSheet from "./spriteSheet.js";

let i=0

let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext("2d");

const loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.addEventListener('load', () => resolve(img));
  img.addEventListener('error', (err) => reject(err));
  img.src = url;
});

loadImage('sprite-supermariocharacters.png').then((image) => {


let sprites = new SpriteSheet(image,18,32)
sprites.define('mario0',295,0,18,32)
sprites.define('mario1',312,0,18,32)
sprites.define('mario2',330,0,18,32)

setInterval(() => {
    i++
  if ((i % 3)==1){
    sprites.draw('mario0',ctx,0,0)
  }
  else if ((i % 3)==2){
    sprites.draw('mario1',ctx,0,0)
  }
  else {
    sprites.draw('mario2',ctx,0,0)
  }

},300)





}).catch((err) => {
  console.error('Error cargando la imagen:');
});

