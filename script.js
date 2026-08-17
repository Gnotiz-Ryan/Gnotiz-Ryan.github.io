(() => {
  const glassNav = document.querySelector("[data-glass-nav]");

  if (!glassNav) {
    return;
  }

  const finePointer = window.matchMedia("(pointer: fine)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const updateGlassLight = (event) => {
    const bounds = glassNav.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    glassNav.style.setProperty("--glass-x", `${x.toFixed(1)}%`);
    glassNav.style.setProperty("--glass-y", `${y.toFixed(1)}%`);
  };

  const resetGlassLight = () => {
    glassNav.style.setProperty("--glass-x", "50%");
    glassNav.style.setProperty("--glass-y", "20%");
  };

  if (finePointer.matches && !reduceMotion.matches) {
    glassNav.addEventListener("pointermove", updateGlassLight);
    glassNav.addEventListener("pointerleave", resetGlassLight);
  }
})();
