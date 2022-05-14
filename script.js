// function draw() {
// const canvas = document.getElementById("shapes");
// if (canvas.getContext) {
//   var ctx = canvas.getContext("2d");

//   ctx.fillRect(25, 25, 150, 100);
//   ctx.clearRect(25, 45, 60, 60);
//   ctx.strokeRect(25, 50, 50, 50);
// }
// }

// function draw() {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     var ctx = canvas.getContext("2d");

//     ctx.beginPath();
//     ctx.moveTo(75, 50);
//     ctx.lineTo(100, 75);
//     ctx.lineTo(100, 25);
//     ctx.fill();
//   }
// }

// const user = document.getElementById("user");
// user.addEventListener("keyup", (event) => {
//   console.log(event.key);
// });

const rectBtn = document.getElementById("rect-btn");
const triBtn = document.getElementById("tri-btn");
const circleBtn = document.getElementById("circle-btn");
const emojiBtn = document.getElementById("emoji-btn");
const barChartBtn = document.getElementById("barChart-btn");

const canvas = document.getElementById("shapes");
rectBtn.addEventListener("click", drawRectangle);
triBtn.addEventListener("click", drawTriangle);
circleBtn.addEventListener("click", drawCircle);
emojiBtn.addEventListener("click", drawEmoji);
barChartBtn.addEventListener("click", drawBarChart);

function drawRectangle() {
  let context = canvas.getContext("2d"); // Creating context
  context.fillStyle = "#ff0000";
  context.fillRect(10, 50, 100, 50);
  context.clearRect(20, 60, 80, 30);
  context.fillRect(30, 70, 60, 10);
  //   context.fillRect(10, 50, 100, 100);
}

function drawTriangle() {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(20, 20);
  context.lineTo(60, 20);
  context.lineTo(20, 60);
  context.lineTo(0, 40);
  context.stroke();
}

function drawCircle() {
  let context = canvas.getContext("2d");
  context.arc(100, 100, 50, 0, Math.PI);
  // context.moveTo(120, 120);
  context.arc(120, 120, 50, 0, Math.PI, true);
  context.stroke();
}

function drawEmoji() {
  let ctx = canvas.getContext("2d");
  ctx.arc(50, 50, 10, 0, Math.PI * 2);
  // ctx.stroke();
  ctx.moveTo(110, 50);
  ctx.arc(100, 50, 10, 0, Math.PI * 2);
  ctx.moveTo(150, 75);
  ctx.arc(75, 75, 75, 0, Math.PI * 2);
  ctx.moveTo(100, 100);
  ctx.arc(75, 100, 25, 0, Math.PI);
  ctx.stroke();
}

function drawBarChart() {
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(40, 40);
  ctx.lineTo(40, 150);
  ctx.lineTo(150, 150);
  ctx.moveTo(50, 150);
  ctx.lineTo(50, 100);
  ctx.lineTo(80, 100);
  ctx.lineTo(80, 150);

  ctx.moveTo(90, 150);
  ctx.lineTo(90, 80);
  ctx.lineTo(120, 80);
  ctx.lineTo(120, 150);
  ctx.stroke();
}

// function drawPieChart() {
//   let ctx = canvas.getContext('2d');
//   ctx.beginPath();
//   ctx.moveTo(150, 150);

// }

const myChart = document.getElementById("charts").getContext("2d");
const barChart1Btn = document.getElementById("barChart1-btn");
barChart1Btn.addEventListener("click", drawBarChart1);

function drawBarChart1() {
  const barChart = new Chart(myChart, {
    type: "bar",
    data: {
      labels: ["Chennai", "Bangalore", "Mumbai", "Delhi", "Kolkata"],
      datasets: [
        {
          label: "Population",
          data: [10971108, 12326532, 20411274, 30290936, 14850066],
        },
      ],
    },
    options: {},
  });
}
