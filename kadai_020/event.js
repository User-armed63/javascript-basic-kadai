const buttonClickEvent = document.getElementById('btn');

const text = document.getElementById('text');

buttonClickEvent.addEventListener('click',() => {
    text.textContent = 'ボタンをクリックしました';
});