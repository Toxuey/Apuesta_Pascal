import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

type HiddenAssumptionsProps = {
  onContinue: () => void
}

const assumptions = [
  {
    title: "Supuesto 1",
    body: "Solo existen dos opciones: o exactamente el Dios correcto… o ningún dios.",
    question: "¿Y si existen más posibilidades?",
  },
  {
    title: "Supuesto 2",
    body: "La apuesta asume que creer es una decisión voluntaria. Pero… ¿puede alguien convencerse de algo solo porque le conviene?",
  },
  {
    title: "Supuesto 3",
    body: "¿Qué ocurre si la deidad valora sinceridad más que cálculo? ¿Una fe estratégica sería suficiente?",
  },
]

export function HiddenAssumptions({ onContinue }: HiddenAssumptionsProps) {
  return (
    <motion.section
      key="assumptions"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-3xl space-y-6 pb-24 text-center md:space-y-8"
    >
      <h2 className="font-title text-2xl leading-tight md:text-5xl">
        La apuesta parece simple.
        <br />
        Pero depende de varios supuestos.
      </h2>

      <div className="space-y-3 text-left md:space-y-4">
        {assumptions.map((assumption, index) => (
          <motion.article
            key={assumption.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 * index, ease: "easeOut" }}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/85 p-4 md:p-6"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
              {assumption.title}
            </p>
            <p className="text-sm leading-relaxed text-[color:var(--color-foreground)]/95 md:text-lg">
              {assumption.body}
            </p>
            {assumption.question ? (
              <p className="mt-2 font-title text-lg italic text-[color:var(--color-secondary)] md:mt-3 md:text-xl">
                {assumption.question}
              </p>
            ) : null}
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="sticky bottom-4 z-20 flex justify-center bg-[linear-gradient(to_top,rgba(11,11,15,0.98),rgba(11,11,15,0.6)_65%,transparent)] pt-4"
      >
        <Button size="lg" onClick={onContinue} className="min-w-52">
          Simular la apuesta
        </Button>
      </motion.div>
    </motion.section>
  )
}
