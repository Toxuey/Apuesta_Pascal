import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { Decision, type Choice } from "@/components/Decision"
import { FinalScreen } from "@/components/FinalScreen"
import { HiddenAssumptions } from "@/components/HiddenAssumptions"
import { Intro } from "@/components/Intro"
import { LearnMoreScreen } from "@/components/LearnMoreScreen"
import { Result } from "@/components/Result"
import { Roulette } from "@/components/Roulette"
import { metaphysicalScenarios } from "@/lib/scenarios"

type Stage =
  | "intro"
  | "assumptions"
  | "decision"
  | "roulette"
  | "result"
  | "final"
  | "learn-more"

function App() {
  const [stage, setStage] = useState<Stage>("intro")
  const [, setChoice] = useState<Choice>("no-se")
  const [scenario, setScenario] = useState(metaphysicalScenarios[0])

  const resetFlow = () => {
    setChoice("no-se")
    setScenario(metaphysicalScenarios[0])
    setStage("intro")
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.07),transparent_45%)]"
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12 md:px-12">
        <AnimatePresence mode="wait">
          {stage === "intro" ? <Intro onStart={() => setStage("assumptions")} /> : null}

          {stage === "assumptions" ? (
            <HiddenAssumptions onContinue={() => setStage("decision")} />
          ) : null}

          {stage === "decision" ? (
            <Decision
              onSelect={(selectedChoice) => {
                setChoice(selectedChoice)
                setStage("roulette")
              }}
            />
          ) : null}

          {stage === "roulette" ? (
            <Roulette
              scenarios={metaphysicalScenarios}
              onComplete={(selectedScenario) => {
                setScenario(selectedScenario)
                setStage("result")
              }}
            />
          ) : null}

          {stage === "result" ? (
            <Result scenario={scenario} onContinue={() => setStage("final")} />
          ) : null}

          {stage === "final" ? (
            <FinalScreen onRestart={resetFlow} onLearnMore={() => setStage("learn-more")} />
          ) : null}

          {stage === "learn-more" ? (
            <LearnMoreScreen onBack={() => setStage("final")} />
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  )
}

export default App
