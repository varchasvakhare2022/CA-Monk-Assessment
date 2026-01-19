import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBlogs = async () => {
    const response = await api.get('/blogs');
    return response.data;
};

export const getBlogById = async (id: string) => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
};

export const createBlog = async (blogData: { title: string; category: string[]; description: string; content: string; coverImage: string }) => {
    const response = await api.post('/blogs', {
        ...blogData,
        date: new Date().toISOString(),
    });
    return response.data;
};
