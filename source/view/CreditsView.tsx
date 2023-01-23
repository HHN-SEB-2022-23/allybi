/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"

/**
 * The credits menu view.
 *
 * This view is responsible for rendering the credits menu.
 */
export const CreditsView = observer(() => {
    const _creditsViewModel = inject("CreditsViewModel")

    return (
        <div className="menu document">
            <h1 className="menu__title">Credits</h1>
            <button onClick={_creditsViewModel.onClickBack} className="menu__item">Zurück</button>
            <h2 className="document__subtitle">Wie ist dieses Spiel entstanden?</h2>
            <p>
                Dieses Spiel wurde von{" "}
                {new (Intl as any).ListFormat("de-DE", {}).format(names)}{" "}
                im Rahmen der "Design Thinking" Vorlesung im ersten Semester des Studiengangs Software Engineering
                erstellt. Eng begleitet wurden wir dabei von der Antidiskriminierungsstelle Heilbronn, welche uns
                bei der Erstellung der Inhalte mit Rat und Tat zur Seite stand.
            </p>

            <h2 className="document__subtitle">Warum?</h2>
            <p>
                Weil wir's können?
            </p>

            <h2 className="document__subtitle">Source Code</h2>
            <p>
                <ExternalLink href="https://github.com/HHN-SEB-2022-23/allybi">https://github.com/HHN-SEB-2022-23/allybi</ExternalLink>
            </p>
            <p>Pull requests werden gerne gesehen &lt;3</p>

            <h2 className="document__subtitle">First Party Dependencies</h2>
            <ul>
                <li><ExternalLink href="https://reactjs.org/">React</ExternalLink> Frontend</li>
                <li><ExternalLink href="https://vitejs.dev/">Vite</ExternalLink> Bundler</li>
                <li><ExternalLink href="https://www.typescriptlang.org/">TypeScript</ExternalLink> Typing</li>
                <li><ExternalLink href="https://sass-lang.com/">Sass</ExternalLink> CSS Preprocessor</li>
                <li><ExternalLink href="https://mobx.js.org/">MobX</ExternalLink> State Management</li>
                <li><ExternalLink href="https://github.com/Frank-Mayer/dilight">dilight</ExternalLink> Dependency Injection</li>
                <li><ExternalLink href="https://eslint.org/">ESLint</ExternalLink> Linter</li>
                <li><ExternalLink href="https://dicebear.com/">DiceBear</ExternalLink> Avatar generation</li>
                <li><ExternalLink href="https://github.com/jakearchibald/idb">idb</ExternalLink> IndexedDB Promise Wrapper</li>
                <li><ExternalLink href="https://xstate.js.org/">XState</ExternalLink> State Machine</li>
            </ul>
        </div>
    )
})

const ExternalLink = (props: {href:string, children: string}) =>
    <a target="_blank"
        className="menu__link"
        href={props.href} rel="noopener noreferrer">
        {props.children}
    </a>

const shuffle = (a: Array<string>) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

const names = shuffle(["Antonia Friese", "Büsra Bayiksirt", "Jan-Niklas Jäger", "Felix Marzioch", "Frank Mayer", "René Ott"])
