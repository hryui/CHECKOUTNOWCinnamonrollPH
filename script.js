@ -0,0 +1,20 @@
onload = () => {
    document.addEventListener("DOMContentLoaded", () => {

    const wrapper = document.querySelector(".wrapper");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    if (!wrapper || !openBtn || !closeBtn) {
        console.error("One or more elements not found.");
        return;
    }

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

});

  
