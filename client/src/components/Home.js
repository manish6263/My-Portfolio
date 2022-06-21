import React from 'react';
import BlogSection from './BlogSection';
import ProjectSection from './ProjectSection';
import RecommendationSection from './RecommendationSection';
import SkillsSection from './SkillsSection';
import Title from './Title';

const Home = () => {
    return (
        <>
            <Title />
            <RecommendationSection />
            <SkillsSection />
            <ProjectSection />
            <BlogSection />
        </>
    )
}

export default Home;