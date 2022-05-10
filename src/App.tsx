import "./styles/main.scss";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Routing from "./pages/Routing/Routing";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";

function App() {
    const apiUrl = "http://18.194.209.204:2004";

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register apiUrl={apiUrl}/>} />
                <Route path="/login" element={<Login apiUrl={apiUrl} />} />
                <Route path="/route" element={<Routing />} />
                <Route path="/account" element={<Account apiUrl={apiUrl} />} />
            </Routes>
        </div>
    );
}

export default App;
