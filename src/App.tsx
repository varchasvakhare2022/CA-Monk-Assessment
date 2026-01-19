import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/MainLayout';
import { BlogDetails } from '@/components/BlogDetails';
import { CreateBlogForm } from '@/components/CreateBlogForm';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white">
      {/* Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">👋</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Welcome to CA Monk Blog</h2>
        <p className="text-slate-500 max-w-md text-lg leading-relaxed">
          Select an article from the list to start reading, or share your own thoughts with the community.
        </p>
        <Link to="/create">
          <Button size="lg" className="rounded-full px-8">Create New Post</Button>
        </Link>
      </div>

      {/* Footer moved to MainLayout */}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="create" element={<CreateBlogForm />} />
      </Route>
    </Routes>
  );
}

export default App;
