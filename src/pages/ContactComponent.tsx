import React from "react";
import "./ContactComponent.css";
import {FullState} from "../State";

export function ContactComponent(props: { currentState: FullState }) {
    const [showEmailSettings, setShowEmailSettings] = React.useState(false)
    const [showPhoneSettings, setShowPhoneSettings] = React.useState(false)
    const [showFormSettings, setShowFormSettings] = React.useState(false)

    function selectEmailSettings() {
        setShowEmailSettings(true);
        setShowPhoneSettings(false);
        setShowFormSettings(false);
    }

    function selectPhoneSettings() {
        setShowPhoneSettings(true);
        setShowEmailSettings(false);
        setShowFormSettings(false);
    }

    function selectFormSettings() {
        setShowFormSettings(true);
        setShowEmailSettings(false);
        setShowPhoneSettings(false);
    }

    function selectContactMethod() {
        if (showEmailSettings) {
            props.currentState.contactMethod = `E-Mail: ${props.currentState.email}`
        } else if (showPhoneSettings) {
            props.currentState.contactMethod = `Telefon: ${props.currentState.phone}`
        } else if (showFormSettings) {
            props.currentState.contactMethod = `${props.currentState.form}`
        }
    }

    return (
        <div className="page-container">
            <div className="header">
                <div className="title">Marktplatz</div>
                <div className="back-icon-wrapper" onClick={() => window.location.href = "price"}>
                    <img
                        className="back-icon"
                        alt=""
                        src="/left.png"
                    />
                </div>
            </div>
            <div className="subtitle">Kontaktmöglichkeit</div>
            <div className="grid-container-contact">
                <div className="email-button" onClick={() => {
                    selectEmailSettings()
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/email.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">E-Mail</div>
                    </div>
                </div>
                <div className="phone-button" onClick={() => {
                    selectPhoneSettings()
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/telephone.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Telefon</div>
                    </div>
                </div>
                <div className="form-button" onClick={() => {
                    selectFormSettings()
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/online-chat.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Kontaktformular</div>
                    </div>
                </div>
            </div>

            {showEmailSettings && <div className="emailSettings">
                <div className="frame-parent">
                    <div className="email-settings-parent">
                        <div className="email">{props.currentState.email}</div>
                    </div>
                </div>

                <div className="grid-container-contact-select">
                    <div className="reject-button" onClick={() => window.location.href = "contact"}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => {
                        window.location.href = "output"
                        selectContactMethod()
                        //TODO
                        // sendToChatGPT()
                    }}>
                        <div className="icon-wrapper-confirm">
                            <img
                                className="icon-confirm"
                                alt=""
                                src="/check.png"
                            />
                        </div>
                    </div>
                </div>
            </div>}

            {showPhoneSettings && <div className="phoneSettings">
                <div className="frame-parent">
                    <div className="phone-settings-parent">
                        <div className="phone">{props.currentState.phone}</div>
                    </div>
                </div>
                <div className="grid-container-contact-select">
                    <div className="reject-button" onClick={() => window.location.href = "contact"}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => {
                        window.location.href = "output"
                        selectContactMethod()
                        //TODO
                        // sendToChatGPT()
                    }}>
                        <div className="icon-wrapper-confirm">
                            <img
                                className="icon-confirm"
                                alt=""
                                src="/check.png"
                            />
                        </div>
                    </div>
                </div>
            </div>}

            {showFormSettings && <div className="formSettings">
                <div className="frame-parent">
                    <div className="form-settings-parent">
                        <div className="form">{props.currentState.form}</div>
                    </div>
                </div>
                <div className="grid-container-contact-select">
                    <div className="reject-button" onClick={() => window.location.href = "contact"}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => {
                        window.location.href = "output"
                        selectContactMethod()
                        //TODO
                        // sendToChatGPT()
                    }}>
                        <div className="icon-wrapper-confirm">
                            <img
                                className="icon-confirm"
                                alt=""
                                src="/check.png"
                            />
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default ContactComponent;
