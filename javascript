const frames = document.querySelectorAll('.frame');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

frames.forEach(frame => observer.observe(frame));
