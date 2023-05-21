import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import CategoriesComponent from "./pages/CategoriesComponent";
import {useEffect} from "react";
import ChooseAdTypeComponent from "./pages/ChooseAdTypeComponent";
import PriceComponent from "./pages/PriceComponent";
import ContactComponent from "./pages/ContactComponent";
import OutputComponent from "./pages/OutputComponent";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

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
            <Route path="/" element={<ChooseAdTypeComponent/>}/>
            <Route path="/categories" element={<CategoriesComponent/>}/>
            <Route path="/price" element={<PriceComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
            <Route path="/output" element={<OutputComponent/>}/>
        </Routes>
    );
}

export default App;
