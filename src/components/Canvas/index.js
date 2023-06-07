import Particles from "react-particles";
import { loadLinksPreset } from "tsparticles-preset-links";

function Canvas () {
    async function customInit(engine) {
        // this adds the preset to tsParticles, you can safely use the
        await loadLinksPreset(engine);
    }

    const options = {
        preset: 'links',
    }

    return <Particles options={options} init={customInit} />;
}

export default Canvas;
