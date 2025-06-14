const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  document.querySelector(".img-about img").addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });


  function closeModal() {
    modal.style.display = "none";
  }