import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

type FinalScreenProps = {
  onRestart: () => void
  onLearnMore: () => void
}

export function FinalScreen({ onRestart, onLearnMore }: FinalScreenProps) {
  return (
    <motion.section
      key="final"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-3xl space-y-12 text-center"
    >
      <h2 className="font-title text-3xl leading-tight md:text-5xl">
        La apuesta de Pascal no intenta probar que Dios exista.
        <br />
        Intenta mostrar que creer sería racional.
      </h2>

      <p className="font-title text-2xl leading-tight text-[color:var(--color-secondary)] md:text-4xl">
        Pero…
        <br />
        ¿Puede una decisión ser racional
        <br />
        si el escenario está incompleto?
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" onClick={onRestart} className="min-w-52">
          Intentar de nuevo
        </Button>
        <Button size="lg" variant="outline" onClick={onLearnMore} className="min-w-52">
          SABER MÁS
        </Button>
      </div>

      <p className="mx-auto max-w-2xl text-xs text-[color:var(--color-secondary)] md:text-sm">
        Este experimento explora un argumento filosófico clásico y no pretende atacar ninguna creencia.
      </p>
    </motion.section>
  )
}
