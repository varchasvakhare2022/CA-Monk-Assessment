import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <Link to="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg">
                        C
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">CA MONK</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
                    <Link to="#" className="hover:text-primary transition-colors">Tools</Link>
                    <Link to="#" className="hover:text-primary transition-colors">Practice</Link>
                    <Link to="#" className="hover:text-primary transition-colors">Events</Link>
                    <Link to="#" className="hover:text-primary transition-colors">Job Board</Link>
                    <Link to="#" className="hover:text-primary transition-colors">Points</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6">Profile</Button>
                </div>
            </div>
        </header>
    );
};
