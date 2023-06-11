const app = {
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    blowUp.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
