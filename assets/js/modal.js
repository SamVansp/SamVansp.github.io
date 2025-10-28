document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");
  const learnMoreButtons = document.querySelectorAll(".learn-more");

  learnMoreButtons.forEach(button => {
    button.addEventListener("click", function () {
      const slide = this.closest(".slide");
      const title = slide.getAttribute("data-title");
      const desc = slide.getAttribute("data-desc");
      const img = slide.getAttribute("data-img");

      modalBody.innerHTML = `
        <h2>${title}</h2>
        <img src="${img}" alt="${title}" style="width:100%; border-radius:8px; margin-bottom:1rem;">
        <p>${desc}</p>
      `;

      modal.classList.add("open");
      document.body.classList.add("modal-open");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      document.body.classList.remove("modal-open");
    }
  });
});
