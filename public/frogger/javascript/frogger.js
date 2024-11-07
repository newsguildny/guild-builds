
class Frogger {
  constructor() {
    this.spriteWidth = 250
    this.spriteHeight = 250
    this.width = grid - 2
    this.height = grid - 2

    this.startX = canvas1.width / 2 + 1
    this.x = this.startX

    this.startY = canvas1.height - this.height - 1
    this.y = this.startY

    this.moving = false
    this.frameX = 0
    this.frameY = 0
  }

  reset() {
    this.y = this.startY
    this.x = this.startX
  }

  update() {
    if (this.moving || KeyboardHandler.isKeyboardKey() === false) {
      return
    }

    this.moving = true

    if (KeyboardHandler.isUpKey()) {
      this.y -= (grid + 2)
      this.frameX = 1
      this.frameY = 0
    } else if (KeyboardHandler.isDownKey()) {
      if (this.y < canvas1.height - this.height * 2) {
        this.y += (grid + 2)
        this.frameY = 3

      }
    } else if (KeyboardHandler.isLeftKey()) {
      if (this.x > this.width) {
        this.x -= (grid + 2)
        this.frameY = 2

      }
    } else if (KeyboardHandler.isRightKey()) {
      if (this.x < canvas1.width - this.width * 2) {
        this.x += (grid + 2)
        this.frameY = 1

      }
    }

    if (this.y < (grid * 5)) {
      scored()
    }
  }

  draw() {
    ctx3.fillStyle = "green"
    ctx3.drawImage(scabby, this.x, this.y, this.width, this.height)
  }

  jump() {
    if (this.moving === false) {
      this.frameX = 1
    } else if (this.frameX === 1) {
      this.frameX = 0
    }
  }

  isOnStreet() {
    return this.y > 250
  }

  isOnSidewalk() {
    return this.isOnStreet() !== true && this.y > 100
  }
}

const frogger = new Frogger()