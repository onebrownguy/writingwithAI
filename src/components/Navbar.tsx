import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    const navLinks = [
        { to: '/rearview', label: 'Rearview Mirror' },
        { to: '/compass', label: 'The Compass' },
        { to: '/ecosystem', label: 'The Ecosystem' },
        { to: '/horizon', label: 'The Horizon' },
        { to: '/statement', label: 'AI Statement' },
    ];

    return (
        <nav className="glass-panel navbar" style={{ borderRadius: 0, padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
            <div className="container navbar-inner">
                <Link to="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <Compass color="var(--accent-cyan)" size={32} strokeWidth={1.5} />
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.25rem' }}>The Centaur&apos;s Compass</span>
                </Link>
                <button
                    type="button"
                    className="navbar-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
                    {navLinks.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`nav-link ${isActive(to)}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
