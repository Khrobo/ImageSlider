// Variables
let pictures = ["https://images.alphacoders.com/446/thumb-1920-44633.jpg",
"https://images4.alphacoders.com/969/thumb-1920-96964.jpg",
"https://images.alphacoders.com/582/thumb-1920-58221.jpg",
"https://images.alphacoders.com/907/thumbbig-90711.jpg",
"https://images2.alphacoders.com/632/thumbbig-63250.jpg",
"https://images5.alphacoders.com/856/thumbbig-856886.jpg",
"https://images.alphacoders.com/220/thumbbig-220301.jpg"]
let left = document.querySelector(".buttonleft")
let right = document.querySelector(".buttonright")
let i = 0;

// Event listeners

left.addEventListener("click", transitionLeft)
right.addEventListener("click", transitionRight)

// Functions
function transitionRight() {
    i++;
    document.querySelector(".imgcontain").src = `${pictures[i]}`;
    console.log(i);
    if (i >= 6) {
        i = -1;
    }
}

function transitionLeft() {
    i--;
    console.log(i);
    if (i == -1) {
        i = 6;
    }
    document.querySelector(".imgcontain").src = `${pictures[i]}`;
}



