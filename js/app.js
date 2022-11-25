const onBodyLoadHandler = () => {
  const preloadArea = document.querySelector(".preload");
  const checkAnimation = document.querySelector(".checkmark")
  preloadArea.classList.add("hidden");
  document.body.classList.remove("still-load");
  checkAnimation.classList.add("on");
};
