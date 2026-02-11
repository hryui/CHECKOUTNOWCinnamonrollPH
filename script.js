onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const nextBtn = document.getElementById("nextID");
  const closeBtn = document.getElementById("closeBtn");
  


window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");

  function startMusic() {
    music.play();
    document.removeEventListener("Kimie!", startMusic);
  }

  document.addEventListener("Kimie!", startMusic);
});




  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
  });
  
