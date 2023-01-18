import React from "react"
import { observer } from "mobx-react"
import { inject } from "../lib/globalDI"

/**
 * The main menu view.
 *
 * This view is responsible for rendering the main menu.
 */
export const QAView = observer(() => {
    const _qaViewModel = inject("QAViewModel")

    return (
        <div className="menu document">
            <h1 className="menu__title">Q&A</h1>
            <button onClick={_qaViewModel.onClickBack} className="menu__item">Zurück</button>
            <h2 className="document__subtitle">Was ist die adi?</h2>
            <p>
                Die adi.hn, die Antidiskriminierungsstelle Heilbronn, gibt es
                seit 2021. Sie ist Anlaufstelle für alle, die Diskriminierung
                erleben, mehr über Antidiskriminierung erfahren möchten und sich
                für eine respektvolle Gesellschaft auf Augenhöhe engagieren
                wollen. Unsere Beratungsangebote und viele der Workshops sind
                kostenfrei. Wir freuen uns über Kooperationen und Ideen, um
                gemeinsam im Stadt- und Landkreis diskriminierungssensibel
                miteinander zu leben.
                <br />

                <a href="https://www.skjr-hn.de/antidiskriminierungsstelle-heilbronn/" target="_blank" rel="noopener noreferrer"> Seite der adi.hn</a>
            </p>

            <h2 className="document__subtitle">Wie sieht das Ehrenamt bei der adi aus?</h2>
            <p>
                Lass dich als Multiplikator*in für Workshops ausbilden, hilf
                uns, unseren Social Media Kanal zu betreuen oder Grafiken zu
                erstellen, begleite uns auf Veranstaltungen oder entwickle
                eigene Ideen, die wir unterstützen können.Ehrenamt bei der
                adi.hn ist vielfältig und sinnstiftend.
            </p>

            <h2 className="document__subtitle">Ich habe kaum Zeit. Kann ich trotzdem helfen?</h2>
            <p>Folgt noch</p>

            <h2 className="document__subtitle">Wo findet das Ehrenamt statt?</h2>
            <p>Folgt noch</p>

            <br />

            <p>Wir freuen uns auf deine Anfrage unter adi@skjr-hn.de</p>

        </div>
    )
})
