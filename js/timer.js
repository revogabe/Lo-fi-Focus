import sounds from "./sounds.js"
import Sound from "./sounds.js"

const sound = Sound()

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  minutes,
}) {
  let timerTimeOut

  //function updateTime
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  //fuction resetTimer
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  //function countdown
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      let finished = minutes <= 0 && seconds <= 0
      updateDisplay(minutes, 0)

      if (finished) {
        resetControls()
        sound.timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }
}
