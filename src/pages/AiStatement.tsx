import { motion } from 'framer-motion';

export default function AiStatement() {
    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 style={{ marginBottom: '2rem' }}>AI Use Statement</h1>

                <div className="glass-panel" style={{ marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
                        In the spirit of this course, I have used Artificial Intelligence extensively to create this portfolio. However, I remained the <strong>Director</strong> of the project at all times.
                    </p>
                </div>

                <h3>Tools Used</h3>
                <ul style={{ lineHeight: 2, fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    <li><strong>Claude 3.5 Sonnet (via Antigravity):</strong> Acting as my pair programmer, Claude helped scaffold this React application, write CSS animations, and brainstorm the connection between my syllabus concepts and project history.</li>
                    <li><strong>GitHub Copilot:</strong> Used for autocomplete within VS Code to speed up TypeScript boilerplate generation.</li>
                    <li><strong>Midjourney / DALL-E:</strong> Used to generate the "Centaur" conceptual art assets (placeholders).</li>
                </ul>

                <h3>How I Remained in Charge</h3>
                <div className="glass-panel">
                    <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                        While AI wrote much of the code for this site, <strong>I defined the content strategy</strong>.
                    </p>
                    <p style={{ lineHeight: 1.8 }}>
                        The stories about Toucan Transit, the ethical frameworks, and the future vision are deeply personal and derived from my lived experience this semester. The AI did not "hallucinate" my learning; it helped me structure and present it. I reviewed every line of text and code to ensure it accurately reflected my voice and principles.
                    </p>
                </div>

            </motion.div>
        </div>
    );
}
