// Typed.js animation
new Typed('#element', {
  strings: ['Frontend Developer.', 'MERN Stack Developer.', 'Fullstack Developer.'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Toggle project card links
function toggleLinks(card) {
  const links = card.querySelector('.project-links');
  const allLinks = document.querySelectorAll('.project-links');
  allLinks.forEach(link => {
    if (link !== links) link.style.display = 'none';
  });
  links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';
}

// Scroll animation + skill bar animation
const animatedSections = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars if it's the skills section
      if (entry.target.classList.contains('skills-section')) {
        const fills = entry.target.querySelectorAll('.fill');
        fills.forEach(bar => {
          const computedStyle = getComputedStyle(bar);
          bar.style.width = computedStyle.getPropertyValue('--width');
        });
      }
    } else {
      entry.target.classList.remove('visible');

      // Reset skill bars for replay
      if (entry.target.classList.contains('skills-section')) {
        const fills = entry.target.querySelectorAll('.fill');
        fills.forEach(bar => {
          bar.style.width = '0';
        });
      }
    }
  });
}, {
  threshold: 0.2
});

animatedSections.forEach(section => observer.observe(section));


// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('show');
  });
});

// Contact form dummy submit handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Sending...';

  // Simulate success (You can replace with actual email sending code/API)
  setTimeout(() => {
    status.textContent = 'Message sent successfully!';
    this.reset();
  }, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutText = document.getElementById("about-text");
  const readMoreBtn = document.getElementById("read-more-btn");

  readMoreBtn.addEventListener("click", function () {
    if (aboutText.classList.contains("collapsed")) {
      aboutText.classList.remove("collapsed");
      readMoreBtn.textContent = "Show Less";
    } else {
      aboutText.classList.add("collapsed");
      readMoreBtn.textContent = "Read More";
    }
  });
});
