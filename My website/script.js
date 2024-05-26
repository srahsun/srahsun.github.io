function navigateTo(url) {
  const clickSound = document.getElementById("click-sound");
  clickSound.currentTime = 0; // Rewind to the start
  clickSound.play();

  // Delay navigation to ensure the sound is played
  setTimeout(() => {
    window.location.href = url;
  }, 300); // Adjust the delay as needed
}
