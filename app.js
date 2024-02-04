

const b = document.querySelector("button.no");
let tryCount = 0;

b.addEventListener("mouseover", handleMouseOver);

function handleMouseOver() {
    tryCount++;

    // Move and hide the button after 4 to 5 tries
    if (tryCount >= 4 && tryCount <= 5) {
        moveAndDisappear();
    } else {
        moveButton();
    }
}

function moveButton() {
    const i = Math.floor(Math.random() * 500) + 6;
    const j = Math.floor(Math.random() * 500) + 6;

    b.style.left = i + "px";
    b.style.top = j + "px";
}

function moveAndDisappear() {
    // Make the button unclickable
    b.style.pointerEvents = "none";

    // Move right, then left, then top, then down
   
                
                    
                            moveTop(() => {
                                moveDown(() => {
                                    moveRight(() => {
                                        moveLeft(() => {
                    // Hide the button after completing motions
                    b.style.visibility = "hidden";
                });
            });
        });
    });
}

function moveRight(callback) {
    const i = Math.floor(Math.random() * 500) +10 ;
    b.style.left = i + "px";
    setTimeout(callback, 10); // Move left after 1 second
}

function moveLeft(callback) {
    const i = Math.floor(Math.random() * 500) + 10;
    b.style.left = i + "px";
    setTimeout(callback, 10); // Move top after 1 second
}

function moveTop(callback) {
    const j = Math.floor(Math.random() * 500) + 10;
    b.style.top = j + "px";
    setTimeout(callback, 10); // Move down after 1 second
}

function moveDown(callback) {
    const j = Math.floor(Math.random() * 500) + 10;
    b.style.top = j + "px";
    setTimeout(callback, 10); // Call the callback function after 1 second
}
const yesButtonClicked = localStorage.getItem('yesButtonClicked');

function handleYesClick() {
    // Set the flag in localStorage
    localStorage.setItem('yesButtonClicked', 'true');
    // Redirect to finalpage.html
    window.location.href = 'finalpage.html';
}
