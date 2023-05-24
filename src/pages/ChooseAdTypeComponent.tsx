import "./ChooseAdTypeComponent.css";
import {FullState} from "../State";

export function ChooseAdTypeComponent (props: { currentState: FullState }) {
    // let zipCode = "5210"
    // let place = "Windisch"
    return (
        <div className="page-container">
            <div className="header">
                <div className="title">Marktplatz</div>
                <div className="back-icon-wrapper">
                    <img
                        className="back-icon"
                        alt=""
                        src="/left.png"
                    />
                </div>
            </div>
            <div className="subtitle-home">Ort</div>
            <div className="place">{`${props.currentState.zipCode} ${props.currentState.place}`}</div>

            <div className="grid-container-home">
                <div className="offer-button" onClick={() => {
                    window.location.href = "categories"
                    props.currentState.adType = "Ich biete";
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon-home"
                            alt=""
                            src="/advertisement.png"
                        />
                    </div>
                    <div className="category-label-wrapper-home">
                        <div className="card-label-home">Angebot</div>
                    </div>
                </div>
                <div className="search-button" onClick={() => {
                    window.location.href = "categories"
                    props.currentState.adType = "Ich suche";
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon-home"
                            alt=""
                            src="/loupe.png"
                        />
                    </div>
                    <div className="category-label-wrapper-home">
                        <div className="card-label-home">Suche</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChooseAdTypeComponent;