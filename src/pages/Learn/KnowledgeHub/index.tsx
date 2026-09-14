import React, { useState } from 'react';
import { articlesData } from '../../../data/blogData';
import { KnowledgeHubHeroSection } from './sections/KnowledgeHubHeroSection';
import { KnowledgeHubGridSection } from './sections/KnowledgeHubGridSection';

const categories = [
  'All Guides',
  'Solar Basics',
  'Batteries',
  'Buying Solar',
  'Technical',
  'Existing Solar',
] as const;

export const KnowledgeHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Guides');

  const filteredArticles =
    selectedCategory === 'All Guides'
      ? articlesData
      : articlesData.filter((a) => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 space-y-2">
      {/* 1. Hero & Education Pillars */}
      <KnowledgeHubHeroSection />



      {/* 3. Filtered Articles Grid */}
      <KnowledgeHubGridSection
        articles={filteredArticles}
        basePath="/learn/knowledge-hub"
      />
    </div>
  );
};

export default KnowledgeHubPage;
