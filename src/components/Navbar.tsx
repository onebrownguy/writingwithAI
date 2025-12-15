import { Link, useLocation } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <nav className="glass-panel" style={{ borderRadius: 0, padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <Compass color="#00f2ea" size={32} strokeWidth={1.5} />
                    <span style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>The Centaur's Compass</span>
                </Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link to="/rearview" className={`nav-link ${isActive('/rearview')}`}>Rearview Mirror</Link>
                    <Link to="/compass" className={`nav-link ${isActive('/compass')}`}>The Compass</Link>
                    <Link to="/ecosystem" className={`nav-link ${isActive('/ecosystem')}`}>The Ecosystem</Link>
                    <Link to="/horizon" className={`nav-link ${isActive('/horizon')}`}>The Horizon</Link>
                    <Link to="/statement" className={`nav-link ${isActive('/statement')}`}>AI Statement</Link>
                </div>
            </div>
        </nav>
    );
}
