import axios from 'axios';
import { MOCK_BLOGS } from './mockData';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getBlogs = async () => {
    try {
        const response = await api.get('/blogs');
        return response.data;
    } catch (error) {
        console.warn('Failed to fetch from API, using mock data:', error);
        return MOCK_BLOGS;
    }
};

export const getBlogById = async (id: string) => {
    try {
        const response = await api.get(`/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.warn('Failed to fetch from API, using mock data:', error);
        const blog = MOCK_BLOGS.find(b => b.id === id);
        return blog || null;
    }
};

export const createBlog = async (blogData: { title: string; category: string[]; description: string; content: string; coverImage: string }) => {
    try {
        const response = await api.post('/blogs', {
            ...blogData,
            date: new Date().toISOString(),
        });
        return response.data;
    } catch (error) {
        console.warn('API fetch failed, simulating creation', error);
        // Simulate creation for UI optimism
        return {
            id: String(MOCK_BLOGS.length + 1),
            ...blogData,
            date: new Date().toISOString()
        };
    }
};
