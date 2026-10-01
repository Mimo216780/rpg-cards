# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Svar på frågorna

**1. Vad gör map?**
.map() går igenom listan sak för sak och gör om dem till nya saker. Det är som ett löpande band i en fabrik.

**2. Vad gör filter och varför inte splice?**
.filter() sparar bara det vi vill ha kvar och slänger resten (som en sil). Vi använder inte .splice() för att man får inte ändra i Reacts minne (state) direkt.

**3. Vad är key?**
key är som ett ID-nummer för React. Det hjälper React att hålla koll på vilken sak i listan som har ändrats. Det syns inte på skärmen.


## Buggar i trasig-backup:
1. Använder push() istället för setTodos med spread operator.
2. Använder splice() istället för filter() vid borttagning.
3. Kör setDraft direkt i onChange istället för en callback/funktion.
