const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// //  to change the fill

// ctx.fillStyle = '#937438'

// // to create shapes

// ctx.fillRect(20,20, 150,100);
// ctx.fillStyle = '#438'
// ctx.fillRect(200,20, 150,100);

// // strokeRect() outline of a rectangle
// ctx.lineWidth = 5
// ctx.strokeStyle = '#223340'
// ctx.strokeRect( 400, 20, 150, 100)

// // clear Rect()  - to clear out a rectangle, used in animation

// ctx.clearRect(25, 25,140, 90); 

// //fillText()
// ctx.font = '30px Verdana';
// ctx.fillStyle = 'purple';


// ctx.fillText('Hello', 40, 60);

// // strokeText()

// ctx.strokeText('Practice time', 50, 200)


// Paths

// Creating an inverted Triangle

ctx.beginPath();
ctx.moveTo(50, 50);
// to draw a straight line

ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.lineTo(50, 50);
ctx.closePath();
ctx.stroke(); 
ctx.fillStyle = '#098'
ctx.fill();
 