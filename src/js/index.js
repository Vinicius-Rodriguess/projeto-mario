const modal = document.querySelector(".modal")
const botaoFecharModal = document.querySelector (".fechar-modal")
const botaoTrailer = document.querySelector(".botao-trailer")
const video = document.getElementById("video")
const linkDoVideo = video.src

const alternarModal = () =>  modal.classList.toggle("aberto")

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
});
