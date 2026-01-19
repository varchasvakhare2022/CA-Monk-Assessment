import { useBlog } from '@/hooks/useBlogs';
import { useParams, Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2, ThumbsUp, MessageSquare } from 'lucide-react';
import { Footer } from './Footer';

export const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, isError } = useBlog(id || '');

    if (!id) return (
        // Placeholder state matching the design aesthetics (clean)
        <div className="flex flex-col items-center justify-center h-full bg-white text-slate-400 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center">
                <ArrowLeft className="w-6 h-6" />
            </div>
            <p className="font-medium">Select an article to start reading</p>
        </div>
    );

    if (isLoading) return (
        <div className="p-8 space-y-8 max-w-4xl mx-auto w-full bg-white">
            <Skeleton className="aspect-[2/1] w-full rounded-xl" />
            <div className="space-y-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
        </div>
    );

    if (isError || !blog) return (
        <div className="p-8 flex flex-col items-center justify-center h-full text-destructive">
            <p className="font-medium text-lg">Failed to load blog details</p>
        </div>
    );

    return (
        <div className="w-full bg-white">
            <div className="max-w-4xl mx-auto p-6 md:p-10 pb-20">
                <Link to="/" className="md:hidden inline-flex mb-6">
                    <Button variant="ghost" size="sm" className="pl-0 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                </Link>

                <div className="space-y-8">
                    {/* Cover Image */}
                    <div className="aspect-[21/9] w-full overflow-hidden rounded-xl shadow-sm bg-slate-100">
                        <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Header Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-sm font-bold text-primary uppercase tracking-wider">
                            <span>{blog.category[0]}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 font-normal normal-case">5 min read</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                                {blog.title}
                            </h1>

                            <Button className="bg-[#5c54e5] hover:bg-[#4f46e5] text-white gap-2 px-6 h-10 rounded-lg font-medium">
                                <Share2 className="w-4 h-4" /> Share Article
                            </Button>
                        </div>

                        {/* Stats Box */}
                        <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 md:px-8 border border-slate-100 mt-8">
                            <div className="grid grid-cols-3 w-full gap-4 text-center divide-x divide-slate-200">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</p>
                                    <p className="text-sm font-bold text-slate-900">{blog.category[0] || 'General'}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Read Time</p>
                                    <p className="text-sm font-bold text-slate-900">5 Mins</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Date</p>
                                    <p className="text-sm font-bold text-slate-900">
                                        {new Date(blog.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary">
                        <p className="lead text-lg md:text-xl text-slate-600 font-normal">
                            {blog.description}
                        </p>

                        {/* Example sub-sections to match mockup structure */}
                        <h3>The Rise of Automated Accounting</h3>
                        <p>
                            Automation is no longer a buzzword; it's a reality. Routine tasks like data entry, reconciliation, and payroll processing are being automated at an unprecedented pace. This shift allows finance professionals to focus on high-value activities such as:
                        </p>
                        <ul>
                            <li>Strategic financial planning and analysis (FP&A)</li>
                            <li>Risk management and compliance auditing</li>
                            <li>Advisory services for business growth and sustainability</li>
                        </ul>

                        <h3>Blockchain: Beyond Cryptocurrency</h3>
                        <p>
                            While Bitcoin grabs the headlines, the underlying technology—blockchain—is quietly revolutionizing auditing. The immutable ledger provides a "single source of truth" that could potentially eliminate the need for sampling in audits.
                        </p>

                        {/* Quote Block */}
                        <div className="my-8 bg-[#f0f4ff] p-6 rounded-lg border-l-4 border-[#3b82f6]">
                            <p className="text-[#1e3a8a] font-medium italic m-0">
                                "The accountant of the future will be a data scientist, a storyteller, and a strategic partner, all rolled into one."
                            </p>
                        </div>

                        <div className="whitespace-pre-wrap">
                            {blog.content}
                        </div>
                    </article>

                    {/* Author Section */}
                    <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://github.com/shadcn.png"
                                alt="Author"
                                className="w-10 h-10 rounded-full border border-slate-200"
                            />
                            <div className="text-sm">
                                <p className="font-bold text-slate-900">Written by Arjun Mehta</p>
                                <p className="text-slate-500">Senior Financial Analyst</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-slate-400">
                            <ThumbsUp className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                            <MessageSquare className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer moved to MainLayout */}
        </div>
    );
};
