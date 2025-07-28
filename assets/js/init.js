document.addEventListener("DOMContentLoaded", function(event) {
  const scripts = [
    'about/technologies.js',
    'resume/experiences.js',
    'resume/certifications.js',
    'resume/education.js'
  ];

  const testimonial_scripts = [
    'about/testimonials.js',
    'about/testimonial_avatars.js',
    'about/splide.js'
  ];

  // Remove splash after technologies.js import instead of waiting for all imports
  initialize(scripts, true, 'script.js');
  initialize(testimonial_scripts, false, 'testimonials_script.js');
});

async function initialize(scripts, splashActive, scriptFile) {
  try {
    // Load base scripts in order
    for (const script of scripts) {
      await loadScript(script);
    }

    await loadScript(scriptFile);
    if (splashActive === true) {
      removeSplash();
    }
  } catch (err) {
    console.error(err);
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `/assets/js/${src}`;
    s.type = 'text/javascript';
    s.onload = () => resolve(src);
    s.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.body.appendChild(s);
  });
}

function removeSplash() {
  setTimeout(() => {
      document.getElementById("splash").remove();
      document.querySelector('main').classList.remove("blurred");
  }, 1600);
}