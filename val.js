document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     🎵 BACKGROUND MUSIC (YES ONLY)
     =============================== */
  const bgMusic = document.getElementById("bgMusic");

  function playMusic() {
    if (!bgMusic) return;

    bgMusic.volume = 0;
    bgMusic.muted = false;

    bgMusic.play().then(() => {
      // Smooth fade-in
      const fade = setInterval(() => {
        if (bgMusic.volume < 0.5) {
          bgMusic.volume += 0.05;
        } else {
          clearInterval(fade);
        }
      }, 150);
    }).catch(() => {});
  }

  /* ===============================
     💖 ELEMENT REFERENCES
     =============================== */
  const question = document.getElementById("question");
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  const questionView = document.getElementById("questionView");
  const yesView = document.getElementById("yesView");

  const openLetterBtn = document.getElementById("openLetterBtn");
  const letterModal = document.getElementById("letterModal");
  const closeLetterBtn = document.getElementById("closeLetterBtn");
  const closeBackdrop = document.getElementById("closeBackdrop");

  /* ===============================
     🛡️ INITIAL STATE
     =============================== */
  if (yesView) yesView.classList.add("hidden");
  if (letterModal) letterModal.classList.add("hidden");
  if (questionView) questionView.classList.remove("hidden");

  /* ===============================
     😭 NO BUTTON LOOP (NO MUSIC)
     =============================== */
  const messages = [
    "Are you sure? 🥺",
    "Really sure?? 😢",
    "Think again 💔",
    "Last chance 😭",
    "Will you be my Valentine? 💖",
  ];

  let index = 0;

  if (noBtn && question) {
    noBtn.addEventListener("click", () => {
      index = (index + 1) % messages.length;
      question.textContent = messages[index];
    });
  }

  /* ===============================
     💘 YES BUTTON (START MUSIC)
     =============================== */
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      if (questionView) questionView.classList.add("hidden");
      if (yesView) yesView.classList.remove("hidden");

      playMusic(); // 🎵 MUSIC STARTS HERE ONLY
    });
  }

  /* ===============================
     💌 LETTER MODAL
     =============================== */
  if (openLetterBtn && letterModal) {
    openLetterBtn.addEventListener("click", () => {
      letterModal.classList.remove("hidden");
    });
  }

  function closeLetter() {
    if (letterModal) letterModal.classList.add("hidden");
  }

  if (closeLetterBtn) {
    closeLetterBtn.addEventListener("click", closeLetter);
  }

  if (closeBackdrop) {
    closeBackdrop.addEventListener("click", closeLetter);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && letterModal && !letterModal.classList.contains("hidden")) {
      closeLetter();
    }
  });
});