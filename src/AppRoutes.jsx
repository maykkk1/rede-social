import {
    BrowserRouter as Router,
    Route, 
    Routes, 
    Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import FeedPage from "./pages/FeedPage/FeedPage.jsx"

function AppRouts () {
    return (  
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route exact path="/feed" element={<FeedPage/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouts;