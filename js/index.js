import Sound from "./sounds.js"

// imports named
import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"

const {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSound,
  buttonMute,
  button15,
  button30,
  button60,
  minutesDisplay,
  secondsDisplay,
} = elements

//function export
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonSet,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

let minutes

//EventClick Play and Pause
buttonPlay.addEventListener("click", function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
  sound.bgAudio.play()
})

buttonPause.addEventListener("click", function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener("click", function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

//Sound Mute
buttonSound.addEventListener("click", function () {
  buttonSound.classList.add("hide")
  buttonMute.classList.remove("hide")
  sound.pressButton()
  sound.bgAudio.play()
})

buttonMute.addEventListener("click", function () {
  buttonMute.classList.add("hide")
  buttonSound.classList.remove("hide")
  sound.pressButton()
  sound.bgAudio.pause()
})

//Set Clock
buttonSet.addEventListener("click", function () {
  sound.pressButton()
  minutes = parseInt(prompt("Quantos Minutos?")) || "00"
  timer.updateDisplay(minutes, 0)
  timer.updateMinutes(minutes)
})

//minutes++
button15.addEventListener("click", function () {
  minutesDisplay.innerHTML = 15
  sound.pressButton()
})

button30.addEventListener("click", function () {
  minutesDisplay.innerHTML = 30
  sound.pressButton()
})

button60.addEventListener("click", function () {
  minutesDisplay.innerHTML = 60
  sound.pressButton()
})
