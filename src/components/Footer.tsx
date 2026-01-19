export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 px-8 flex-shrink-0">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white font-bold">
                        <div className="h-6 w-6 rounded bg-white flex items-center justify-center text-slate-950 text-xs text-center font-bold">C</div>
                        CA MONK
                    </div>
                    <p className="text-slate-500">Empowering the next generation of financial leaders.</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">RESOURCES</h4>
                    <ul className="space-y-2">
                        <li>Blog</li>
                        <li>Webinars</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">PLATFORM</h4>
                    <ul className="space-y-2">
                        <li>Job Board</li>
                        <li>Practice Tests</li>
                        <li>Mentorship</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">CONNECT</h4>
                    <ul className="space-y-2">
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
