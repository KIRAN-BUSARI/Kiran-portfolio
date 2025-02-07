import { CgMenuRight, CgClose } from 'react-icons/cg';
import '../index.css';
import { useRef } from 'react';
import { useState } from 'react';
import audio from '/hover_audio_effect.mp3';

const links = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'projects',
    link: '#projects',
  },
  {
    name: 'Achievements',
    link: '#achievements',
  },
  // {
  //   name: 'contact',
  //   link: '#contact',
  // },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMenu = () => {
    setIsMenuOpen(false);
    location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-bg px-2 font-madeTommy md:px-[200px]">
      <nav className="pb-5 pt-5">
        <div className="flex w-full flex-wrap items-center justify-between">
          <a href="/" className="text-3xl font-medium uppercase">
            <h1 className="text-[#5B5B5B]">
              B<span className="text-secondary">K</span>
            </h1>
          </a>

          <button
            onClick={toggleMenu}
            className="relative block rounded-md p-2 text-primary lg:hidden"
          >
            {isOpen ? (
              <CgClose className="text-2xl" />
            ) : (
              <CgMenuRight className="text-2xl" />
            )}
          </button>
          {isOpen ? (
            <>
              <div className="fixed left-0 flex w-full md:hidden">
                <div
                  className={`absolute mt-10 flex h-48 w-full flex-col items-end text-start ${
                    isMenuOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="space-y-5 rounded-lg bg-bg p-[24px] pr-5 text-[20px] font-semibold shadow-lg">
                    {links.map((link) => (
                      <a
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={closeMenu}
                        className={`custom-underline relative block font-normal capitalize text-primary decoration-secondary underline-offset-8`}
                        href={link.link}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className={`mt-4 w-full lg:mt-0 lg:flex lg:w-auto lg:items-center lg:space-x-12 lg:space-y-0 ${
                  isOpen ? 'block' : 'hidden'
                }`}
              >
                {links.map((link) => (
                  <a
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`custom-underline relative block font-normal capitalize text-primary decoration-secondary underline-offset-8`}
                    href={link.link}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </>
          )}
          <audio src={audio} ref={audioRef}></audio>
        </div>
      </nav>
    </header>
  );
}
