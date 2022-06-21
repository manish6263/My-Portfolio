import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserState from './context/UserState';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import WriteRecommendation from './components/WriteRecommendation';
import ProjectPage from './components/ProjectPage';
import BlogPage from './components/BlogPage';
import AddProject from './components/AddProject';
import AddBlog from './components/AddBlog';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';
import AddSkill from './components/AddSkill';

function App() {
  return (
    <UserState>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/all-projects' element={<AllProjects />} />
          <Route exact path='/all-blogs' element={<AllBlogs />} />
          <Route exact path='/write-a-recommendation' element={<WriteRecommendation />} />
          <Route exact path='/project/add' element={<AddProject />} />
          <Route exact path='/blog/add' element={<AddBlog />} />
          <Route exact path='/skill/add' element={<AddSkill />} />
          <Route exact path='/project/:id' element={<ProjectPage />} />
          <Route exact path='/blog/:id' element={<BlogPage />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </UserState>
  );
}

export default App;