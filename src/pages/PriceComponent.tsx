import React, {useContext} from "react";
import "./PriceComponent.css";
import {StateContext} from "../StateContext";
import {useNavigate} from "react-router-dom";

export function PriceComponent() {
    const [hours, setHours] = React.useState(0);
    const [moneyAmount, setMoneyAmount] = React.useState(0);
    const [showMoneySettings, setShowMoneySettings] = React.useState(false)
    const [showHourSettings, setShowHourSettings] = React.useState(false)
    const [showShareSettings, setShowShareSettings] = React.useState(false)
    const [chosenPaymentMethod, setChosenPaymentMethod] = React.useState("");
    const [showingMoneyButton, setShowingMoneyButton] = React.useState(true)
    const [showingTimeButton, setShowingTimeButton] = React.useState(true)
    const [showingSharingButton, setShowingSharingButton] = React.useState(true)

    const {currentState, setCurrentState} = useContext(StateContext);

    let navigate = useNavigate();

    const goBackInTheRoute = () => {
        navigate('/categories', {replace: true});
    }

    const stayOnThePage = () => {
        navigate('/price', {replace: true});
    }
    const goAheadInTheRoute = () => {
        navigate('/contact', {replace: true});
    }

    function incrementHours() {
        setHours(hours + 1);
    }

    function decrementHours() {
        setHours(hours - 1);
    }

    function showHours() {
        if (hours === 1) {
            return "1 Stunde";
        } else if (hours === 0 || hours < 0) {
            return "0 Stunden";
        } else {
            return hours + " Stunden";
        }
    }

    function incrementMoneyAmount() {
        setMoneyAmount(moneyAmount + 1);
    }

    function decrementMoneyAmount() {
        setMoneyAmount(moneyAmount - 1);
    }

    function showMoneyAmount() {
        if (moneyAmount >= 0) {
            return moneyAmount + " CHF";
        } else {
            return "0 CHF";
        }
    }

    function selectMoneySettings() {
        setChosenPaymentMethod("money")
        setShowMoneySettings(true);
        setShowHourSettings(false);
        setShowShareSettings(false);
        setShowingMoneyButton(true)
        setShowingSharingButton(false)
        setShowingTimeButton(false)
    }

    function selectHourSettings() {
        setChosenPaymentMethod("time")
        setShowHourSettings(true);
        setShowMoneySettings(false);
        setShowShareSettings(false);
        setShowingTimeButton(true)
        setShowingSharingButton(false)
        setShowingMoneyButton(false)
    }

    function selectShareSettings() {
        setChosenPaymentMethod("share")
        setShowShareSettings(true);
        setShowHourSettings(false);
        setShowMoneySettings(false);
        setShowingSharingButton(true)
        setShowingMoneyButton(false)
        setShowingTimeButton(false)
    }

    function selectPayMethod() {
        if (chosenPaymentMethod === "money") {
            setCurrentState({
                ...currentState,
                paymentMethod: `${moneyAmount} Franken pro Stunde`
            });
        } else if (chosenPaymentMethod === "time") {
            setCurrentState({
                ...currentState,
                paymentMethod: `${hours} Stunden auf dem Zeitkonto`
            });
        } else if (chosenPaymentMethod === "share") {
            setCurrentState({
                ...currentState,
                paymentMethod: `Teilen gegen ${currentState.shareAgainst}`
            });
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
            <div className="subtitle">Preis</div>
            <div className="grid-container-price">
                <div className="money-button"
                     style={{opacity: showingMoneyButton ? 1.0 : 0.3}}
                     onClick={() => {
                         selectMoneySettings()
                     }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/money.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Geld</div>
                    </div>
                </div>
                <div className="time-button"
                     style={{opacity: showingTimeButton ? 1.0 : 0.3}}
                     onClick={() => {
                         selectHourSettings()
                     }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/timer.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Zeit</div>
                    </div>
                </div>
                <div className="shareSomething-button"
                     style={{opacity: showingSharingButton ? 1.0 : 0.3}}
                     onClick={() => {
                         selectShareSettings()
                     }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/exchange.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Tausche gegen...</div>
                    </div>
                </div>
            </div>

            {showMoneySettings && <div className="moneySettings">
                <div className="frame-parent">
                    <div className="money-settings-parent">
                        <img className="minus-icon" alt="" src="/remove.png" onClick={decrementMoneyAmount}/>
                        <div className="money">{showMoneyAmount()}</div>
                        <img className="plus-icon" alt="" src="/add.png" onClick={incrementMoneyAmount}/>
                    </div>
                </div>

                <div className="grid-container-price-select">
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
                        goAheadInTheRoute()
                        selectPayMethod()
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

            {showHourSettings && <div className="hourSettings">
                <div className="frame-parent">
                    <div className="hours-settings-parent">
                        <img className="minus-icon" alt="" src="/remove.png" onClick={decrementHours}/>
                        <div className="hours">{showHours()}</div>
                        <img className="plus-icon" alt="" src="/add.png" onClick={incrementHours}/>
                    </div>
                </div>

                <div className="grid-container-price-select">
                    <div className="reject-button" onClick={() => {
                        stayOnThePage()
                    }}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => {
                        goAheadInTheRoute()
                        selectPayMethod()
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

            {showShareSettings && <div className="shareSettings" onClick={() => {
                goBackInTheRoute()
                selectPayMethod()
            }}>
                <div className="frame-parent-share">
                    <div className="shareSomething-settings-parent">
                        <div className="share">Kategorien</div>
                        <img className="plus-icon-share" alt="" src="/menu.png"/>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default PriceComponent;
