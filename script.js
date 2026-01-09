//your JS code here. If required.
const buttons = document.getElementById("buttons");
const stopBtn = document.querySelector(".stop");
const audioPlayer = document.getElementById("audio-player");

const sounds = [
  { name: "applause", file: "applause.mp3" },
  { name: "boo", file: "boo.mp3" },
  { name: "gasp", file: "gasp.mp3" },
  { name: "tada", file: "tada.mp3" },
  { name: "victory", file: "victory.mp3" },
  { name: "wrong", file: "wrong.mp3" },
  { name: "drum", file: "drum.mp3" },
  { name: "guitar", file: "guitar.mp3" },
];
sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = sound.name;
  button.addEventListener("click", () => {
    audioPlayer.setAttribute("src", `sounds/${sound.file}`);
    audioPlayer.play();
  });
  buttons.append(button);
});

stopBtn.addEventListener("click", () => {
  audioPlayer.removeAttribute("src");
  audioPlayer.pause();
});
