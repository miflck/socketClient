var socket;

function setup() {
  createCanvas(400, 400);
  //socket = socket.io.connect("http;//localhost:3000");
  socket = io.connect("https://dda-miflck.herokuapp.com/");
  // Callback function
  socket.on("mouse", (data) => {
    console.log("callback from server", data);
  });

  socket.on("message", (data) => {
    console.log("message from server", data);
    noStroke();
    fill(255, 0, 0);
    ellipse(data.x, data.y, 20);
  });

  // gets called when new client arrives
  socket.on("client connected", (data) => {
    console.log("client added", data);
  });

  background(random(255), 255, 255);
}

function draw() {
  //background(random(255));
}

function mouseDragged() {
  // console.log("Sending: " + mouseX + "," + mouseY);

  var data = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("message", data);

  noStroke();
  fill(0, 255, 255);
  ellipse(mouseX, mouseY, 20);
}
