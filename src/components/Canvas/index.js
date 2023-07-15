import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Canvas() {
    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {}, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                name: "Mouse Attract",
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: "#ff0000",
                        animation: {
                            enable: true,
                            speed: 20,
                            sync: true,
                        },
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 3,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 100,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 6,
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "attract",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            links: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 0.8,
                        },
                        attract: {
                            distance: 600,
                            duration: 0.4,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            quantity: 4,
                        },
                        remove: {
                            quantity: 2,
                        },
                    },
                },
                background: {
                    color: "#000000",
                },
            }}
        />
    );
}

export default Canvas;
