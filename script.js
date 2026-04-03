function startAnimation() {
    let box = document.getElementById("box");
    let position = 0;
    let direction = 1;

    let colors = ["red", "yellow", "green"];
    let colorIndex = 0;

    let animation = setInterval(frame, 10);

    function frame() {
        if (position >= 300 || position <= 0) {
            direction *= -1;

            // Change color on bounce
            colorIndex = (colorIndex + 1) % colors.length;
            box.style.backgroundColor = colors[colorIndex];
        }

        position += direction * 2;
        box.style.left = position + "px";
    }
}