import { motion } from 'framer-motion';
import { TrendingUp, AlertOctagon } from 'lucide-react';

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
                            We are entering an era where a single developer can build systems that used to require a 10-person startup. Toucan Transit (production-grade, multi-agent) was built by one student. My opportunity is to become a "full-stack founder"—executing large-scale visions with AI leverage. As <a href="https://blog.samaltman.com/the-gentle-singularity" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ea', textDecoration: 'underline' }}>Sam Altman describes</a>, we're moving toward a "gentle singularity" where AI amplifies human capability rather than replacing it—if we maintain our agency.
                        </p>
                    </div>

                    <div className="glass-panel" style={{ borderColor: 'rgba(255, 0, 80, 0.3)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <AlertOctagon color="#ff0050" />
                            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Biggest Threat</h2>
                        </div>
                        <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Skill Atrophy</h3>
                        <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                            If I rely on AI for everything, I risk losing the fundamental understanding required to debug it. The "Junior Developer" role is disappearing; if I don't maintain deep technical roots, I will become a "prompt operator" instead of an engineer. The <a href="https://www.ibm.com/think/topics/history-of-artificial-intelligence" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0050', textDecoration: 'underline' }}>history of AI</a> shows cycles of hype and disillusionment—those who survive are the ones who understand the fundamentals, not just the latest interface.
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
                            AI can solve logic puzzles, but it doesn't understand <em>pain</em>. Toucan Transit succeeded not because the code was perfect, but because I understood the anxiety of a student missing a bus. Only a human can define the "why". As <a href="https://www.psychologytoday.com/us/blog/the-digital-self/202504/ai-beat-the-turing-test-by-being-a-better-human" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0050', textDecoration: 'underline' }}>research shows</a>, AI may pass the Turing test, but it's our humanity—our ability to understand context, emotion, and consequence—that remains irreplaceable. The <a href="https://www.weforum.org/stories/2025/01/elevating-uniquely-human-skills-in-the-age-of-ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0050', textDecoration: 'underline' }}>World Economic Forum</a> emphasizes that uniquely human skills like empathy, ethical reasoning, and creative problem-solving will become even more valuable as AI automates routine tasks.
                        </p>
                    </div>

                    <div className="glass-panel" style={{ borderStyle: 'dashed', opacity: 0.8 }}>
                        <h3 style={{ color: 'white' }}>Next Quest</h3>
                        <p style={{ color: '#eab308', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Learning Goal</p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Mastering <strong>Local LLM Fine-tuning</strong>. I need to understand how to shape the "brain" itself, not just whisper in its ear. But I also need to understand the human cost—the <a href="https://time.com/6247678/openai-chatgpt-kenya-workers/" target="_blank" rel="noopener noreferrer" style={{ color: '#eab308', textDecoration: 'underline' }}>Time investigation into OpenAI's Kenyan workers</a> reminds me that every AI breakthrough has a human story behind it. True literacy means understanding both the code and the context.
                        </p>
                    </div>
                </div>

                <div className="glass-panel" style={{ marginTop: '4rem', background: 'linear-gradient(45deg, rgba(118,0,255,0.1), rgba(0,242,234,0.1))' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Reading the Future</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        The readings this semester have shaped my understanding of what's coming. From <a href="https://www.searchengine.show/should-we-be-worried-about-openai/" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ea', textDecoration: 'underline' }}>critical examinations of OpenAI's trajectory</a> to <a href="https://sobrief.com/books/user-friendly" target="_blank" rel="noopener noreferrer" style={{ color: '#7600ff', textDecoration: 'underline' }}>discussions of user-friendly design</a>, I've learned that the future isn't predetermined. We're building it, one decision at a time. The question isn't whether AI will transform our world—it's whether we'll shape that transformation with intention, or let it shape us.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                        The <a href="https://www.newyorker.com/magazine/2025/09/15/playing-the-field-with-my-ai-boyfriends" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0050', textDecoration: 'underline' }}>New Yorker's exploration of AI relationships</a> and <a href="https://www.bbc.com/future/article/20241018-ai-art-the-end-of-creativity-or-a-new-movement" target="_blank" rel="noopener noreferrer" style={{ color: '#eab308', textDecoration: 'underline' }}>BBC's analysis of AI art</a> reveal that we're not just building tools—we're redefining what it means to create, connect, and be human. The <a href="https://www.science.org/doi/10.1126/sciadv.adn5290" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ea', textDecoration: 'underline' }}>Science study showing AI beating the test</a> isn't a victory for machines; it's a call to action for humans to define what we value beyond what can be measured.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
