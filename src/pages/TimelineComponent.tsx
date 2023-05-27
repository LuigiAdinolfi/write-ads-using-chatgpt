import {useLocation} from "react-router-dom";

export function TimelineComponent() {

    const {pathname} = useLocation();
    return (
        <div className="container">
            <ul className="timeline">
                {pathname === "/" && <>
                    <li className="active-tl">Inserattyp</li>
                    <li>Kategorie</li>
                    <li>Zahlungsmittel</li>
                    <li>Kontaktmöglichkeit</li>
                    <li>Ausgabe</li>
                </>}
                {pathname === "/categories" && <>
                    <li className="active-tl">Inserattyp</li>
                    <li className="active-tl">Kategorie</li>
                    <li>Zahlungsmittel</li>
                    <li>Kontaktmöglichkeit</li>
                    <li>Ausgabe</li>
                </>}
                {pathname === "/payment" && <>
                    <li className="active-tl">Inserattyp</li>
                    <li className="active-tl">Kategorie</li>
                    <li className="active-tl">Zahlungsmittel</li>
                    <li>Kontaktmöglichkeit</li>
                    <li>Ausgabe</li>
                </>}
                {pathname === "/contact" && <>
                    <li className="active-tl">Inserattyp</li>
                    <li className="active-tl">Kategorie</li>
                    <li className="active-tl">Zahlungsmittel</li>
                    <li className="active-tl">Kontaktmöglichkeit</li>
                    <li>Ausgabe</li>
                </>}
                {pathname === "/output" && <>
                    <li className="active-tl">Inserattyp</li>
                    <li className="active-tl">Kategorie</li>
                    <li className="active-tl">Zahlungsmittel</li>
                    <li className="active-tl">Kontaktmöglichkeit</li>
                    <li className="active-tl">Ausgabe</li>
                </>}
            </ul>
        </div>
    )
}

export default TimelineComponent

