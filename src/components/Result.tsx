import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { buildReflection } from "@/lib/reflection"

type ResultProps = {
  scenario: string
  onContinue: () => void
}

export function Result({ scenario, onContinue }: ResultProps) {
  const reflection = buildReflection(scenario)

  return (
    <motion.section
      key="result"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-3xl space-y-10 text-center"
    >
      <p className="text-sm uppercase tracking-[0.16em] text-[color:var(--color-secondary)]">
        Resultado Reflexivo
      </p>

      <h2 className="font-title text-3xl leading-tight text-[color:var(--color-foreground)] md:text-5xl">
        {reflection}
      </h2>

      <Button size="lg" onClick={onContinue} className="min-w-44">
        Continuar
      </Button>
    </motion.section>
  )
}
