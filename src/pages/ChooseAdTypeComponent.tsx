import "./ChooseAdTypeComponent.css";
import {useContext} from "react";
import {StateContext} from "../StateContext";
import {useNavigate} from "react-router-dom";
import Timeline from "./Timeline";
import "./Timeline.css"

export function ChooseAdTypeComponent() {

    const {currentState, setCurrentState} = useContext(StateContext);

    let navigate = useNavigate();

    const goAheadInTheRoute = () => {
        navigate('/categories', {replace: true});
    }

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
            <div className="place">{`${currentState.zipCode} ${currentState.place}`}</div>

            <div className="grid-container-home">
                <div className="offer-button" onClick={() => {
                    setCurrentState({...currentState, adType: "Ich biete"});
                    goAheadInTheRoute();
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
                    setCurrentState({...currentState, adType: "Ich suche"});
                    goAheadInTheRoute();
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
            <Timeline/>
        </div>

    );
}

export default ChooseAdTypeComponent;
