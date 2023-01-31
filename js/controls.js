export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
}) {
  //fuction play
  function play() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
  }

  //fuction pause
  function pause() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
  }

  //function reset
  function reset() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
    buttonStop.classList.add("hide")
    buttonSet.classList.remove("hide")
  }


  return {
    reset,
    play,
    pause,
  }
}
