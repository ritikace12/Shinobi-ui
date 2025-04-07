import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import RegistrationPage from "./pages/RegistrationPage";
import ShinobiList from "./pages/ShinobiList";
import BingoBook from "./pages/BingoBook";
import MenuPage from './pages/MenuPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 -top-48 -left-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>
                
                <Navigation />
                <main className="w-full relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<RegistrationPage />} />
                        <Route path="/shinobi" element={<ShinobiList />} />
                        <Route path="/bingo-book" element={<BingoBook />} />
                        <Route path="/menu" element={<MenuPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;


