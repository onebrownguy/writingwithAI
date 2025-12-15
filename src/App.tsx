import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rearview from './pages/Rearview';
import CompassPage from './pages/Compass';
import Ecosystem from './pages/Ecosystem';
import Horizon from './pages/Horizon';
import AiStatement from './pages/AiStatement';
import Presentation from './pages/Presentation';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/rearview" element={<Rearview />} />
                    <Route path="/compass" element={<CompassPage />} />
                    <Route path="/ecosystem" element={<Ecosystem />} />
                    <Route path="/horizon" element={<Horizon />} />
                    <Route path="/statement" element={<AiStatement />} />
                </Route>
                {/* Presentation stays outside layout for full immersion if desired, 
                    or inside if you want nav. Currently keeping outside to match "Audio Essay" feel 
                    based on its full-screen styling? 
                    Actually, Presentation.tsx has fixed position full screen. 
                    Let's keep it parallel to Layout so it doesn't get double nav.
                */}
                <Route path="/presentation" element={<Presentation />} />
            </Routes>
        </Router>
    );
}
