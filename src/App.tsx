import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import {useEffect, useState} from "react";
import ChooseAdTypePage from "./pages/ChooseAdTypePage";
import PaymentPage from "./pages/PaymentPage";
import ContactPage from "./pages/ContactPage";
import OutputPage from "./pages/OutputPage";
import {initialFullState} from "./State";
import {StateContext} from "./StateContext";

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
        <StateContext.Provider value={{currentState, setCurrentState}}>
            <Routes>
                <Route path="/" element={<ChooseAdTypePage/>}/>
                <Route path="/categories" element={<CategoriesPage/>}/>
                <Route path="/payment" element={<PaymentPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/output" element={<OutputPage/>}/>
            </Routes>
        </StateContext.Provider>
    );
}

export default App;
