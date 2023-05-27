import "./ChooseAdTypeComponent.css";
import {useContext} from "react";
import {StateContext} from "../StateContext";
import {useNavigate} from "react-router-dom";
import TimelineComponent from "./TimelineComponent";
import "./TimelineComponent.css"

export function ChooseAdTypeComponent() {

    const {currentState, setCurrentState} = useContext(StateContext);

    let navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route, { replace: true });
    };

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
                    handleNavigation('/categories')
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
                    handleNavigation('/categories')
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
            <TimelineComponent/>
        </div>

    );
}

export default ChooseAdTypeComponent;
