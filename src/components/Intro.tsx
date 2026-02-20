import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

type IntroProps = {
  onStart: () => void
}

export function Intro({ onStart }: IntroProps) {
  return (
    <motion.section
      key="intro"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-3xl space-y-12 text-center"
    >
      <div className="space-y-8">
        <h1 className="font-title text-4xl leading-tight text-[color:var(--color-foreground)] md:text-6xl">
          La Apuesta de Pascal
        </h1>

        <p className="text-balance text-base leading-relaxed text-[color:var(--color-foreground)]/95 md:text-xl">
          En el siglo XVII, Blaise Pascal propuso que creer en Dios es una apuesta racional.
        </p>

        <p className="text-balance text-base leading-relaxed text-[color:var(--color-secondary)] md:text-lg">
          Si Dios existe y crees, ganas infinito.
          <br />
          Si no existe y crees, no pierdes nada.
        </p>

        <p className="font-title text-2xl leading-tight text-[color:var(--color-secondary)] md:text-4xl">
          Entonces… ¿por qué no creer?
        </p>
      </div>

      <Button size="lg" onClick={onStart} className="min-w-44">
        Apostar
      </Button>
    </motion.section>
  )
}
