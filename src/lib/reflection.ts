export function buildReflection(scenario: string) {
  if (scenario === "No hay ningún Dios") {
    return "Serás juzgado por: No hay ningún Dios. Si no había nadie observando… ¿era realmente una apuesta necesaria? ¿Es lo que esperabas?"
  }

  return `Serás juzgado por: ${scenario}. ¿Era este el escenario que imaginabas al apostar? ¿Cuál crees que será la decisión final?`
}
