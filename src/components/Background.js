"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return <div className="fixed inset-0 -z-10 bg-transparent pointer-events-none"></div>;
  }

  return (
    <div className="fixed inset-0 -z-10 bg-transparent pointer-events-none">
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: ["grab", "attract"], // Magnetic pull and spider net
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 250,
                links: {
                  opacity: 0.6,
                  color: "#00d2ff",
                },
              },
              attract: {
                distance: 300,
                duration: 0.4,
                factor: 3, // Strength of the magnetic pull
                speed: 1
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#3a7bd5",
              distance: 180,
              enable: true,
              opacity: 0.15, // Subtle and thin
              width: 0.5,    // Minimalist vibe
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1, // Slower speed for a calm feel
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2 }, // Smaller particles
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
