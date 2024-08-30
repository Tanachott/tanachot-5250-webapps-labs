const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.addEventListener('click', function onClick(event) {
    var rannumber1 = Math.floor(Math.random() * 256);
    var rannumber2 = Math.floor(Math.random() * 256);
    var rannumber3 = Math.floor(Math.random() * 256);
    var ranrgb = "rgb(" + rannumber1 + "," + rannumber2 + "," + rannumber3 + ")";
    box.style.color = ranrgb;
});