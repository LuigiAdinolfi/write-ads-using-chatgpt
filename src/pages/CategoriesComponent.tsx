import "./CategoriesComponent.css";
import {FullState} from "../State";

export function CategoriesComponent(props: { currentState: FullState, setCurrentState: (newState: FullState) => void }) {
    return (
        <div className="page-container">
            <div className="header">
                <div className="title">Marktplatz</div>
                <div className="back-icon-wrapper" onClick={() => window.location.href = "/"}>
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
                    props.setCurrentState({...props.currentState, category: "Teilen"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Reinigungsarbeiten"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Gebäudeunterhalt & Technik"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Alltagsunterstützung"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Verpflegung"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Transport"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Administration"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Haustier"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Kinder"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Freizeigestaltung"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Kurse & Schulungen"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Produkte"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Arbeitsstellen"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Lehrstellen"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Beratung"})
                    window.location.href = "price"
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
                    props.setCurrentState({...props.currentState, category: "Diverses"})
                    window.location.href = "price"
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
