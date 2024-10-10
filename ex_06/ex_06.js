particlesJS('particles1', {
    particles: {
        number: { value: 80 },
        color: { value: "#ff0000" },
        shape: {
            type: "circle",
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff0000",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6
        }
    }
});

particlesJS('particles2', {
    particles: {
        number: { value: 50 },
        color: { value: "#00ff00" },
        shape: {
            type: "triangle",
        },
        size: {
            value: 5,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#00ff00",
            opacity: 0.6,
            width: 2
        },
        move: {
            enable: true,
            speed: 4
        }
    }
});

particlesJS('particles3', {
    particles: {
        number: { value: 100 },
        color: { value: "#0000ff" },
        shape: {
            type: "polygon",
            polygon: {
                nb_sides: 6
            }
        },
        size: {
            value: 4,
            random: true,
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none"
        }
    }
});

particlesJS('particles4', {
    particles: {
        number: { value: 60 },
        color: { value: "#ffff00" },
        shape: {
            type: "star",
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: "#ffff00",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 5,
            direction: "right"
        }
    }
});