window.addEventListener("DOMContentLoaded", function() {
    let background = document.querySelector("body");
    let color = document.getElementById("Color");
    let changeButton = document.getElementById("change-button");
    let copieButton = document.getElementById("copier-button");
    let popup = document.querySelector('.color-copie-container');
    let popupOff = document.getElementById('color-copie-off');

    function generateColor() {
        let randcolor = '';
        let choice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        for (let i = 0; i < 6; i++) {
            randcolor += choice[Math.floor(Math.random() * choice.length)];
        }
        return "#" + randcolor;
    }

    changeButton.addEventListener("click", function() {
        let randomColor = generateColor();
        color.textContent = randomColor;
        color.style.color = randomColor;
        background.style.backgroundColor = randomColor;
    });

    copieButton.addEventListener("click", function() {
        navigator.clipboard.writeText(color.innerText);
        popup.style.display = 'flex';
        popupOff.addEventListener('click', function() {
            popup.style.display = 'none';

        });
        window.addEventListener('click', function(e) {
            if (!popup.contains(e.target) && e.target !== copieButton) {
                popup.style.display = 'none';
            }
        });
    });
});
