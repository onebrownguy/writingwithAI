import { motion } from 'framer-motion';
import { Shield, Brain, Layers, Globe } from 'lucide-react';

export default function CompassPage() {
    const principles = [
        {
            icon: <Shield size={40} color="#ff0050" />,
            title: "1. Human Judgment Wins",
            desc: "Humans must retain final authority, governance, and observability. We challenge AI to slow down and prioritize bias reduction. It is our job to ensure the 'black box' doesn't become a black hole of accountability."
        },
        {
            icon: <Brain size={40} color="#00f2ea" />,
            title: "2. The Trifecta Checklist",
            desc: "Understand → Evaluate → Use. This loop ensures critical thinking is applied before touching the steering wheel. We never auto-pilot; we verify every output against our own domain knowledge."
        },
        {
            icon: <Layers size={40} color="#eab308" />,
            title: "3. Technical Foundation",
            desc: "Know the tool to not be fooled by it. AI chatbots are 'people pleasers'—they prioritize satisfaction over truth, as documented by Article 19's research on algorithmic people pleasers. Understanding this design flaw allows us to filter out 'greedy' tools and inspect confident hallucinations."
        },
        {
            icon: <Globe size={40} color="#7600ff" />,
            title: "4. Literacy & Access for All",
            desc: "Democratization is non-negotiable. People of all backgrounds must have the resources to implement AI workflows. As a developer, I see how easy it is to wear four hats at once; everyone deserves that leverage."
        }
    ];

    return (
        <div className="container">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 style={{ marginBottom: '1rem' }}>The <span className="text-gradient">Compass</span></h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                    My Personal AI Literacy Framework. These principles guide every interaction I have with machine intelligence. Informed by frameworks from <a href="https://digitalpromise.org/initiative/artificial-intelligence-in-education/ai-literacy/" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ea', textDecoration: 'underline' }}>Digital Promise</a> and the <a href="https://www.digitaleducationcouncil.com/post/digital-education-council-ai-literacy-framework" target="_blank" rel="noopener noreferrer" style={{ color: '#7600ff', textDecoration: 'underline' }}>Digital Education Council</a>, but shaped by my own experience building with AI.
                </p>

                <div className="grid-3">
                    {principles.map((p) => (
                        <motion.div
                            key={p.title}
                            className="glass-panel"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: principles.indexOf(p) * 0.2 }}
                            style={{ minHeight: '300px', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', width: 'fit-content', padding: '1rem', borderRadius: '50%' }}>
                                {p.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="glass-panel" style={{ marginTop: '4rem', background: 'linear-gradient(45deg, rgba(0,242,234,0.1), rgba(118,0,255,0.1))' }}>
                    <h2>Framework in Action</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        During the <strong>Toucan Transit</strong> development, I hit a moment where the AI suggested a complex caching layer that theoretically improved speed but introduced a data freshness risk.
                        Applying my principle of <strong>"Human is the Architect"</strong>, I rejected the optimized code because it violated the core user need for <em>real-time</em> bus accuracy. The AI optimized for metrics; I optimized for the student standing in the rain.
                    </p>
                </div>

            </motion.div>
        </div>
    );
}
