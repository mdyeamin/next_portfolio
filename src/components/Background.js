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
                mode: ["bubble", "attract"], // Elegant hovering response (no spider web lines)
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
              },
              attract: {
                distance: 250,
                duration: 0.4,
                factor: 4, // Gentle magnetic pull to cursor
                speed: 1,
              },
              push: {
                quantity: 4,
              },
            },
          },
          particles: {
            color: {
              value: "var(--particle-color, #ffffff)", // Dynamically adapts to dark/light theme
            },
            links: {
              enable: false, // Properly removed spider net links completely
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.8, // Calming, ambient velocity
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60, // Cleaner density
            },
            opacity: {
              value: { min: 0.15, max: 0.45 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2 }, // Elegant, tiny celestial nodes
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;
