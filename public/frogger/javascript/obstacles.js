class Obstacle {
  constructor({ x, y, type, width = grid * 2, height = grid, speed = 1 }) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.speed = speed
    this.type = Obstacle.getType(type)
    this.frameX = speed > 0 ? 0 : 1
  }

  static getExec() {
    const pngs = ["exec1", "exec2", "exec3", "exec4", "exec5", "exec6"]
    const png = Math.floor(Math.random() * pngs.length)
    return pngs[png]
  }


  static getVehicle() {
    const pngs = ["cab", "bus"]
    const png = Math.floor(Math.random() * pngs.length)
    return `${pngs[png]}${this.frameX === 0 ? "" : "_reverse"}`
  }

  static getType(type) {
    switch (type) {
      case "vehicle":
        return Obstacle.getVehicle()
      case "exec":
        const execType = Obstacle.getExec()
        return execType
      default:
        return type
    }
  }

  draw() {
    if (this.type.startsWith('bus')) {
      const image = this.frameX === 0 ? bus : bus_reverse
      ctx2.drawImage(image, this.x, this.y, this.width, this.height)
    } else if (this.type.startsWith('cab')) {
      const image = this.frameX === 0 ? cab : cab_reverse
      ctx2.drawImage(image, this.x, this.y, this.width, this.height)
    } else if (this.type.startsWith('exec')) {
      ctx2.drawImage(execImages[this.type], this.x, this.y, this.width, this.height)
    }
  }

  update() {
    const previousX = this.x
    this.x += this.speed * gameSpeed
    if (this.speed > 0) {
      if (this.x > canvas1.width + this.width) {
        this.x = 0 - this.width
      }
    } else {
      this.frameX = 1
      if (this.x < 0 - canvas1.width + this.width) {
        this.x = canvas1.width
      }
    }
    return previousX
  }
  static initObstacles() {
    const rows = [
      // STREET
      // lane 1
      {
        totalObstacles: 2,
        xSpacing: 350,
        heightBuffer: 2,
        type: 'vehicle'
      },
      // lane 2
      {
        totalObstacles: 2,
        xSpacing: 300,
        heightBuffer: 3,
        speed: -2,
        type: 'vehicle'
      },
      // lane 3 
      {
        totalObstacles: 2,

        xSpacing: 400,
        heightBuffer: 4,
        speed: 2,
        type: 'vehicle'
      },
      // lane 4
      {
        totalObstacles: 2,
        xSpacing: 400,
        heightBuffer: 5,
        speed: 1.5,
        type: 'vehicle'
      },
      // lane 5
      {
        totalObstacles: 2,
        xSpacing: 200,
        heightBuffer: 7,
        speed: -1,
        type: 'vehicle'
      },
      // SIDEWALK
      // lane 6
      {
        totalObstacles: 5,
        xSpacing: 200,
        heightBuffer: 8,
        speed: -1,
        type: 'exec',
        width: 25,
        height: 25,
      },
      {
        totalObstacles: 2,
        xSpacing: 200,
        heightBuffer: 9,
        speed: 2,
        type: 'exec',
        width: 25,
        height: 25,
      }]

    rows.forEach((row, rowIndex) => {
      for (let i = 0; i < row.totalObstacles; i++) {
        carsArray.push(new Obstacle({
          x: i * row.xSpacing,
          y: canvas1.height - grid * (rowIndex + 2) - row.heightBuffer,
          speed: row.speed,
          type: row.type,
          width: row.width,
          height: row.height,
        }))
      }
    })
  }
  static handleObstacles() {
    carsArray.forEach(car => {
      car.draw(car.update())
    })
    if (carsArray.some(collidesWith(frogger))) {
      ctx5.drawImage(collision, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50)
      resetGame()
    }

    // if (frogger.isOnSidewalk()) {
    //   safe = false
    //   logsArray.forEach(log => {
    //     if (collidesWith(frogger)(log)) {
    //       frogger.x = log.speed
    //       safe = true
    //     }
    //   })
    //   if (safe === false) {
    //     for (let i = 0; i < 30; i++) {
    //       ripplesArray.unshift(new Particle(frogger.x, frogger.y))
    //     }
    //     resetGame()
    //   }
    // }
  }
}

Obstacle.initObstacles()
