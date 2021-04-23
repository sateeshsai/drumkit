function playSound(e) {
	let myAudio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	if (!myAudio) return; //stop the function if no audio linked to the key pressed
	myAudio.currentTime = 0; //rewind to start
	myAudio.play();

	let myKey = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
	myKey.classList.add("key-pressed");

	let myKeys = document.querySelectorAll(".key");
	myKeys.forEach((myKey) =>
		myKey.addEventListener("transitionend", function (e) {
			if (e.propertyName !== "background-color") return; // skip if not background
			this.classList.remove("key-pressed");
		})
	);
}

window.addEventListener("keydown", playSound);
