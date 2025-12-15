import { motion } from 'framer-motion';
import { Bus, Recycle, Cpu, AlertTriangle, Archive, Image, Globe, Play } from 'lucide-react';

export default function Rearview() {
    return (
        <div className="container">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 style={{ marginBottom: '1rem' }}>The <span style={{ color: '#ff0050' }}>Rearview</span> Mirror</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                    Looking back at the semester's learning outcomes through the lens of real-world projects.
                </p>

                <section style={{ marginBottom: '6rem' }}>
                    <div className="glass-panel" style={{ borderLeft: '4px solid #00f2ea' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#00f2ea', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0 }}>
                            The Origin Story: Human in the Loop
                        </h2>
                        <div style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Reflecting on "Module 2: Assembling the Centaur Crew" - Oct 31, 2025
                        </div>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            My journey began with a simple philosophy: <strong>"Combinations of humans and AI work best when each party can do the thing they do better than the other."</strong> (Malone).
                            I realized early on that I am the <strong>Orchestrator</strong>, and AI is the intern that wears many hats.
                        </p>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            <strong>The Spark for Toucan Transit:</strong> The idea wasn't just about buses; it was about <em>life</em>. I used to walk around the Highland neighborhood and take the train—it's the best, but people don't know it. I wanted to create a system that didn't just show stops, but showed <strong>adventures</strong>.
                            <em>"An agent in charge of fun activities... trailheads, coffee shops, music venues."</em>
                        </p>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            I knew AI wasn't great at being "creative" in the human sense, but it was excellent at scraping Google Maps and filtering data. My role was to provide the <strong>"Strategic Empathy"</strong>—knowing that a student doesn't just want a ride, they want a <em>connection</em> to their city.
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(0, 242, 234, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                            <Bus size={32} color="#00f2ea" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>Skill 1: AI as a Coworker</h2>
                            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Project: Toucan Transit</span>
                        </div>
                    </div>

                    <div className="glass-panel">
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            The syllabus introduced the concept of "AI as a Coworker" (Mollick, Week 10), but I truly understood it while building the <strong>Toucan Transit</strong> multi-agent architecture.
                        </p>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            <strong>The Challenge:</strong> I wasn't just writing code; I was orchestrating a team. The `StreamingOrchestratorAgent` had to manage the `CoffeeScout` and `RouteAgent` simultaneously. Initially, I treated them as tools—calculators.
                        </p>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            <strong>The Breakthrough:</strong> I realized I had to write "briefs" (prompts) for them like human interns. I had to give them context, defined boundaries, and permission to ask for clarification. This shift from "commander" to "manager" allowed me to build a 46,000 LOC application in weeks—a feat impossible for a solo developer without an AI team.
                        </p>

                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ color: '#00f2ea', margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Archive size={18} /> Project Artifacts
                            </h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                <a href="https://www.figma.com/make/e6NWJHYkVpu4ijB8ilJYcv/RideMate-Pitch-Deck-Design?node-id=0-1&t=bvnzlykIuQNq6i9q-1" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                                    <Image size={16} color="#7600ff" /> Figma Pitch Deck
                                </a>
                                <a href="https://gaustincc-my.sharepoint.com/:p:/g/personal/abel_rincon_g_austincc_edu/IQAob3MINwOVQbaGOwbNcceqAfsjYabjRShWUX5Oevj5h3A?e=iHy4f5" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                                    <Globe size={16} color="#00f2ea" /> Presentation Ver. 2
                                </a>
                                <a href="http://youtube.com/watch?v=_aRdYs5O_sk" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                                    <Play size={16} color="#ff0050" /> Demo Video 1
                                </a>
                                <a href="https://www.youtube.com/watch?v=hZdoD6_Gx2Q&t=118s" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                                    <Play size={16} color="#ff0050" /> Demo Video 2 (1:58)
                                </a>
                                <a href="https://www.youtube.com/watch?v=hZdoD6_Gx2Q" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                                    <Play size={16} color="#ff0050" /> Demo Video 3
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(255, 0, 80, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                            <AlertTriangle size={32} color="#ff0050" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>Theory to Practice: The Alien Mind</h2>
                            <span style={{ color: '#ff0050', fontWeight: 600 }}>Context: Neo4j Debugging</span>
                        </div>
                    </div>

                    <div className="glass-panel">
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Mollick describes AI as an "Alien Mind"—intelligence that is powerful but fundamentally different from ours. Initially, this was scary. But as I built with it, my perspective shifted.
                        </p>
                        <div style={{ borderLeft: '4px solid #ff0050', paddingLeft: '1.5rem', margin: '2rem 0' }}>
                            <em>"The Alien Mind isn't a replacement for the human; it's like a suit of armor or the <strong>Mushroom Power-up in Mario</strong>. It doesn't change who you are; it just lets you break bricks you couldn't break before."</em>
                        </div>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            This realization turned fear into utility. The automation allowed me to launch <strong>Toucan Transit</strong> in hours instead of weeks. I wasn't fighting the alien; I was wearing the suit.
                        </p>
                    </div>
                </section>

                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                            <Recycle size={32} color="white" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>Skill 2: Ethical Alignment</h2>
                            <span style={{ color: 'white', fontWeight: 600 }}>Project: TrashBot AI</span>
                        </div>
                    </div>

                    <div className="glass-panel">
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            In the "Algorithmic People Pleaser" unit, we learned AI tends to guess what we want. For <strong>TrashBot</strong>, this was a risk. If a user holds up a confusing item, the AI might just guess "Recycling" to make them happy.
                        </p>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            I had to explicitly program a "Brain Layer" that prioritized <strong>uncertainty over confidence</strong>. If the confidence was below 85%, the bot was instructed to ask for help rather than guess. This was a direct application of the "Human in the Loop" ethical framework.
                        </p>
                    </div>
                </section>

            </motion.div>
        </div>
    );
}
