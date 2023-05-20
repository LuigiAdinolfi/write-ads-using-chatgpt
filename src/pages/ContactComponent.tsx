import React, {FunctionComponent} from "react";
import "./ContactComponent.css";

const ContactComponent: FunctionComponent = () => {
    const [showEmailSettings, setShowEmailSettings] = React.useState(false)
    const [showPhoneSettings, setShowPhoneSettings] = React.useState(false)
    const [showFormSettings, setShowFormSettings] = React.useState(false)
    let [email, setEmail] = React.useState("vorname.name@muster.com");
    let [phone, setPhone] = React.useState("079 123 45 67");
    let [form, setForm] = React.useState("Kontaktformular");

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
                    <div className="contact-label-wrapper">
                        <div className="contact-label">E-Mail</div>
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
                    <div className="contact-label-wrapper">
                        <div className="contact-label">Telefon</div>
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
                    <div className="contact-label-wrapper">
                        <div className="contact-label">Kontaktformular</div>
                    </div>
                </div>
            </div>

            {showEmailSettings && <div className="emailSettings">
                <div className="frame-parent">
                    <div className="email-settings-parent">
                        <div className="email">{email}</div>
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
                    <div className="confirm-button" onClick={() => window.location.href = "output"}>
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
                        <div className="phone">{phone}</div>
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
                    <div className="confirm-button" onClick={() => window.location.href = "output"}>
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
                        <div className="form">{form}</div>
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
                    <div className="confirm-button" onClick={() => window.location.href = "output"}>
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
};

export default ContactComponent;
