document.addEventListener('DOMContentLoaded', (event) => {
    const btn1 = document.querySelector('.quick-view-button1');
    const popup1 = document.getElementById('popup1');
    const span1 = document.getElementsByClassName('close1')[0];
    btn1.onclick = function() {
        popup1.style.display = 'block';
    };
    span1.onclick = function() {
        popup1.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === popup1) {
            popup1.style.display = 'none';
        }
    };
});


document.addEventListener('DOMContentLoaded', (event) => {
    const btn2 = document.querySelector('.quick-view-button2');
    const popup2 = document.getElementById('popup2');
    const span2 = document.getElementsByClassName('close2')[0];
    btn2.onclick = function() {
        popup2.style.display = 'block';
    };
    span2.onclick = function() {
        popup2.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === popup2) {
            popup2.style.display = 'none';
        }
    };
});