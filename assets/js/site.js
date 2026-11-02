const animationContainer = document.getElementById("bear-animation");

if (animationContainer) {
    if (typeof lottie === "undefined") {
        console.error("Could not load the Lottie animation player.");
    } else {
        lottie.loadAnimation({
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "assets/bearlottiefiles.json"
        });
    }
}

const riveCanvas = document.getElementById("rive-animation");

if (riveCanvas) {
    if (typeof rive === "undefined") {
        console.error("Could not load the Rive animation player.");
    } else {
        const riveAnimation = new rive.Rive({
            src: `assets/untitled.riv?v=${Date.now()}`,
            canvas: riveCanvas,
            autoplay: true,
            animations: ["Timeline 1"],
            onLoad: () => {
                riveAnimation.resizeDrawingSurfaceToCanvas();
            },
            onLoadError: (error) => console.error("Could not load the Rive animation.", error)
        });
    }
}