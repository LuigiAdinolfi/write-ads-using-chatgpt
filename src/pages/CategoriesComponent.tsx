import {FunctionComponent} from "react";
import "./CategoriesComponent.css";

const CategoriesComponent: FunctionComponent = () => {
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
            <div className="subtitle">Kategorie auswählen</div>
            <div className="grid-container">
                <div className="share-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/team.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Teilen</div>
                    </div>
                </div>
                <div className="clean-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/clean.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Reinigungsarbeiten</div>
                    </div>
                </div>
                <div className="maintenance-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/fix.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-name1">
                            <span className="category-name-txt-container">
                                <span className="content-1">Gebäudeunterhalt</span>
                                <span className="content-2"> & Technik</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="support-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/love.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Alltagsunterstützung</div>
                    </div>
                </div>
                <div className="catering-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/iftar.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Verpflegung</div>
                    </div>
                </div>
                <div className="transport-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/sedan.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-name1">
                            <span className="category-name-txt-container">
                                <span className="content-1">Begleit- und </span>
                                <span className="content-2">Transportdienste</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="admin-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/clipboard.png"
                            style={{paddingLeft: 24}}
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Administration</div>
                    </div>
                </div>
                <div className="pet-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/pets.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Haustier</div>
                    </div>
                </div>
                <div className="children-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/playtime.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Kinder</div>
                    </div>
                </div>
                <div className="leisure-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/bowling.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Freizeigestaltung</div>
                    </div>
                </div>
                <div className="courses-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/mortarboard.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Kurse & Schulungen</div>
                    </div>
                </div>
                <div className="products-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/product.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Produkte</div>
                    </div>
                </div>
                <div className="jobs-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/suitcase.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Arbeitsstellen</div>
                    </div>
                </div>
                <div className="apprenticeships-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/study.png"
                            style={{paddingLeft: 24}}
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Lehrstellen</div>
                    </div>
                </div>
                <div className="consulting-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/discussion.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Beratung</div>
                    </div>
                </div>
                <div className="diverses-button">
                    <div className="icon-wrapper">
                        <img
                            className="icon"
                            alt=""
                            src="/question-mark.png"
                        />
                    </div>
                    <div className="category-label-wrapper">
                        <div className="category-label">Diverses</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesComponent;
