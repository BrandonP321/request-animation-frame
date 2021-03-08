var box = document.querySelector('.box')
var isAnimating;
var start; // actual time the animation started
var stopId; // animation id
var progress; // elapsed time since animation started

function step(timestamp) { // timestamp is current time
    // if animation has not started or has reached end of animation (when progress is at 800px) start animation over by setting start to current time
    if (!start || progress > 800) start = timestamp;
    progress = (timestamp - start) / 5 + 10; // dividing by 10 gives the amount of pixels we want to move the box per unit of time (+ 10 since we want the animation to start 10 px from the left)
    box.style.left = progress + 'px';
    stopId = window.requestAnimationFrame(step); // request next frame in animation
}

function toggleAnimation() {
    if (!isAnimating) {
        isAnimating = true;
        window.requestAnimationFrame(step);
    } else {
        isAnimating = false;
        cancelAnimationFrame(stopId)
        start = null;
    }
}