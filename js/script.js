const navbar = document.querySelector("nav");
const links = document.querySelectorAll("nav a[href^='#']");
const offset = navbar.offsetHeight + 10;

// Sticky scroll effect (shadow + bg change)
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add(
      "shadow-md",
      "backdrop-blur",
      "bg-white/80",
      "dark:bg-gray-900/80"
    );
  } else {
    navbar.classList.remove(
      "shadow-md",
      "backdrop-blur",
      "bg-white/80",
      "dark:bg-gray-900/80"
    );
  }
});

// Smooth scroll (native + fallback Safari)
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scrollspy: aktifkan link saat scroll
window.addEventListener("scroll", () => {
  const position = window.scrollY + offset;
  document.querySelectorAll("section[id]").forEach((section) => {
    if (
      position >= section.offsetTop &&
      position < section.offsetTop + section.offsetHeight
    ) {
      links.forEach((l) =>
        l.classList.remove(
          "md:text-blue-700",
          "md:dark:text-blue-500",
          "font-semibold"
        )
      );
      const active = document.querySelector(`nav a[href="#${section.id}"]`);
      if (active) {
        active.classList.add(
          "md:text-blue-700",
          "md:dark:text-blue-500",
          "font-semibold"
        );
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contact form');
  const outputA = document.getElementById('outputA');
  const outputB = document.getElementById('outputB');
  const clearButton = document.getElementById('clear');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone-number').value;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value;

    outputB.innerHTML = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${country} ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    outputA.style.display = 'block';
  });

  clearButton.addEventListener('click', function () {
    outputB.innerHTML = '';
    outputA.style.display = 'none';
  });
});

function getUsername() {
      const urlParams = new URLSearchParams(window.location.search);
      let username = urlParams.get('username');

      if (!username) {
        username = prompt("Masukkan nama:");
        if (username) {
          const url = new URL(window.location);
          url.searchParams.set('username', username);
          window.history.replaceState({}, '', url);
        }
      }

      if (username) {
        document.getElementById('username').textContent = username;
      }
  }

document.addEventListener('DOMContentLoaded', function () {
      getUsername();
      
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
      }

      setupSmoothScroll();
 });