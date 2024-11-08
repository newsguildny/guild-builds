/** This is legacy code that adds dust particles begin the player's avatar as they move. We may use it again, but it is not implemented right now. */

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.radius = Math.random() * 20 + 1
    this.opacity = 1
    this.directionX = Math.random() * 1 - 0.5
    this.directionY = Math.random() * 1 - 0.5
  }

  draw() {
    ctx3.fillStyle = `rgba(150,150,150,${this.opacity})`
    ctx3.beginPath()
    ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx3.fill()
    ctx3.closePath()
  }

  update() {
    this.x += this.directionX
    this.y += this.directionY
    if (this.opacity > 0.1) {
      this.opacity -= 0.9
    }
    if (this.radius > 0.15) {
      this.radius -= 0.14
    }
  }

  ripple() {
    if (this.radius < 50) {
      this.radius += 0.5
      this.x -= 0.03
      this.y -= 0.03
    }

    if (this.opacity > 0) {
      this.opacity -= 0.009
    }
  }

  drawRipple() {
    ctx1.strokeStyle = `rgba(255,255,255,${this.opacity})`
    ctx1.beginPath()
    ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx1.stroke()
    ctx1.closePath()
  }

  static handleParticles() {
    // dust
    particlesArray.forEach(particle => {
      particle.update()
      particle.draw()
    })

    if (particlesArray.length > maxParticles) {
      for (let i = 0; i < 30; i++) {
        particlesArray.pop()
      }
    }

    if (KeyboardHandler.isKeyboardKey() && frogger.isOnStreet() && particlesArray.length < maxParticles + 10) {
      for (let i = 0; i < 10; i++) {
        particlesArray.unshift(new Particle(frogger.x, frogger.y))
      }
    }
  }

  static handleRipples(frogger) {
    // ripples

    const maxRipples = 20
    ripplesArray.forEach(particle => {
      particle.ripple()
      particle.drawRipple()
    })

    if (ripplesArray.length > maxRipples) {
      for (let i = 0; i < 5; i++) {
        ripplesArray.pop()
      }
    }

    if (KeyboardHandler.isKeyboardKey() && frogger.isOnSidewalk() && ripplesArray.length < maxRipples + 10) {
      for (let i = 0; i < maxRipples; i++) {
        ripplesArray.unshift(new Particle(frogger.x, frogger.y))
      }
    }
  }
}
