const orb = document.getElementById('glowOrb');
const container = orb.parentElement;

function moveToRandom() {
  const containerW = container.offsetWidth;
  const containerH = container.offsetHeight;
  const orbSize = 700;

  const randomLeft = Math.random() * (containerW - orbSize * 0.5) - orbSize * 0.25;
  const randomTop  = Math.random() * (containerH - orbSize * 0.5) - orbSize * 0.25;
  orb.style.left = randomLeft + 'px';
  orb.style.top  = randomTop  + 'px';
}

moveToRandom();

setInterval(moveToRandom, 3000);

const track = document.getElementById('carouselTrack');
const clone = track.innerHTML
track.innerHTML += clone

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  menu.classList.toggle('open');
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
}

      // Typing animation
      const roles = [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Data Analyst",
      ];
      let roleIndex = 0,
        charIndex = 0,
        deleting = false;
      const el = document.getElementById("typingText");
      function type() {
        const current = roles[roleIndex];
        if (!deleting) {
          el.textContent = current.slice(0, ++charIndex);
          if (charIndex === current.length) {
            deleting = true;
            setTimeout(type, 1800);
            return;
          }
        } else {
          el.textContent = current.slice(0, --charIndex);
          if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        }
        setTimeout(type, deleting ? 50 : 80);
      }
      type();