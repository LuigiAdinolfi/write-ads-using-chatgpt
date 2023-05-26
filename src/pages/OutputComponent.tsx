import React, {useContext, useEffect, useState} from "react";
import "./OutputComponent.css";
import {StateContext} from "../StateContext";

export function OutputComponent() {

    const {currentState, setCurrentState} = useContext(StateContext);

    let [textRequest] = React.useState(`Schreiben Sie mir ein Inserat unterteilt in 
    'Titel' und 'Beschreibung' mit folgenden Stichworten: Was: ${currentState.adType}, 
    Kategorie: ${currentState.category}, Bezahlung: ${currentState.paymentMethod}, 
    Kontakt: ${currentState.contactMethod}`);

    const [message, setMessage] = useState(null)


    useEffect(() => {
        const getOutput = async () => {
            console.log(textRequest)
            const options = {
                method: "POST",
                body: JSON.stringify({
                    message: textRequest,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            try {
                const response = await fetch('http://localhost:8000/completions', options)
                const data = await response.json()
                console.log(data)
                setMessage(data.choices[0].message.content)
            } catch (error) {
                console.error(error)
            }
        }
        getOutput();
    }, []);

    useEffect(() => {
        if (message != null) {
            setCurrentState({...currentState, output: message})
        }
    }, [message]);

    return (
        <div className="page-container">
            <div className="header">
                <div className="title">Marktplatz</div>
                <div className="back-icon-wrapper" onClick={() => window.location.href = "contact"}>
                    <img
                        className="back-icon"
                        alt=""
                        src="/left.png"
                    />
                </div>
            </div>
            <div className="frame-parent-text">
                <div className="text-settings-parent">
                    <div className="text">{message}</div>
                </div>
            </div>
            <div className="refresh-icon-wrapper" onClick={
                // getOutput
                () => window.location.href = "output"
            }>
                <img
                    className="refresh-icon"
                    alt=""
                    src="/refresh.png"
                />
            </div>
            <div className="frame-parent">
                <div className="output-settings-parent">
                    <div className="output">Inserat publizieren?</div>
                </div>
            </div>
            <div className="grid-container-output-select">
                <div className="reject-button" onClick={() => window.location.href = "output"}>
                    <div className="icon-wrapper-reject">
                        <img
                            className="icon-reject"
                            alt=""
                            src="/cross.png"
                        />
                    </div>
                </div>

                <div className="confirm-button" onClick={
                    () => {
                        window.location.href = "/"
                    }
                }>
                    <div className="icon-wrapper-confirm">
                        <img
                            className="icon-confirm"
                            alt=""
                            src="/check.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutputComponent;
