import type { Blog } from '@/hooks/useBlogs';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Link, useParams } from 'react-router-dom';

interface BlogCardProps {
    blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    const { id } = useParams();
    const isActive = id === String(blog.id);

    return (
        <Link to={`/blog/${blog.id}`}>
            <Card className={cn(
                "group relative mb-3 cursor-pointer transition-all border-0 shadow-none rounded-xl overflow-hidden",
                isActive ? "bg-brand-50/50" : "bg-white hover:bg-slate-50"
            )}>
                {/* Active Border Indicator */}
                <div className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 bg-primary transition-opacity",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )} />

                <CardContent className="p-5 pl-7 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                {blog.category[0]}
                            </span>
                        </div>
                        <span className="text-[11px] text-slate-400">
                            2 days ago
                        </span>
                    </div>

                    <div className="space-y-1">
                        <h3 className={cn(
                            "text-base font-bold leading-snug text-slate-900 group-hover:text-primary transition-colors",
                            isActive && "text-primary"
                        )}>
                            {blog.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                            {blog.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#f3f0ff] text-[#7c3aed]">
                            Featured
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};
