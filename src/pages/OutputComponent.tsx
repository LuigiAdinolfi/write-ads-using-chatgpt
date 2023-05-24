import React from "react";
import "./OutputComponent.css";

export function OutputComponent () {

    const [text] = React.useState("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.");

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
                    <div className="text">{text}</div>
                </div>
            </div>
            <div className="refresh-icon-wrapper" onClick={() => window.location.href = "output"}>
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
                <div className="confirm-button" onClick={() => window.location.href = "/"}>
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
