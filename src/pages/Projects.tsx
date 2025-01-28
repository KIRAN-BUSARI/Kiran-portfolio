import React, { useRef, useState } from 'react';
import Card from '../components/projectCard';
import Vastraa from '../assets/projects/vastraa.png';
import Vaiu from '../assets/projects/vaiu.png';
import Sanoopura from '../assets/projects/sanoopura.png';
import VideoConference from '../assets/projects/VideoConference.png';
import Knowly from '../assets/projects/Knowly.png';
import Realtime from '../assets/projects/realtime.png';
import Medihelp from '../assets/projects/medihelp.png';

import audio from '/hover_audio_effect.mp3';

interface ProjectData {
  title: string;
  image: string;
  link: string;
  category: string[];
  description: string;
  stack: string[];
}

const cardsData: ProjectData[] = [
  {
    title: 'Vaiu',
    image: Vaiu,
    link: 'https://vaiu.in',
    category: ['Fullstack'],
    description:
      'This is FullStack SAAS product built for easier project management and in-built git integration.  ',
    stack: [
      'hono',
      'nextjs',
      'appwrite',
      'shadcn-ui',
      'typescript',
      'tailwindcss',
    ],
  },
  {
    title: 'Live Docs',
    image: Realtime,
    link: 'https',
    category: ['Fullstack'],
    description:
      'This is FullStack SAAS project built for Real-time collaboration in docs, with a features like editing, viewing, and sharing documents. Live',
    stack: [
      'firebase',
      'nextjs',
      'shadcn-ui',
      'clerk',
      'typescript',
      'tailwindcss',
    ],
  },
  {
    title: 'Video Conferencing App',
    image: VideoConference,
    link: 'https://www.behance.net/gallery/124837177/Iconography-Favourite-Food-Icons',
    category: ['Fullstack'],
    description:
      'This is a platform offering seamless virtual meetings. It supports scheduled meetings, recordings, screen sharing, and interactive tools for collaboration. The chat-with-PDF feature allows users to share notes and chat with it using AI.',
    stack: [
      'nextjs',
      'firebase',
      'tailwindcss',
      'shadcnui',
      'typescript',
      'auth0',
      'clerk',
    ],
  },
  {
    title: 'Knowly',
    image: Knowly,
    link: 'https://lms-seven-fawn.vercel.app',
    category: ['Fullstack'],
    description:
      'Knowly is a Learning Management System (LMS) used to create, manage, and deliver educational content, featuring tools like code editor, chatbot, live classroom, and note taking. It streamlines online and in-person learning for institutions and organizations.',
    stack: [
      'mongodb',
      'express',
      'react',
      'nodejs',
      'javascript',
      'tailwindcss',
      'cloudinary',
    ],
  },
  {
    title: 'Vastraa',
    image: Vastraa,
    link: 'https://vastraa.in',
    category: ['Freelancing', 'Frontend'],
    description:
      'Vastraa is an online platform offering a curated collection of stylish and high-quality clothing. It provides a seamless shopping experience with user-friendly navigation, secure payments, and efficient order management.',
    stack: ['react', 'framer-motion', 'tailwindcss', 'typescript'],
  },
  {
    title: 'Sanoopura',
    image: Sanoopura,
    link: 'https://sanoopura.vercel.app',
    category: ['Freelancing', 'Frontend'],
    description:
      'Sanoopura Nrityalaya is a classical dance academy preserving and promoting traditional Indian dance. It offers training, workshops, and performances to nurture aspiring dancers and inspire cultural appreciation.',
    stack: ['react', 'framer-motion', 'tailwindcss', 'typescript'],
  },
  {
    title: 'MediHelp',
    image: Medihelp,
    link: 'https://',
    category: ['Fullstack', 'Freelancing'],
    description:
      'This is a MERN stack application for medical representative and Doctors, where the Medical Representative can book appointment, display medicins, directly contact Doctor, Broucher Management for those heavy materials.',
    stack: [
      'mongodb',
      'express',
      'react',
      'nodejs',
      'javascript',
      'tailwindcss',
      'shadcn-ui',
      'cloudinary',
    ],
  },
];

const CardComponent: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const getFilteredCards = () => {
    if (filter === 'All') {
      return cardsData;
    }

    return cardsData.filter((card) => card.category.includes(filter));
  };

  const sortedCards = getFilteredCards();

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set the volume
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to start
    }
  };

  return (
    <div className="container mx-auto mb-16">
      <div
        className="-mt-40 flex flex-col pt-32 text-center leading-[150%] text-primary lg:-mt-[157px] lg:pt-[130px] lg:text-left"
        id="projects"
      >
        <h1 className="text-3xl text-[38px] font-extrabold leading-[140%] lg:text-5xl lg:font-medium">
          Where <span className="text-secondary">logic</span>{' '}
          <p className="m-0 h-0 p-0 md:block lg:hidden">
            <br />
          </p>
          meets <span className="text-secondary">pixel</span>
          <span>.</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 items-center justify-center gap-2 pb-[40px] pt-[40px] sm:gap-4 lg:flex lg:justify-start">
        <button
          onClick={() => handleFilterChange('Frontend')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`rounded-full border px-4 py-1 text-primary backdrop-blur-sm transition-all duration-300 hover:border-secondary sm:px-6 md:font-semibold lg:font-normal ${
            filter === 'Frontend' ? 'bg-secondary' : ''
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => handleFilterChange('Fullstack')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`rounded-full border px-4 py-1 text-primary backdrop-blur-sm transition-all duration-300 hover:border-secondary sm:px-6 md:font-semibold lg:font-normal ${
            filter === 'Fullstack' ? 'bg-secondary' : ''
          }`}
        >
          Fullstack
        </button>
        <button
          onClick={() => handleFilterChange('Freelancing')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`rounded-full border px-4 py-1 text-primary backdrop-blur-sm transition-all duration-300 hover:border-secondary sm:px-6 md:font-semibold lg:font-normal ${
            filter === 'Freelancing' ? 'bg-secondary text-gray-950' : ''
          }`}
        >
          Freelancing
        </button>
        <button
          onClick={() => handleFilterChange('Archive')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`rounded-full border px-4 py-1 text-primary backdrop-blur-sm transition-all duration-300 hover:border-secondary sm:px-6 md:font-semibold lg:font-normal ${
            filter === 'Archive' ? 'bg-secondary' : ''
          }`}
        >
          Archive
        </button>
        <audio src={audio} ref={audioRef}></audio>
      </div>

      <div className="mb-16 grid gap-8 sm:grid-cols-1 md:mx-auto md:grid-cols-2 lg:grid-cols-2">
        {sortedCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            link={card.link}
            stacks={card.stack}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
