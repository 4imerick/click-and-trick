const blowUp = {
  slot: null,
  button: null,
  emojis: [],
  divForEmojis: null,
  timeline: null,
  init: function () {
    console.log("Hello world, I'm blowUp.js");

    // The elements we want to blow up on the click.
    blowUp.emojis = [
      "🎃",
      "👻",
      "💀",
      "🔮",
      "🐍",
      "🕷️",
      "🕸️",
      "🪓",
      "🔪",
      "⚰️",
      "🍫",
      "🍬",
      "🍭",
    ];

    // We get the DOM elements that we need to interacte with.
    blowUp.slot = document.querySelector(".slot");
    blowUp.button = document.querySelector(".slot__button");

    if (blowUp.button) {
      // We add a listener and a handler on the click evt.
      blowUp.button.addEventListener("click", blowUp.party);
    }
  },
  /**
   * Method who create a HTML element and add the element to the DOM with some emojis.
   * @return {void}
   */
  party: function () {
    if (blowUp.isTweening()) {
      return;
    }

    // We sart a counter at 0 and add 1 until the loop reach 100.
    for (let index = 0; index < 100; index++) {
      // We create a HTML element.
      blowUp.divForEmojis = document.createElement("div");
      // Create random content to our HTML element starding for blowUp.emojis.
      blowUp.divForEmojis.innerText =
        blowUp.emojis[Math.floor(Math.random() * blowUp.emojis.length)];
      // We add the blowUp.divForEmojis to the blowUp.bloxSlot.
      blowUp.slot.appendChild(blowUp.divForEmojis);
    }

    // We call the method blowUp.animateEmojis();
    blowUp.animateEmojis();
  },
  /**
   * Method who handle the emojis animation : layout and timeline.
   * @return {void}
   */
  animateEmojis: function () {
    // We set up the timeline.
    blowUp.timeline = gsap.timeline();

    // We set up the layout.
    blowUp.timeline
      .to(".slot div", {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        z: "random(0, 1000)",
        rotation: "random(-90, 90)",
        duration: 1.5,
      })
      .to(".slot div", { autoAlpha: 0, duration: 0.3 }, "-=0.2")
      .add(blowUp.cleanDOM);
  },
  /**
   * Method who remove form the DOM all the elements create.
   * @return {boolean}
   */
  cleanDOM: function () {
    // All the child elements of blowUp.BoxSlot become empty.
    blowUp.slot.innerHTML = "";
  },
  /**
   * Metho who check is the animation currently playing.
   * @returns
   */
  isTweening: function () {
    // Return true is the animation is playing or false if not.
    return gsap.isTweening(".slot div");
  },
};
