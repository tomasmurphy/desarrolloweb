let image = document.querySelector('.image');
let select = document.getElementById('effect');

select.addEventListener('change', function (e) {
  image.className = `image ${this.value}`;
});
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // or document.querySelector('#boundary')
})
$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})
