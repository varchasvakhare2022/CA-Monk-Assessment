import { useBlogs } from '@/hooks/useBlogs';
import { BlogCard } from '@/components/BlogCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlogList = () => {
    const { data: blogs, isLoading, isError } = useBlogs();

    if (isError) return <div className="p-4 text-red-500">Failed to load blogs</div>;

    return (
        <div className="flex flex-col bg-slate-50 border-r border-slate-100 min-h-full">
            {/* Header Left */}
            <div className="p-6 pb-2 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900">Latest Articles</h2>
                    <Link to="/create">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
                {/* Optional Search - keeping it for UX but making it minimal */}
                {/* 
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search articles..." 
                        className="pl-8 bg-white border-slate-200" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                 */}
            </div>

            <div className="flex-1 px-4 py-2">
                {isLoading ? (
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <Skeleton key={i} className="h-32 w-full bg-white rounded-xl" />
                        ))}
                    </div>
                ) : (
                    blogs?.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                )}
                {blogs?.length === 0 && (
                    <div className="text-center text-muted-foreground mt-10">
                        No blogs found.
                    </div>
                )}
            </div>
        </div>
    );
};
