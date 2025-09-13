// Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 700);

// CSS for hearts
const style = document.createElement('style');
style.innerHTML = `
  .heart {
    position: fixed;
    bottom: 0;
    font-size: 2rem;
    animation: rise linear forwards;
  }
  @keyframes rise {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
