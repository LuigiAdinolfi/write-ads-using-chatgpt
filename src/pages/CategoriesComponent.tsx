import "./CategoriesComponent.css";
import {useContext} from "react";
import {StateContext} from "../StateContext";
import {useNavigate} from "react-router-dom";

export function CategoriesComponent() {

    const {currentState, setCurrentState} = useContext(StateContext);

    let navigate = useNavigate();

    const goBackInTheRoute = () =>{
        navigate('/', {replace: true});
    }
    const goAheadInTheRoute = () =>{
        navigate('/price', {replace: true});
    }

    return (
        <div className="page-container">
            <div className="header">
                <div className="title">Marktplatz</div>
                <div className="back-icon-wrapper" onClick={
                    () => goBackInTheRoute}>
                    <img
                        className="back-icon"
                        alt=""
                        src="/left.png"
                    />
                </div>
            </div>
            <div className="subtitle">Kategorie auswählen</div>
            <div className="grid-container">
                <div className="share-button" onClick={() => {
                    setCurrentState({...currentState, category: "Teilen"})
                    goAheadInTheRoute();
                    console.log(currentState.adType)
                    console.log(currentState.category)
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/team.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Teilen</div>
                    </div>
                </div>
                <div className="clean-button" onClick={() => {
                    setCurrentState({...currentState, category: "Reinigungsarbeiten"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/clean.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Reinigungsarbeiten</div>
                    </div>
                </div>
                <div className="maintenance-button" onClick={() => {
                    setCurrentState({...currentState, category: "Gebäudeunterhalt & Technik"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/fix.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="category-name1">
                            <span className="category-name-txt-container">
                                <span className="content-line-1">Gebäudeunterhalt</span>
                                <span className="content-2"> & Technik</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="support-button" onClick={() => {
                    setCurrentState({...currentState, category: "Alltagsunterstützung"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/love.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Alltagsunterstützung</div>
                    </div>
                </div>
                <div className="catering-button" onClick={() => {
                    setCurrentState({...currentState, category: "Verpflegung"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/iftar.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Verpflegung</div>
                    </div>
                </div>
                <div className="transport-button" onClick={() => {
                    setCurrentState({...currentState, category: "Transport"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/sedan.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="category-name1">
                            <span className="category-name-txt-container">
                                <span className="content-line-1">Begleit- und </span>
                                <span className="content-2">Transportdienste</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="admin-button" onClick={() => {
                    setCurrentState({...currentState, category: "Administration"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/clipboard.png"
                            style={{paddingLeft: 24}}
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Administration</div>
                    </div>
                </div>
                <div className="pet-button" onClick={() => {
                    setCurrentState({...currentState, category: "Haustier"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/pets.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Haustier</div>
                    </div>
                </div>
                <div className="children-button" onClick={() => {
                    setCurrentState({...currentState, category: "Kinder"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/playtime.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Kinder</div>
                    </div>
                </div>
                <div className="leisure-button" onClick={() => {
                    setCurrentState({...currentState, category: "Freizeigestaltung"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/bowling.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Freizeigestaltung</div>
                    </div>
                </div>
                <div className="courses-button" onClick={() => {
                    setCurrentState({...currentState, category: "Kurse & Schulungen"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/mortarboard.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Kurse & Schulungen</div>
                    </div>
                </div>
                <div className="products-button" onClick={() => {
                    setCurrentState({...currentState, category: "Produkte"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/product.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Produkte</div>
                    </div>
                </div>
                <div className="jobs-button" onClick={() => {
                    setCurrentState({...currentState, category: "Arbeitsstellen"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/suitcase.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Arbeitsstellen</div>
                    </div>
                </div>
                <div className="apprenticeships-button" onClick={() => {
                    setCurrentState({...currentState, category: "Lehrstellen"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/recommendation.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Lehrstellen</div>
                    </div>
                </div>
                <div className="consulting-button" onClick={() => {
                    setCurrentState({...currentState, category: "Beratung"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/discussion.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Beratung</div>
                    </div>
                </div>
                <div className="diverses-button" onClick={() => {
                    setCurrentState({...currentState, category: "Diverses"})
                    goAheadInTheRoute();
                    // window.location.href = "price"
                }}>
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/question-mark.png"
                        />
                    </div>
                    <div className="card-label-wrapper">
                        <div className="card-label">Diverses</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesComponent;
