import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export type Choice = "creo" | "no-creo" | "no-se";

type DecisionProps = {
  onSelect: (choice: Choice) => void
}

const choices: { label: string; value: Choice }[] = [
  { label: "Creo", value: "creo" },
  { label: "No creo", value: "no-creo" },
  { label: "No estoy seguro", value: "no-se" },
]

export function Decision({ onSelect }: DecisionProps) {
  return (
    <motion.section
      key="decision"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-2xl space-y-12 text-center"
    >
      <h2 className="font-title text-3xl leading-tight text-[color:var(--color-foreground)] md:text-5xl">
        Si fuera una apuesta racional, ¿qué eliges?
      </h2>

      <div className="grid gap-4">
        {choices.map((choice, index) => (
          <motion.div
            key={choice.value}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.45 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => onSelect(choice.value)}
              className="h-16 w-full text-lg"
            >
              {choice.label}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
