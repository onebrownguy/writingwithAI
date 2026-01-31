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
                <Route path="/presentation" element={<Presentation />} />
            </Routes>
        </Router>
    );
}
