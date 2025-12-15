import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RefreshCcw, Compass, SunDim, Users } from 'lucide-react';

export default function Home() {
    return (
        <div className="container">
            <header style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', border: '1px solid rgba(0,242,234,0.3)'
                    }}>
                        <Compass size={64} color="#00f2ea" />
                    </div>
                    <h1 style={{ marginBottom: '1rem' }}>
                        The <span className="text-gradient">Centaur's</span> Compass
                    </h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 auto 2rem' }}>
                        A reflective portfolio on navigating the AI revolution. Integrating technical mastery with human judgment to build the future.
                    </p>

                    <Link to="/presentation" style={{ marginBottom: '3rem', display: 'inline-block' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            style={{
                                background: 'linear-gradient(90deg, #7600ff, #ff0050)',
                                padding: '1rem 2rem', fontSize: '1.1rem',
                                boxShadow: '0 0 30px rgba(118, 0, 255, 0.3)'
                            }}
                        >
                            ▶ Watch Audio Essay
                        </motion.button>
                    </Link>

                    <div className="grid-3" style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
                        <Link to="/rearview" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div className="glass-panel" whileHover={{ y: -5 }}>
                                <RefreshCcw size={32} color="#ff0050" style={{ marginBottom: '1rem' }} />
                                <h3>The Rearview Mirror</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Reflecting on the semester's journey, from automated agents to ethical dilemmas.</p>
                            </motion.div>
                        </Link>

                        <Link to="/compass" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div className="glass-panel" whileHover={{ y: -5 }}>
                                <Compass size={32} color="#00f2ea" style={{ marginBottom: '1rem' }} />
                                <h3>The Compass</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>My personal framework for surviving and thriving in the age of AI.</p>
                            </motion.div>
                        </Link>

                        <Link to="/ecosystem" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div className="glass-panel" whileHover={{ y: -5 }}>
                                <Users size={32} color="#7600ff" style={{ marginBottom: '1rem' }} />
                                <h3>The Ecosystem</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Leading AI strategy at ACC: Committees, Hackathons, and Policy.</p>
                            </motion.div>
                        </Link>

                        <Link to="/horizon" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div className="glass-panel" whileHover={{ y: -5 }}>
                                <SunDim size={32} color="#eab308" style={{ marginBottom: '1rem' }} />
                                <h3>The Horizon</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Envisioning the future career landscape and the "Super-Individual".</p>
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>
            </header>

            <section className="glass-panel" style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Built with AI Collaboration</h2>
                    <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0' }}>This entire portfolio was codesigned using the very principles it discusses.</p>
                </div>
                <Link to="/statement">
                    <button style={{ background: 'transparent', border: '1px solid var(--accent-cyan)', backgroundClip: 'text' }}>Read Statement</button>
                </Link>
            </section>
        </div>
    );
}
