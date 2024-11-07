function closeModal() {
  [...document.getElementsByClassName("modal")].forEach(node => node.style.display = "none")
}