import Particles from 'react-tsparticles'


const ParticlesEffect = () => {
    return (
        <div className="w-full h-full absolute top-0 left-0   pointer-events-none" style={{zIndex: 1}}>
        <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.4,
                size: 20,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#52eae0",
            },
            links: {
              color: "#52eae0",
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: .1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: .6,
            },
            shape: {
              type: "polygon",
              "stroke": {
          "width": 1
        },
        "polygon": {
          "nb_sides": 3
        },
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
        </div>
    )
}

export default ParticlesEffect
