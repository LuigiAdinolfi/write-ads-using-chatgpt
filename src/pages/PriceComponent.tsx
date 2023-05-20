import React, {FunctionComponent} from "react";
import "./PriceComponent.css";

const PriceComponent: FunctionComponent = () => {
    const [hours, setHours] = React.useState(0);
    const [moneyAmount, setMoneyAmount] = React.useState(0);
    const [showMoneySettings, setShowMoneySettings] = React.useState(false)
    const [showHourSettings, setShowHourSettings] = React.useState(false)
    const [showShareSettings, setShowShareSettings] = React.useState(false)

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
        setShowMoneySettings(true);
        setShowHourSettings(false);
        setShowShareSettings(false);
    }

    function selectHourSettings() {
        setShowHourSettings(true);
        setShowMoneySettings(false);
        setShowShareSettings(false);
    }

    function selectShareSettings() {
        setShowShareSettings(true);
        setShowHourSettings(false);
        setShowMoneySettings(false);
    }


    return (
        <div className="page-container">
            <div className="header">
                <div className="title">Marktplatz</div>
                <div className="back-icon-wrapper" onClick={() => window.location.href = "categories"}>
                    <img
                        className="back-icon"
                        alt=""
                        src="/left.png"
                    />
                </div>
            </div>
            <div className="subtitle">Preis</div>
            <div className="grid-container-price">
                <div className="money-button" onClick={() => {
                    selectMoneySettings()
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/money.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Geld</div>
                    </div>
                </div>
                <div className="time-button" onClick={() => {
                    selectHourSettings()
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/timer.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Zeit</div>
                    </div>
                </div>
                <div className="shareSomething-button" onClick={() => {
                    selectShareSettings()
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/exchange.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Tausche gegen...</div>
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
                    <div className="reject-button" onClick={() => window.location.href = "price"}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => window.location.href = "contact"}>
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
                    <div className="reject-button" onClick={() => window.location.href = "price"}>
                        <div className="icon-wrapper-reject">
                            <img
                                className="icon-reject"
                                alt=""
                                src="/cross.png"
                            />
                        </div>
                    </div>
                    <div className="confirm-button" onClick={() => window.location.href = "contact"}>
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

            {showShareSettings && <div className="shareSettings" onClick={() => window.location.href = "categories"}>
                <div className="frame-parent-share">
                    <div className="shareSomething-settings-parent">
                        <div className="share">Kategorien</div>
                        <img className="plus-icon-share" alt="" src="/menu.png"/>
                    </div>
                </div>
            </div>
            }


        </div>


    );
};

export default PriceComponent;
