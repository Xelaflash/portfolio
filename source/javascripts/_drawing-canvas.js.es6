const canvas = document.querySelector('#draw');
const bound = canvas.getBoundingClientRect();
console.log(canvas)
const ctx = canvas.getContext('2d');

canvas.width = bound.width;
canvas.height = bound.height;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;



function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);



// for mobile
function dot(x,y) {
  ctx.beginPath();
  ctx.stroke();
}

function line(fromx,fromy, tox,toy) {
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.stroke();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};


let canvastop = canvas.offsetTop;
console.log(canvastop)

canvas.ontouchstart = function(event){
  console.log(event)
  event.preventDefault();
  lastx = event.touches[0].clientX;
  lasty = event.touches[0].clientY;
  dot(lastx,lasty);
};

canvas.ontouchmove = function(event){
  event.preventDefault();
  let newx = event.touches[0].clientX;
  let newy = event.touches[0].clientY;
  line(lastx,lasty, newx,newy);
  lastx = newx;
  lasty = newy;
}

// clear btn
const clearButton = document.querySelector('#parallax');
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
clearButton.addEventListener('click', clear);
