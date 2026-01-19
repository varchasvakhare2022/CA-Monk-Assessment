import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBlogs, getBlogById, createBlog } from '@/lib/api';

export interface Blog {
    id: number;
    title: string;
    category: string[];
    description: string;
    date: string;
    coverImage: string;
    content: string;
}

export const useBlogs = () => {
    return useQuery<Blog[]>({
        queryKey: ['blogs'],
        queryFn: getBlogs,
    });
};

export const useBlog = (id: string) => {
    return useQuery<Blog>({
        queryKey: ['blogs', id],
        queryFn: () => getBlogById(id),
        enabled: !!id,
    });
};

export const useCreateBlog = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
};
