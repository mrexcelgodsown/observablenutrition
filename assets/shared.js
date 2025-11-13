
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 180, "density": { "enable": true, "value_area": 900 } },
        "color": { "value": ["#b3e0ff", "#ffd973", "#ffffff"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.85, "random": true },
        "size": { "value": 2.4, "random": true },
        "line_linked": { "enable": true, "distance": 140, "color": "#ffd700", "opacity": 0.06, "width": 1 },
        "move": { "enable": true, "speed": 0.9, "direction": "none", "random": true, "out_mode": "out" }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "repulse": { "distance": 120 }, "push": { "particles_nb": 6 } }
      },
      "retina_detect": true
    });
  }
}

function initOrbs() {
  for (let i=0;i<5;i++){
    const orb = document.createElement('div');
    orb.className='orb';
    const size = Math.random()*120 + 60;
    orb.style.width = size + 'px'; orb.style.height = size + 'px';
    orb.style.left = (Math.random()*80) + '%';
    orb.style.top = (Math.random()*60) + '%';
    orb.style.opacity = 0.06 + Math.random()*0.2;
    document.body.appendChild(orb);
  }
}

function smoothLinks() {
  document.querySelectorAll('a').forEach(a=>{
    if (a.getAttribute('href') && a.getAttribute('href').startsWith('#')) return;
    a.addEventListener('click',(e)=>{
      // allow external links
    })
  })
}

window.addEventListener('DOMContentLoaded', ()=>{
  initParticles();
  initOrbs();
  smoothLinks();
});
