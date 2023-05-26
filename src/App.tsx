import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import CategoriesComponent from "./pages/CategoriesComponent";
import {useEffect, useState} from "react";
import ChooseAdTypeComponent from "./pages/ChooseAdTypeComponent";
import PriceComponent from "./pages/PriceComponent";
import ContactComponent from "./pages/ContactComponent";
import OutputComponent from "./pages/OutputComponent";
import {initialFullState} from "./State";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    const [currentState, setCurrentState] = useState(initialFullState());

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<ChooseAdTypeComponent currentState={currentState} setCurrentState={setCurrentState}/>}/>
            <Route path="/categories" element={<CategoriesComponent currentState={currentState} setCurrentState={setCurrentState}/>}/>
            <Route path="/price" element={<PriceComponent currentState={currentState} setCurrentState={setCurrentState}/>}/>
            <Route path="/contact" element={<ContactComponent currentState={currentState} setCurrentState={setCurrentState}/>}/>
            <Route path="/output" element={<OutputComponent currentState={currentState} setCurrentState={setCurrentState}/>}/>
        </Routes>
    );
}

export default App;
