import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import RegistrationPage from "./pages/RegistrationPage";
import ShinobiList from "./pages/ShinobiList";
import BingoBook from "./pages/BingoBook";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/shinobi" element={<ShinobiList />} />
                <Route path="/bingo-book" element={<BingoBook />} />
            </Routes>
        </Router>
    );
}

export default App;


