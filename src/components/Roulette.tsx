import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type RouletteProps = {
  scenarios: string[]
  onComplete: (scenario: string) => void
}

const SPIN_DURATION_MS = 5600

function normalizeRotation(value: number) {
  return ((value % 360) + 360) % 360
}

export function Roulette({ scenarios, onComplete }: RouletteProps) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [isResolved, setIsResolved] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [displayScenario, setDisplayScenario] = useState(
    scenarios[0] ?? "Marco metafísico desconocido"
  )
  const [resolvedScenario, setResolvedScenario] = useState("")
  const [stopPulse, setStopPulse] = useState(0)

  const frameRef = useRef<number | null>(null)
  const spinStartRef = useRef<number>(0)
  const spinFromRef = useRef<number>(0)
  const spinToRef = useRef<number>(0)
  const lastIndexRef = useRef<number>(0)
  const sliceAngle = 360 / scenarios.length

  const wheelBackground = useMemo(() => {
    const slices = scenarios
      .map((_, index) => {
        const start = index * sliceAngle
        const end = (index + 1) * sliceAngle
        const fill = index % 2 === 0 ? "rgba(17,17,24,0.95)" : "rgba(24,24,34,0.95)"
        const borderStart = Math.max(start, end - 0.7)
        return `${fill} ${start}deg ${borderStart}deg, rgba(59,130,246,0.35) ${borderStart}deg ${end}deg`
      })
      .join(", ")

    return `conic-gradient(${slices})`
  }, [scenarios, sliceAngle])

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const indexForRotation = (rotationValue: number) => {
    const normalized = normalizeRotation(-rotationValue)
    const safeIndex = Math.floor(normalized / sliceAngle + 1e-6)
    return safeIndex % scenarios.length
  }

  const alignToWinner = (fromRotation: number, winnerIndex: number, minTurns: number) => {
    const desired = normalizeRotation(-winnerIndex * sliceAngle)
    const current = normalizeRotation(fromRotation)
    const delta = (desired - current + 360) % 360
    return fromRotation + minTurns * 360 + delta
  }

  const spin = () => {
    if (isSpinning) {
      return
    }

    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current)
    }

    setIsResolved(false)
    const winnerIndex = Math.floor(Math.random() * scenarios.length)
    const extraTurns = 6 + Math.floor(Math.random() * 2)
    const targetRotation = alignToWinner(rotation, winnerIndex, extraTurns)
    spinStartRef.current = performance.now()
    spinFromRef.current = rotation
    spinToRef.current = targetRotation
    lastIndexRef.current = indexForRotation(rotation)
    setIsSpinning(true)

    const animateSpin = (now: number) => {
      const elapsed = now - spinStartRef.current
      const progress = Math.min(elapsed / SPIN_DURATION_MS, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const currentRotation =
        spinFromRef.current + (spinToRef.current - spinFromRef.current) * eased

      setRotation(currentRotation)

      const currentIndex = indexForRotation(currentRotation)
      if (currentIndex !== lastIndexRef.current) {
        lastIndexRef.current = currentIndex
        setDisplayScenario(scenarios[currentIndex] ?? "Marco metafísico desconocido")
      }

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(animateSpin)
        return
      }

      const finalIndex = indexForRotation(spinToRef.current)
      const finalScenario = scenarios[finalIndex] ?? "Marco metafísico desconocido"
      setRotation(spinToRef.current)
      setDisplayScenario(finalScenario)
      setResolvedScenario(finalScenario)
      setIsSpinning(false)
      setIsResolved(true)
      setStopPulse((prev) => prev + 1)
    }

    frameRef.current = window.requestAnimationFrame(animateSpin)
  }

  return (
    <motion.section
      key="roulette"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-3xl flex-col items-center gap-10 text-center"
    >
      <h2 className="font-title text-3xl leading-tight md:text-5xl">
        Ruleta Filosófica
      </h2>

      <div className="relative flex items-center justify-center">
        <div className="pointer-events-none absolute -top-4 z-20 h-0 w-0 border-x-10 border-t-[18px] border-x-transparent border-t-[color:var(--color-accent)] drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

        <div className="absolute h-[23.7rem] w-[23.7rem] rounded-full border border-[color:var(--color-accent)]/30 shadow-[0_0_95px_rgba(59,130,246,0.22)]" />

        <motion.div
          style={{ rotate: rotation, backgroundImage: wheelBackground }}
          className="relative flex h-[22rem] w-[22rem] items-center justify-center overflow-hidden rounded-full border border-[color:var(--color-border)] shadow-[0_0_90px_rgba(59,130,246,0.16)]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.14),rgba(11,11,15,0.08)_54%,rgba(11,11,15,0.75)_100%)]" />
        </motion.div>

        <motion.div
          key={stopPulse}
          animate={isResolved ? { scale: [1, 1.04, 1] } : { scale: 1 }}
          transition={{ duration: 0.55, ease: [0.2, 0.95, 0.25, 1] }}
          className="pointer-events-none absolute flex h-44 w-44 items-center justify-center rounded-full border border-[color:var(--color-accent)]/45 bg-[color:var(--color-background)] px-5 shadow-[0_0_30px_rgba(59,130,246,0.16)]"
        >
          <motion.p
            animate={
              isSpinning
                ? { filter: "blur(1.2px)", opacity: 0.9 }
                : { filter: "blur(0px)", opacity: 1 }
            }
            transition={
              isSpinning
                ? { duration: 0.18, ease: "linear" }
                : { duration: 0.35 }
            }
            className={cn(
              "font-title text-center leading-tight text-[color:var(--color-foreground)]",
              displayScenario === "No hay ningún Dios"
                ? "text-lg md:text-xl"
                : "text-2xl md:text-3xl"
            )}
          >
            {displayScenario}
          </motion.p>
        </motion.div>
      </div>

      <p className="max-w-xl text-sm text-[color:var(--color-secondary)] md:text-base">
        {isSpinning
          ? "Explorando posibilidades metafísicas…"
          : isResolved
            ? "El escenario quedó fijado. Tómate un momento antes de continuar."
            : "Activa el giro para revelar una posibilidad."}
      </p>

      {isResolved ? (
        <Button size="lg" onClick={() => onComplete(resolvedScenario)} className="min-w-52">
          Continuar reflexión
        </Button>
      ) : (
        <Button size="lg" onClick={spin} disabled={isSpinning} className="min-w-52">
          {isSpinning ? "Girando..." : "Giro aleatorio"}
        </Button>
      )}
    </motion.section>
  )
}
