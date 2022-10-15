let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

function traerId() {
  const url = window.location;
  const hash = url.hash
  const id = hash.split("#")[1]
  return id
};
const modal = document.querySelector('#gracias');
const cerrarModal = document.querySelector('#cerrarModal');

function mostrarModal() {
  modal.classList.add("show", "d-block")
};

cerrarModal.addEventListener("click", () => {
  modal.classList.remove("show", "d-block")
})
    
traerId() === "gracias"? mostrarModal() : ""
