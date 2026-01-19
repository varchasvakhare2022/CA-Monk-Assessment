import { useCreateBlog } from '@/hooks/useBlogs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export const CreateBlogForm = () => {
    const createBlogMutation = useCreateBlog();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        content: '',
        coverImage: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg' // Default image
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!formData.title || !formData.content) return;

        createBlogMutation.mutate({
            ...formData,
            category: formData.category.split(',').map(c => c.trim()).filter(Boolean)
        }, {
            onSuccess: () => {
                navigate('/');
            }
        });
    };

    return (
        <div className="h-full overflow-y-auto bg-background/50 p-6 md:p-10">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Create New Blog</CardTitle>
                    <CardDescription>Share your thoughts with the world</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                name="title"
                                placeholder="Enter blog title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                name="category"
                                placeholder="Comma separated (e.g. Tech, Lifestyle)"
                                value={formData.category}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="coverImage">Cover Image URL</Label>
                            <Input
                                id="coverImage"
                                name="coverImage"
                                placeholder="https://..."
                                value={formData.coverImage}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Short Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                placeholder="Brief summary of the blog..."
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content">Content</Label>
                            <Textarea
                                id="content"
                                name="content"
                                placeholder="Write your blog content here..."
                                value={formData.content}
                                onChange={handleChange}
                                className="min-h-[200px]"
                                required
                            />
                        </div>

                        <div className="flex justify-end pt-4">
                            <Button type="button" variant="outline" className="mr-2" onClick={() => navigate('/')}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={createBlogMutation.isPending}>
                                {createBlogMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Publish Blog
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
