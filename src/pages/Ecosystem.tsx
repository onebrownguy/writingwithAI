import { motion } from 'framer-motion';
import { Globe, Zap, BookOpen, Building, Play } from 'lucide-react';
import aiSchematic from '../assets/ai_logic_schematic.png';

export default function Ecosystem() {
    return (
        <div className="container">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 style={{ marginBottom: '1rem' }}>The <span className="text-gradient">Ecosystem</span></h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                    Moving beyond individual projects to shape institutional strategy and community impact.
                </p>

                <section style={{ marginBottom: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(0, 242, 234, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                            <Globe size={32} color="#00f2ea" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>System Architecture</h2>
                            <span style={{ color: '#a1a1aa', fontWeight: 600 }}>The Co-intelligence & Trifecta Framework</span>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ textAlign: 'center', background: 'rgba(0,0,0,0.4)' }}>
                        <img
                            src={aiSchematic}
                            alt="Retro-futuristic AI Logic Schematic"
                            style={{
                                width: '100%',
                                maxWidth: '900px',
                                borderRadius: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 0 30px rgba(0, 242, 234, 0.15)'
                            }}
                        />
                        <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '2rem auto 0' }}>
                            Visualizing the synergy between <strong>Mollick's 4 Rules of Co-intelligence</strong> and the <strong>Centaur Trifecta</strong> (Understand, Evaluate, Use). This framework ensures human direction remains the "Brain Layer" of all AI deployments.
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(118, 0, 255, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                            <Building size={32} color="#7600ff" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>Collegewide AI Strategic Planning</h2>
                            <span style={{ color: '#a1a1aa', fontWeight: 600 }}>Student Representative & Working Group Member</span>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', background: '#7600ff', color: 'white', borderBottomLeftRadius: '1rem', fontWeight: 'bold' }}>
                            Governance
                        </div>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Beyond coding, I have taken an active role in defining how <strong>Austin Community College</strong> adapts to the AI revolution. As a member of the <strong>AI Literacy Working Group</strong> (alongside Manuel Duran and Sea Loraas), I am helping define "AI Fluency" for over 40,000 students.
                        </p>
                        <div className="grid-3" style={{ marginTop: '2rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem' }}>
                                <h4 style={{ margin: '0 0 0.5rem', color: '#00f2ea' }}>The Gap</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Identifying that students lack a voice in AI policy decisions (equity, accessibility).</p>
                            </div>
                            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem' }}>
                                <h4 style={{ margin: '0 0 0.5rem', color: '#00f2ea' }}>The Action</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Kickoff on Nov 21, 2025 to create the "Student AI Use Policy" framework.</p>
                            </div>
                            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem' }}>
                                <h4 style={{ margin: '0 0 0.5rem', color: '#00f2ea' }}>The Impact</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Ensuring AI tools are accessible tools of empowerment, not just surveillance.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ marginBottom: '6rem' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(255, 0, 80, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                            <Zap size={32} color="#ff0050" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>Hackathon & Innovation</h2>
                            <span style={{ color: '#a1a1aa', fontWeight: 600 }}>Gemini Hackathon & EDGE Team</span>
                        </div>
                    </div>

                    <div className="glass-panel">
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Innovation doesn't happen in a vacuum. Through the <strong>Gemini Hackathon</strong> and my role as <strong>EDGE Team President</strong>, I've worked to create spaces where students can safely experiment with these "alien minds."
                        </p>
                        <p style={{ lineHeight: 1.8, fontSize: '1.1rem', marginTop: '1rem' }}>
                            <strong>The Mission:</strong> As a Latino in tech, I see the widening gap. The <strong>Stanford HAI Index Report (Finding #9)</strong> reveals that over 80% of educators want to teach AI, yet less than half feel empowered to do so. My goal is to close this gap—empowering students to install Claude, run Codex, and become the architects of their own future. The rise of <a href="https://www.park.edu/blog/ai-in-education-the-rise-of-intelligent-tutoring-systems/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff0050', textDecoration: 'underline' }}>intelligent tutoring systems</a> shows the potential, but as <a href="https://web.archive.org/web/20250727182038/https:/www.nytimes.com/2025/07/18/opinion/ai-chatgpt-school.html" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ea', textDecoration: 'underline' }}>Meghan O'Rourke's powerful essay</a> reveals, we must preserve the human act of attention and care that makes meaning possible.
                        </p>
                        <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                            <a href="https://austincc.campuslabs.com/engage/organization/edgeteam" target="_blank" rel="noopener noreferrer">
                                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Zap size={18} /> Join the EDGE Team
                                </button>
                            </a>
                        </div>

                        {/* Featured Reflection / LinkedIn Post */}
                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '1rem', borderLeft: '4px solid #7600ff' }}>
                            <h3 style={{ marginTop: 0, fontSize: '1.2rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Globe size={16} /> Featured Reflection: The Education Gap
                            </h3>
                            <div style={{ fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.7 }}>
                                <p>"I was going over the Stanford AI index report and something imaginative caught my eye. The major point was 'AI and computer science education is expanding—but gaps in access and readiness persist.'</p>
                                <p>Since 2019, we have an insane jump in the numbers of countries that now plan to or do offer CS education for grades k-12. Those numbers have doubled and it's 2/3's of the world's countries. Just in the US, there's been an increase in CS graduates by 22% in the last 10 years. The numbers sound good, right?</p>
                                <p>However, with the latest advancements of AI in society, <strong>81% of those teachers are saying that AI should be a foundational pillar in CS education and half of those say that they do not feel empowered to teach it.</strong> There is a large gap forming right in front of our eyes.</p>
                                <p>As a heavy Claude CLI user, I have seen the incredible power of prompt engineering. Once you can overcome that command line fear, it's off to the races. I was at a hackathon last weekend and I managed to teach a hacker team of 13-year-olds how to push their code to GitHub. I was incredibly shocked at how intuitive it seemed to them. It gave me a glimpse into what coding should look like... but for the team of 18-20 year olds I coached, they were stuck in a cycle of problem &gt; solution &gt; idea &gt; concept.</p>
                                <p>Teachers almost seem like they are going to also wear the systems architect hat in how AI is used in all systems of society. That's a tough challenge to figure out. Where do we start?"</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '1rem', borderRadius: '1rem' }}>
                            <Globe size={32} color="#eab308" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0 }}>Professional Ecosystem</h2>
                            <span style={{ color: '#a1a1aa', fontWeight: 600 }}>Experience, Skills & Credentials</span>
                        </div>
                    </div>

                    {/* Signature Project Highlight */}
                    <div className="glass-panel" style={{ marginBottom: '2rem', borderLeft: '4px solid #00f2ea', background: 'linear-gradient(to right, rgba(0,242,234,0.05), transparent)' }}>
                        <h3 style={{ margin: '0 0 1rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Zap size={20} color="#00f2ea" /> Signature Project: AI Alliance Grant Search
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            Developed a <strong>Graph RAG System</strong> for the student AI Alliance.
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            <li>✅ <strong>Stack:</strong> Python, FastAPI, Neo4j, Pinecone</li>
                            <li>✅ <strong>Performance:</strong> &lt; 500ms latency</li>
                            <li>✅ <strong>Scale:</strong> 205K+ grants indexed</li>
                            <li>✅ <strong>Cost:</strong> $35/mo (High ROI)</li>
                        </ul>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                        {/* Technical Arsenal */}
                        <div>
                            <h3 style={{ color: '#a1a1aa', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Technical Arsenal</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['Graph RAG', 'Neo4j', 'Pinecone', 'LLM Agents', 'Python', 'FastAPI', 'React 19', 'Next.js 15', 'TypeScript', 'Docker', 'PostgreSQL'].map(skill => (
                                    <span key={skill} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Professional Journey */}
                        <div>
                            <h3 style={{ color: '#a1a1aa', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Experience</h3>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontWeight: 600 }}>
                                    <span>ICS (Integrated Computer Solutions)</span>
                                    <span style={{ color: '#00f2ea' }}>2021 - Present</span>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Client Services Representative</div>
                                <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                                    <li>Security incident response & C-suite consulting.</li>
                                    <li>Supporting 200+ law firm clients.</li>
                                </ul>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontWeight: 600 }}>
                                    <span>uShip</span>
                                    <span style={{ color: 'var(--text-secondary)' }}>2015 - 2020</span>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Support Specialist (Spanish Lead)</div>
                            </div>
                        </div>
                    </div>

                    {/* Original Credentials Block */}
                    <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ minWidth: '80px', height: '80px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="https://sites.austincc.edu/digital-fluency/wp-content/uploads/sites/137/2021/04/cropped-Digital-Fluency-Favicon-1.png" alt="ACC Logo" style={{ width: '50px', height: '50px' }} />
                        </div>
                        <div>
                            <h3 style={{ margin: 0, color: 'white' }}>Problem Solving with A.I.</h3>
                            <p style={{ color: '#eab308', fontWeight: 700, margin: '0.25rem 0' }}>ACC Digital Fluency Badge</p>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                Verified ability to apply artificial intelligence tools to analyze complex problems, generate creative solutions, and evaluate ethical implications.
                            </p>
                            <a href="https://sites.austincc.edu/digital-fluency/problem-solving-with-a-i/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', color: '#00f2ea', textDecoration: 'none', borderBottom: '1px solid #00f2ea' }}>View Credential →</a>
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: '6rem', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Learning Resources</h2>
                    <div className="glass-panel">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#00f2ea" />
                                    <a href="https://web.archive.org/web/20250727182038/https://www.nytimes.com/2025/07/18/technology/ai-new-movement-being-a-better-human" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        The New Movement: Being a Better Human
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>NYT Archive • The societal shift towards human-centric AI.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#ff0050" />
                                    <a href="https://www.science.org/doi/10.1126/sciadv.adn5290" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        AI Beat the Test
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>Science.org • Research on AI performance benchmarks.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <BookOpen size={18} color="#eab308" />
                                    <span style={{ fontSize: '1.1rem', color: 'white' }}>Cointelligence: Four Rules & AI as our Future</span>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>Ethan Mollick • Foundational readings on Human-AI collaboration.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#7600ff" />
                                    <a href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        The AI Revolution: The Road to Superintelligence
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>Tim Urban • A deep dive into exponential growth and AI futures.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#00f2ea" />
                                    <a href="https://hai.stanford.edu/research/ai-index-report" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        AI Index Report 2025
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>Stanford HAI • Key data on AI education and global trends.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#7600ff" />
                                    <a href="https://web.archive.org/web/20250727182038/https:/www.nytimes.com/2025/07/18/opinion/ai-chatgpt-school.html" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        AI in Schools: The New Reality
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>NY Times Archive • The evolving role of AI in education.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#eab308" />
                                    <a href="https://www.psychologytoday.com/us/blog/the-digital-self/202504/ai-beat-the-turing-test-by-being-a-better-human" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        AI Beat the Turing Test by Being a Better Human
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>Psychology Today • What passing the Turing test really means for humanity.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Play size={18} color="#7600ff" />
                                    <a href="https://www.youtube.com/watch?v=MV8SEoHDCUs" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        Understanding LLMs: A Deep Dive
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>YouTube • Technical exploration of large language models.</div>
                            </li>

                            <li style={{ marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#00f2ea" />
                                    <a href="https://www.brainonllm.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        Brain on LLM
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>Research & insights on how LLMs work and their implications.</div>
                            </li>

                            <li style={{ marginBottom: '0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <Globe size={18} color="#ff0050" />
                                    <a href="https://www.weforum.org/stories/2025/01/elevating-uniquely-human-skills-in-the-age-of-ai/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: 'white', textDecoration: 'none' }}>
                                        Elevating Uniquely Human Skills in the Age of AI
                                    </a>
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '1.6rem' }}>World Economic Forum • The skills that will define human value in an AI-driven world.</div>
                            </li>
                        </ul>
                    </div>
                </section>

            </motion.div>
        </div>
    );
}
