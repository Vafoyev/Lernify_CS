import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine } from '@tsparticles/engine'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.4 } },
          },
        },
        particles: {
          color: { value: ['#00f0ff', '#a855f7', '#3b82f6'] },
          links: {
            color: '#00f0ff',
            distance: 160,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
          number: {
            density: { enable: true, width: 1920, height: 1080 },
            value: 80,
          },
          opacity: { value: { min: 0.15, max: 0.5 } },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  )
}
