import React, {useContext} from "react";
import "./ContactComponent.css";
import {StateContext} from "../StateContext";
import {useNavigate} from "react-router-dom";
import Timeline from "./Timeline";

export function ContactComponent() {
    const [showEmailSettings, setShowEmailSettings] = React.useState(false)
    const [showPhoneSettings, setShowPhoneSettings] = React.useState(false)
    const [showFormSettings, setShowFormSettings] = React.useState(false)
    const [showingEmailButton, setShowingEmailButton] = React.useState(true)
    const [showingPhoneButton, setShowingPhoneButton] = React.useState(true)
    const [showingFormButton, setShowingFormButton] = React.useState(true)

    const {currentState, setCurrentState} = useContext(StateContext);

    let navigate = useNavigate();

    const goBackInTheRoute = () => {
        navigate('/payment', {replace: true});
    }

    const stayOnThePage = () => {
        navigate('/contact', {replace: true});
    }
    const goAheadInTheRoute = () => {
        navigate('/output', {replace: true});
    }

    function selectEmailSettings() {
        setShowEmailSettings(true);
        setShowPhoneSettings(false);
        setShowFormSettings(false);
        setShowingEmailButton(true)
        setShowingPhoneButton(false)
        setShowingFormButton(false)
    }

    function selectPhoneSettings() {
        setShowPhoneSettings(true);
        setShowEmailSettings(false);
        setShowFormSettings(false);
        setShowingEmailButton(false)
        setShowingPhoneButton(true)
        setShowingFormButton(false)
    }

    function selectFormSettings() {
        setShowFormSettings(true);
        setShowEmailSettings(false);
        setShowPhoneSettings(false);
        setShowingEmailButton(false)
        setShowingPhoneButton(false)
        setShowingFormButton(true)
    }

    function selectContactMethod() {
        if (showEmailSettings) {
            setCurrentState({...currentState, contactMethod: `E-Mail: ${currentState.email}`})
        } else if (showPhoneSettings) {
            setCurrentState({...currentState, contactMethod: `Telefon: ${currentState.phone}`})
        } else if (showFormSettings) {
            setCurrentState({...currentState, contactMethod: `Formular: ${currentState.form}`})
        }
    }

    return (
        <div className="page-container">
            <div className="header">
                <div className="title">Marktplatz</div>
                <div className="back-icon-wrapper"
                     onClick={() => goBackInTheRoute()}>
                    <img
                        className="back-icon"
                        alt=""
                        src="/left.png"
                    />
                </div>
            </div>
            <div className="subtitle">Kontaktmöglichkeit</div>
            <div className="grid-container-contact">
                <div className="email-button"
                     style={{opacity: showingEmailButton ? 1.0 : 0.3}}
                     onClick={() => {
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
                <div className="phone-button"
                     style={{opacity: showingPhoneButton ? 1.0 : 0.3}}
                     onClick={() => {
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
                <div className="form-button"
                     style={{opacity: showingFormButton ? 1.0 : 0.3}}
                     onClick={() => {
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
                        <div className="email">{currentState.email}</div>
                    </div>
                </div>

                <div className="grid-container-contact-select">
                    <div className="reject-button"
                         onClick={() => stayOnThePage()}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button"
                         onClick={() => {
                             selectContactMethod()
                             goAheadInTheRoute()
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
                        <div className="phone">{currentState.phone}</div>
                    </div>
                </div>
                <div className="grid-container-contact-select">
                    <div className="reject-button"
                         onClick={() => stayOnThePage()}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => {
                        selectContactMethod()
                        goAheadInTheRoute()
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
                        <div className="form">{currentState.form}</div>
                    </div>
                </div>
                <div className="grid-container-contact-select">
                    <div className="reject-button"
                         onClick={() => stayOnThePage()}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => {
                        selectContactMethod()
                        goAheadInTheRoute()
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
            <Timeline/>
        </div>
    );
}

export default ContactComponent;
