import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

type LearnMoreScreenProps = {
  onBack: () => void
}

export function LearnMoreScreen({ onBack }: LearnMoreScreenProps) {
  return (
    <motion.section
      key="learn-more"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-3xl space-y-8 text-left"
    >
      <h2 className="font-title text-3xl text-center leading-tight md:text-5xl">
        SABER MÁS
      </h2>

      <article className="space-y-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-card)]/70 p-5 md:p-8">
        <div className="space-y-3">
          <h3 className="font-title text-2xl md:text-3xl">¿Qué es exactamente la Apuesta de Pascal?</h3>
          <p className="text-sm leading-relaxed text-[color:var(--color-foreground)]/95 md:text-base">
            En el siglo XVII, Blaise Pascal propuso una idea sencilla: si Dios existe y crees en Él, la recompensa sería infinita;
            si Dios no existe y crees, no pierdes mucho.
          </p>
          <p className="text-sm leading-relaxed text-[color:var(--color-secondary)] md:text-base">
            Por eso, Pascal decía que creer parece una opción racional. Este argumento no intenta demostrar que Dios exista;
            intenta mostrar que creer sería una decisión prudente.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-title text-xl md:text-2xl">¿Dónde surgen las dudas filosóficas?</h4>

          <div className="space-y-2">
            <p className="font-medium text-[color:var(--color-foreground)]">1. Solo considera dos escenarios</p>
            <p className="text-sm leading-relaxed text-[color:var(--color-secondary)] md:text-base">
              La apuesta funciona si solo hay dos opciones: el Dios correcto existe o no existe ningún dios. Pero la realidad podría ser
              más compleja: diferentes concepciones de lo divino, una deidad que valore la honestidad más que el miedo, una deidad que
              no premie la fe estratégica, o incluso ningún dios.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-[color:var(--color-foreground)]">2. ¿Se puede elegir creer?</p>
            <p className="text-sm leading-relaxed text-[color:var(--color-secondary)] md:text-base">
              La apuesta asume que creer es una decisión voluntaria, como apostar. Pero creer también implica convicción interior.
              Queda abierta la pregunta: ¿puede alguien convencerse solo porque le conviene?
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-[color:var(--color-foreground)]">3. El problema de la intención</p>
            <p className="text-sm leading-relaxed text-[color:var(--color-secondary)] md:text-base">
              Si una deidad es omnipotente y omnisciente, conocería pensamientos, motivaciones, dudas e intenciones. Si alguien cree
              solo por conveniencia, ¿eso cuenta como fe auténtica?
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-title text-xl md:text-2xl">Explicación simple</h4>
          <p className="text-sm leading-relaxed text-[color:var(--color-secondary)] md:text-base">
            Imagina que alguien dice: “Es mejor creer por si acaso”. Es como llevar paraguas todos los días por si llueve. Pero aquí
            puede haber muchos escenarios: diferentes tipos de dioses, uno que valore la honestidad, uno que no quiera que finjas creer,
            o que no exista ninguno. Entonces no es tan simple como “por si acaso”.
          </p>
          <p className="text-sm leading-relaxed text-[color:var(--color-secondary)] md:text-base">
            Además, si un dios sabe todo lo que piensas, también sabría si crees solo por miedo. Tal vez lo más importante no es apostar,
            sino ser sincero.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-title text-xl md:text-2xl">Cierre</h4>
          <p className="text-sm leading-relaxed text-[color:var(--color-foreground)]/95 md:text-base">
            La apuesta de Pascal no es necesariamente falsa. Pero puede depender de simplificaciones que no todos aceptan. La pregunta no
            es solo “¿conviene creer?”, sino también “¿es la realidad tan simple como esa apuesta asume?”.
          </p>
        </div>
      </article>

      <div className="flex justify-center">
        <Button size="lg" variant="outline" onClick={onBack} className="min-w-52">
          Volver
        </Button>
      </div>
    </motion.section>
  )
}
