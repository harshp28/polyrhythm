const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Function to resize the canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Call the function once to set the initial size
resizeCanvas();

// Add an event listener to resize the canvas dynamically
window.addEventListener('resize', resizeCanvas);

        // Update the animation function and other logic if needed
const trackCenter = { x: canvas.width / 2, y: canvas.height / 2 };
const trackMinRadius = 50;
const trackStep = 15;
const ballRadius = 6;
const ballMinSpeed = 0.01;
const ballSpeedStep = -0.0001;

         const soundFrequencies = [
            1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880,
            783.99, 698.46, 659.25, 587.33, 523.25, 493.88, 440, 392, 349.23,
            329.63, 293.66, 261.63
         ];

         const tracks = [];
         const balls = [];
         const N = 20;

         for (let i = 0; i < N; i++) {
            const trackRadius = trackMinRadius + i * trackStep;
            const ballSpeed = ballMinSpeed + i * ballSpeedStep;
            const ballSoundFrequency = soundFrequencies[i];
            const hue = (i * 360) / N;
            const track = new Track(trackCenter, trackRadius, hue);
            const ball = new Ball(track, ballRadius, ballSpeed, ballSoundFrequency, hue);
            tracks.push(track);
            balls.push(ball);
         }


         animate();

         function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            tracks.forEach((track) => track.draw(ctx));
            balls.forEach((ball) => ball.move());
            balls.forEach((ball) => ball.draw(ctx));
            requestAnimationFrame(animate);
         }