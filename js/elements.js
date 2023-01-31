//(var) Buttons
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSound = document.querySelector(".sound-on")
const buttonMute = document.querySelector(".sound-off")
const button15 = document.querySelector(".min15")
const button30 = document.querySelector(".min30")
const button60 = document.querySelector(".min60")

//(var)Config
let minutes
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

export const elements = {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSound,
  buttonMute,
  button15,
  button30,
  button60,
  minutes,
  minutesDisplay,
  secondsDisplay,
}
