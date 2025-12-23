
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BooksSection } from './components/BooksSection';
import { ArticlesSection } from './components/ArticlesSection';
import { GeminiAssistant } from './components/GeminiAssistant';
import { Section, Book, Article } from './types';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

// Data Generation
const BOOKS_DATA: Book[] = [
  {
    id: '1',
    title: 'The Poetess Soreti',
    titleAmharic: 'ባለቅኔዋ ሶሬቲ',
    coverUrl: 'https://res.cloudinary.com/duijvdn0m/image/upload/v1766494380/GG_Final_Cover_01-03_jnjqdk.png',
    synopsis: 'A moving tale of Soreti, a poetess whose verses challenge the silence of her generation.',
    fullDescription: 'In "The Poetess Soreti" (ባለቅኔዋ ሶሬቲ), Biniam Abura weaves a tapestry of rhythm and resilience. The story follows Soreti, a young woman in the highlands whose gift for poetry becomes both her sanctuary and her rebellion. Against a backdrop of shifting traditions, her verses capture the unspoken struggles of her community. It is a lyrical exploration of voice, identity, and the courage required to speak one\'s truth in a world that prefers silence.',
    price: '450 ETB',
    year: '2021'
  },
  {
    id: '2',
    title: 'Journey to Love',
    titleAmharic: 'ወደ ፍቅር ጉዞ',
    coverUrl: 'https://res.cloudinary.com/duijvdn0m/image/upload/v1766494374/image_2025-12-23_15-52-28_uyrrmk.png',
    synopsis: 'A transformative narrative following a protagonist\'s physical and spiritual pilgrimage in search of true connection.',
    fullDescription: '"Journey to Love" (ወደ ፍቅር ጉዞ) travels beyond the romantic to explore the profound landscapes of the human heart. The novel chronicles a physical journey across the diverse geographies of Ethiopia that mirrors an internal quest for understanding. Through encounters with strangers, sages, and long-lost friends, the protagonist uncovers that the destination is not a person, but a state of being. Biniam captures the chaotic rhythm of relationships and the serenity of self-discovery.',
    price: '380 ETB',
    year: '2023'
  },
  {
    id: '3',
    title: 'Soulmates',
    titleAmharic: 'የነፍስ እኩያሞች',
    coverUrl: 'https://res.cloudinary.com/duijvdn0m/image/upload/v1766494372/image_2025-12-23_15-52-00_lixaky.png',
    synopsis: 'A deep philosophical fiction about two intertwined destinies and the eternal connection between souls.',
    fullDescription: '"Soulmates" (የነፍስ እኩያሞች) is a daring intellectual and emotional exercise. Biniam argues that some connections transcend time and space. The story navigates the lives of two individuals who, despite societal barriers and distance, find their lives inexplicably linked. Blending magical realism with grounded emotion, this book questions the nature of destiny and the invisible threads that bind us all. Essential reading for anyone interested in the metaphysics of love.',
    price: '500 ETB',
    year: '2024'
  }
];

const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    title: 'Economic Shifts in East Africa',
    titleAmharic: 'የምስራቅ አፍሪካ ኢኮኖሚያዊ ለውጦች',
    publication: 'The Reporter',
    date: 'Oct 2023',
    excerpt: 'An analysis of how digital currency is reshaping cross-border trade in the Horn of Africa, questioning the stability of traditional banking.',
    category: 'Economy',
    url: '#'
  },
  {
    id: '2',
    title: 'Art in the Digital Age',
    titleAmharic: 'ጥበብ በዲጂታል ዘመን',
    publication: 'Addis Standard',
    date: 'Jan 2024',
    excerpt: 'Is the digitalization of Ethiopian orthodox art preservation or commodification? A look at the NFT craze hitting the capital.',
    category: 'Culture',
    url: '#'
  },
  {
    id: '3',
    title: 'The Coffee Ritual: A Social Contract',
    titleAmharic: 'የቡና ሥነ-ስርዓት እንደ ማህበራዊ ውል',
    publication: 'Tadias Magazine',
    date: 'Mar 2024',
    excerpt: 'Beyond the caffeine, the Bunna ceremony serves as a grassroots democratic forum where neighborhood conflicts find resolution.',
    category: 'Culture',
    url: '#'
  },
  {
    id: '4',
    title: 'Governance and the Youth',
    titleAmharic: 'አስተዳደር እና ወጣቱ',
    publication: 'Addis Fortune',
    date: 'May 2024',
    excerpt: 'With 70% of the population under 30, policy making can no longer ignore the digital native generation.',
    category: 'Politics',
    url: '#'
  }
];

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element || section === Section.HOME) {
      if(section === Section.HOME) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-modern-gold selection:text-white">
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      
      <main>
        <div id={Section.HOME}>
          <Hero onExplore={() => handleNavigate(Section.ABOUT)} />
        </div>
        
        <AboutSection />
        
        <BooksSection books={BOOKS_DATA} />
        
        <ArticlesSection articles={ARTICLES_DATA} />
      </main>

      {/* Footer / Contact Section */}
      <footer id={Section.CONTACT} className="bg-deep-earth text-white py-20 relative overflow-hidden">
        {/* Decorative huge text */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
           <span className="text-[20rem] font-bold whitespace-nowrap leading-none">BINIAM</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-gray-300 max-w-md font-serif">
              For speaking engagements, book signings, or press inquiries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-modern-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-modern-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-modern-gold transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
               <Mail size={18} className="text-modern-gold" />
               <span className="hover:text-white cursor-pointer transition-colors">contact@biniamabura.com</span>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              © {new Date().getFullYear()} Biniam Abura. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <GeminiAssistant contextData={{ books: BOOKS_DATA, articles: ARTICLES_DATA }} />
    </div>
  );
}

export default App;
