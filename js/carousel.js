let image = document.querySelector('.image');
let select = document.getElementById('effect');

select.addEventListener('change', function (e) {
  image.className = `image ${this.value}`;
});