import { motion } from 'framer-motion';
import { Rocket, TrendingUp, AlertOctagon } from 'lucide-react';

export default function Horizon() {
    return (
        <div className="container">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 style={{ marginBottom: '1rem' }}>The <span style={{ color: '#eab308' }}>Horizon</span></h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                    Envisioning the future of the "AI Revolution" and my role within it (2025-2030).
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                    <div className="glass-panel" style={{ borderColor: 'rgba(0, 242, 234, 0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <TrendingUp color="#00f2ea" />
                            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Biggest Opportunity</h2>
                        </div>
                        <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>The Super-Individual</h3>
                        <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                            We are entering an era where a single developer can build systems that used to require a 10-person startup. Toucan Transit (production-grade, multi-agent) was built by one student. My opportunity is to become a "full-stack founder"—executing large-scale visions with AI leverage.
                        </p>
                    </div>

                    <div className="glass-panel" style={{ borderColor: 'rgba(255, 0, 80, 0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <AlertOctagon color="#ff0050" />
                            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Biggest Threat</h2>
                        </div>
                        <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Skill Atrophy</h3>
                        <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                            If I rely on AI for everything, I risk losing the fundamental understanding required to debug it. The "Junior Developer" role is disappearing; if I don't maintain deep technical roots, I will become a "prompt operator" instead of an engineer.
                        </p>
                    </div>
                </div>

                <h2 style={{ marginBottom: '2rem' }}>My Centaur Skills</h2>
                <div className="grid-3">
                    <div className="glass-panel">
                        <h3 style={{ color: 'white' }}>1. Agentic Orchestration</h3>
                        <p style={{ color: 'var(--text-cyan)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Technical Skill</p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            The ability to design systems where multiple AI agents interact. It's not about "prompting" a chatbot; it's about architecting a workflow where `Agent A` passes structured data to `Agent B`.
                        </p>
                    </div>

                    <div className="glass-panel">
                        <h3 style={{ color: 'white' }}>2. Strategic Empathy</h3>
                        <p style={{ color: 'var(--text-pink)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Human Skill</p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            AI can solve logic puzzles, but it doesn't understand <em>pain</em>. Toucan Transit succeeded not because the code was perfect, but because I understood the anxiety of a student missing a bus. Only a human can define the "why".
                        </p>
                    </div>

                    <div className="glass-panel" style={{ borderStyle: 'dashed', opacity: 0.8 }}>
                        <h3 style={{ color: 'white' }}>Next Quest</h3>
                        <p style={{ color: '#eab308', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Learning Goal</p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Mastering <strong>Local LLM Fine-tuning</strong>. I need to understand how to shape the "brain" itself, not just whisper in its ear.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
