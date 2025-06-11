// window.addEventListener("DOMContentLoaded", () => {
  const colorMap = {};
  const testimonialItems = document.querySelectorAll(".testimonials-item");

  testimonialItems.forEach(item => {
    const nameElement = item.querySelector("[data-testimonials-title]");
    const avatarImg = item.querySelector("[data-testimonials-avatar]");

    if (nameElement && avatarImg) {
      const name = nameElement.textContent.trim();
      const initials = getInitials(name);

      // Use cached color if available (to ensure smooth effect)
      let bgColor = colorMap[name];

      if (!bgColor) {
        bgColor = getBGColor();
        colorMap[name] = bgColor;   // Map the color to the name
      }

      const svg = generateAvatarSVG(initials, bgColor);
      const base64 = `data:image/svg+xml;base64,${btoa(svg)}`;
      avatarImg.src = base64;
      avatarImg.alt = `${name}'s avatar`;
    }
  });
// });

function getInitials(name) {
    const initials = name
    .split(/\s+/)
    .map(n => n[0])
    .join("")
    .toUpperCase();

    return initials[0] + initials[initials.length - 1];
};

/**
 * Returns a random color for the initials avatar background.
 */
function getBGColor() {
  const vibrantColors = [
    "#f39c12",
    "#e67e22",
    "#d35400",
    "#c0392b",
    "#8e44ad",
    "#2980b9",
    "#27ae60",
  ];
  return vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
}

/**
 * Generate SVG avatar with initials and full coverage.
 */
function generateAvatarSVG(initials, bgColor) {
  const textColor = "#ffffff";

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 60" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="60" fill="${bgColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            fill="${textColor}" font-size="24" font-family="Arial, sans-serif" font-weight="bold">
        ${initials}
      </text>
    </svg>
  `;
}