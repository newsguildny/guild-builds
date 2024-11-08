const createCanvas = id => {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 600;

  return [canvas, ctx];
};

const [canvas1, ctx1] = createCanvas("canvas1");
const [canvas2, ctx2] = createCanvas("canvas2");
const [canvas3, ctx3] = createCanvas("canvas3");
const [canvas4, ctx4] = createCanvas("canvas4");
const [canvas5, ctx5] = createCanvas("canvas5");

// global variables

const grid = 42;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;

var particlesArray = [];
var maxParticles = 300;
var ripplesArray = [];
var carsArray = [];
var numberOfCars = 3;
var safe = false;
var hiddenCallToAction = false;

function createImage(filename) {
  const image = new Image();
  image.src = `https://nytimesguild.org/tech/guild-builds/frogger/images/${filename}.png`;
  return image;
}

const background_lvl2 = createImage("background");

const collision = createImage("collisions");

const bus = createImage("sbs_bus");

const bus_reverse = createImage("sbs_bus_reverse");

const cab = createImage("cab");

const cab_reverse = createImage("cab_reverse");

const scabby = createImage("scabby");

const execImages = {
  exec1: createImage("exec1"),
  exec2: createImage("exec2"),
  exec3: createImage("exec3"),
  exec4: createImage("exec4"),
  exec5: createImage("exec5"),
  exec6: createImage("exec6")
};

class KeyboardHandler {
  constructor() {}

  static isLeftKey() {
    return (keys["ArrowLeft"] || keys["A"] || keys["a"]) === true;
  }

  static isRightKey() {
    return (keys["ArrowRight"] || keys["D"] || keys["d"]) === true;
  }

  static isUpKey() {
    return (keys["ArrowUp"] || keys["W"] || keys["w"]) === true;
  }

  static isDownKey() {
    return (keys["ArrowDown"] || keys["S"] || keys["s"]) === true;
  }

  static isKeyboardKey() {
    return (
      KeyboardHandler.isRightKey() ||
      KeyboardHandler.isLeftKey() ||
      KeyboardHandler.isUpKey() ||
      KeyboardHandler.isDownKey()
    );
  }
}
