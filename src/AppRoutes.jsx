import {
    BrowserRouter as Router,
    Route, 
    Routes, 
    Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from"./pages/RegisterPage/RegisterPage.jsx"
import FeedPage from "./pages/FeedPage/FeedPage.jsx"

function AppRouts () {
    return (  
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/" element={<RegisterPage/>}/>
                <Route exact path="/Feed" element={<FeedPage/>}/>
            </Routes>
        </Router>
    );
}

export default AppRouts;