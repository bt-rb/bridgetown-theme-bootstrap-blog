// Burger menus
document.addEventListener('DOMContentLoaded', function () {
  // open/close
  const toggler = document.querySelectorAll('[data-toggle="side-menu"]');

  if (toggler.length) {
    for (var i = 0; i < toggler.length; i++) {
      const target = toggler[i].getAttribute('data-target');

      if (target.length) {
        toggler[i].addEventListener('click', function (event) {
          event.preventDefault();
          const menu = document.querySelector(target);

          if (menu) {
            menu.classList.toggle('d-none');
          }
        });
      }
    }
  }
});

console.info("Bridgetown is loaded!")
