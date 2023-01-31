export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  )
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  )

  const audioUrl = "./assets/beats.mp3"

  const bgAudio = new Audio(audioUrl)

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    let repeat = 4
    let delay = 4000

    for (let i = 0; i < repeat; i++) {
      setTimeout(function () {
        kitchenTimer.play()
      }, delay * i)
    }
  }

  function bgAudioStart() {
    bgAudio.play()
  }

  //function bgAudioSkip() {
  // bgAudio.currentTime += 30
  //}

  return {
    pressButton,
    timeEnd,
    kitchenTimer,
    bgAudioStart,
    bgAudio,
  }
}
