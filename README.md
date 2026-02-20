# La Apuesta de Pascal

Experimento web interactivo sobre la Apuesta de Pascal, diseñado con una estética filosófica, minimalista y oscura.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Qué construimos

Aplicación por etapas con animaciones suaves y enfoque reflexivo:

1. **Intro**
- Presenta la idea clásica de Pascal.

2. **Supuestos ocultos**
- Expone tres supuestos filosóficos clave.
- Botón de avance siempre visible para no perder el foco de la ruleta.

3. **Decisión del usuario**
- Opciones: `Creo`, `No creo`, `No estoy seguro`.

4. **Ruleta filosófica**
- Ruleta visual con `conic-gradient`.
- Flecha superior y desaceleración natural.
- Texto central dinámico sincronizado con el giro.
- Al detenerse, resultado fijo + botón **Continuar reflexión**.

5. **Resultado reflexivo**
- Mensaje final en formato:
  - `Serás juzgado por: [resultado] ...`
- Caso especial para `No hay ningún Dios`.

6. **Pantalla final**
- Cierre filosófico.
- Botones: `Intentar de nuevo` y `SABER MÁS`.

7. **SABER MÁS (pantalla dedicada)**
- Explicación extendida del argumento, críticas filosóficas y cierre neutral.

## Estilo visual

- Fondo principal: `#0B0B0F`
- Fondo secundario: `#111118`
- Texto principal: `#EAEAEA`
- Texto secundario: `#9CA3AF`
- Acento: `#3B82F6`
- Tipografías: **Playfair Display** (títulos) + **Inter** (texto)

## Estructura principal

- `src/App.tsx`
- `src/components/Intro.tsx`
- `src/components/HiddenAssumptions.tsx`
- `src/components/Decision.tsx`
- `src/components/Roulette.tsx`
- `src/components/Result.tsx`
- `src/components/FinalScreen.tsx`
- `src/components/LearnMoreScreen.tsx`
- `src/lib/scenarios.ts`
- `src/lib/reflection.ts`

## Scripts

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

## Estado

- `lint`: OK
- `build`: OK

## Publicación en GitHub

Si ya configuraste el remoto, sube con:

```bash
git push -u origin main
```

Si GitHub pide autenticación, usa usuario + Personal Access Token (PAT).
