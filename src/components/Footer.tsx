import { Terminal } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ marginTop: '4rem', padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Designed by <span style={{ color: 'white' }}>Abel Rincon</span> & <Terminal size={14} /> AI
            </p>
        </footer>
    );
}
