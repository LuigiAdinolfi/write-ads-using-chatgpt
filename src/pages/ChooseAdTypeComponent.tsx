import "./ChooseAdTypeComponent.css";
import {useContext, useEffect} from "react";
import {StateContext} from "../StateContext";
import {useNavigate} from "react-router-dom";

export function ChooseAdTypeComponent () {
    // let zipCode = "5210"
    // let place = "Windisch"

    const {currentState, setCurrentState} = useContext(StateContext);

    // useEffect(() => {
    //     console.log(currentState.zipCode)
    //     console.log(currentState.place)
    //     console.log(currentState.adType)
    // }, [currentState.adType]);

    let navigate = useNavigate();

    const goAheadInTheRoute = () =>{
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
                    // window.location.href = "categories"
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
                    // window.location.href = "categories"
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
