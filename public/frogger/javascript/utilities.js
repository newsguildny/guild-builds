function animate() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
  ctx2.clearRect(0, 0, canvas1.width, canvas1.height)
  ctx3.clearRect(0, 0, canvas1.width, canvas1.height)
  // ctx5.clearRect(0, 0, canvas1.width, canvas1.height)


  Particle.handleRipples(frogger)

  ctx2.drawImage(background_lvl2, 0, 0, canvas1.width, canvas1.height)

  frogger.draw()
  frogger.update()
  // Particle.handleParticles(frogger)
  Obstacle.handleObstacles()
  handleScoreboard()
  frame++
  requestAnimationFrame(animate)
}

animate()

window.addEventListener('keydown', function (e) {
  keys = []
  keys[e.key] = true
  if (KeyboardHandler.isKeyboardKey()) {
    frogger.jump()
  }
})

window.addEventListener('keyup', function (e) {
  delete keys[e.key]
  frogger.moving = false
  frogger.frameX = 0
})

function scored() {
  score++;
  gameSpeed += 0.05
  frogger.reset()
}

function handleScoreboard() {
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height)
  ctx4.fillStyle = 'black'
  ctx4.font = '15px Verdana'
  ctx4.strokeText('Strikers', 2, 160)
  ctx4.strokeText('on Picket', 2, 180)
  ctx4.strokeText('Line', 2, 200)
  ctx4.font = '60px Verdana'
  ctx4.fillText(score, 2, 250)
  ctx4.font = '15px Verdana'
  ctx4.strokeText(`Collisions: ${collisionsCount}`, 2, 575)
  ctx4.strokeText(`Game Speed: ${gameSpeed.toFixed(2)}`, 2, 595)
}

function collidesWith(first) {
  return function $collidesWith(second) {
    return !(first.x >= second.x + second.width || first.x + first.width <= second.x || first.y >= second.y + second.height || first.y + first.height <= second.y)
  }
}

function showCallToAction() {
  document.getElementById("game-over").style.display = "initial"
}

function hideCallToAction() {
  hiddenCallToAction = true
  document.getElementById("game-over").style.display = "none"
}

function resetGame() {
  frogger.reset()
  score = 0
  collisionsCount++
  gameSpeed = 1
  console.log(hiddenCallToAction)
  if (hiddenCallToAction === false) {
    showCallToAction()
  }
}