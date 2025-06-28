const scripts = [
  // 'splash.js',
  'about/services.js',
  'about/technologies.js',
  'about/testimonials.js',
  'about/testimonial_avatars.js',
  'about/splide.js',
  'resume/experiences.js',
  'resume/certifications.js',
  'resume/education.js',
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `/assets/js/${src}`;
    s.type = 'text/javascript';
    s.onload = () => resolve(src);
    s.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(s);
  });
}

async function initialize() {
  try {
    // Load base scripts in order
    for (const script of scripts) {
      await loadScript(script);
    }

    await loadScript('script.js');
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  initialize();
});