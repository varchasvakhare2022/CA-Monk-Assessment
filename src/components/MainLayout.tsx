import { Outlet, useLocation } from 'react-router-dom';
import { BlogList } from './BlogList';
import { Header } from './Header';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

export const MainLayout = () => {
    const location = useLocation();
    const isRoot = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen w-full bg-background text-foreground font-sans">
            <div className="sticky top-0 z-50">
                <Header />
            </div>

            <Banner />

            <div className="flex flex-1 container mx-auto px-0 md:px-8 max-w-7xl">
                {/* Left Panel: Blog List */}
                <div className={cn(
                    "border-r bg-muted/5 transition-all md:min-h-[calc(100vh-theme(spacing.16))]",
                    "md:flex md:w-[350px] lg:w-[400px] shrink-0",
                    isRoot ? "flex w-full min-h-screen md:min-h-0" : "hidden"
                )}>
                    {/* Sticky Sidebar wrapper */}
                    <div className="w-full md:sticky md:top-20 md:h-[calc(100vh-theme(spacing.24))] md:overflow-y-auto scrollbar-hide">
                        <BlogList />
                    </div>
                </div>

                {/* Right Panel: Content */}
                <div className={cn(
                    "flex-1 bg-white min-h-[500px]",
                    !isRoot ? "flex w-full" : "hidden md:flex"
                )}>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};
