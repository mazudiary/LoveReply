const replyItems = [
      { emoji: "💌", text: "<span class='highlight'>Bye</span> boltecho je, koi jao?" },
      { emoji: "💖", text: "WhatsApp??? Okhane ami achi" },
      { emoji: "📸", text: "Insta??? Okhaneo ami achi" },
      { emoji: "👻", text: "Snapchat??? Okhaneo ami achi" },
      { emoji: "🐦", text: "X??? khaneo ami achi" },
      { emoji: "📱", text: "Sim??? Okhane ami achi" },
      { emoji: "📧", text: "Email??? Okhane ami achi" },
      { emoji: "📲", text: "Viber??? Okhane ami achi" },
      { emoji: "🏡", text: "Bashay??? Okhane ami chole ashbo" }
    ];

    const replyContainer = document.getElementById("reply");

    replyItems.forEach((item, index) => {
      const replyItem = document.createElement("div");
      replyItem.classList.add("reply-item");

      const emoji = document.createElement("div");
      emoji.classList.add("emoji");
      emoji.textContent = item.emoji;

      const text = document.createElement("div");
      text.classList.add("text");
      text.innerHTML = item.text;

      replyItem.appendChild(emoji);
      replyItem.appendChild(text);
      replyContainer.appendChild(replyItem);

      setTimeout(() => {
        replyItem.classList.add("visible");
      }, 1000 + index * 300);
    });

    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      const size = Math.random() * 10 + 10;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${Math.random() * 100}%`;
      const duration = Math.random() * 7 + 8;
      heart.style.animationDuration = `${duration}s`;
      heart.style.opacity = Math.random() * 0.5 + 0.3;
      document.getElementById("hearts-container").appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }

    setInterval(createHeart, 800);