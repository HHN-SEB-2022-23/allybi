# Allybi – vom Alibi zum Ally

[![Test](https://github.com/HHN-SEB-2022-23/text-based-adventure-game/actions/workflows/test.yml/badge.svg)](https://github.com/HHN-SEB-2022-23/text-based-adventure-game/actions/workflows/test.yml)

[![this product is ai free](https://this-product-is-ai-free.github.io/badge.svg)](https://this-product-is-ai-free.github.io)

Projekt der Vorlesung Design Thinking an der Hochschule Heilbronn, nach Auftrag des [Stadt & Kreis Jugend Ring Heilbronn e.V.](https://www.skjr-hn.de)

## Nice to know

Wir verwenden MobX für das State Management, dazu wird im Konstruktor der ViewModels und Models die `makeAutoObservable` Funktion ausgeführt. Diese sorgt dafür, dass alle Properties des Objektes, die nicht mit einem `_` beginnen, als Observable deklariert werden. Außerdem werden alle Setter automatisch als Actions deklariert. Das heißt, dass alle Änderungen an den Properties über die Setter vorgenommen werden müssen. Das ist wichtig, da sonst die Observer nicht über Änderungen informiert werden.

Die Views sind functional components (React), die über die `observer` Funktion von MobX deklariert werden. Diese sorgt dafür, dass die View bei Änderungen der Observables (Model / ViewModel) neu gerendert wird.

## Development

### JavaScript Runtime installieren

Empfohlen: [Node](https://nodejs.org)

#### Alternativen

- [Bun](https://bun.sh)
- [Deno](https://deno.land)

### Installieren der Dependencies

```bash
npm install
```

### Starten des Dev-Servers

```bash
npm run dev
```

### Builden der Anwendung (für den Produktivbetrieb)

```bash
npm run build
```

## Autoren

- René Ott
- Antonia Friese
- Frank Mayer
- Felix Marzioch
- Jan-Niklas Jäger
- Büsra Bayiksirt

## First Party Dependencies

- [React](https://reactjs.org) Frontend
- [Parcel](https://parceljs.org) Bundler
- [TypeScript](https://www.typescriptlang.org) Typing
- [Sass](https://sass-lang.com) CSS Preprocessor
- [MobX](https://mobx.js.org) State Management
- [dilight](https://github.com/Frank-Mayer/dilight) Dependency Injection
- [ESLint](https://eslint.org) Linter
- [DiceBear](https://dicebear.com) Avatar generation
- [idb](https://github.com/jakearchibald/idb) IndexedDB Promise Wrapper
- [XState](https://xstate.js.org) State Machine

## Klassendiagramm

![](https://raw.githubusercontent.com/HHN-SEB-2022-23/allybi/main/uml/Class%20Diagram.svg)
