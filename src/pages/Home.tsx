import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import Hero from './Hero';
import Cards from './Projects';
import Aboutme from '../pages/Aboutme';
import SocialMedia from '../components/SocialMedia';
import Achievements from './Achievements';
const Home = forwardRef((_props, ref) => {
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const aboutmeRef = useRef(null);
  const achievementsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === cardsRef.current) {
            setShowSocialMedia(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    heroRef: ref,
    cardsRef: cardsRef,
  }));

  return (
    <div className="ml-[16px] mr-[16px] min-h-screen font-madeTommy lg:ml-[200px] lg:mr-[200px]">
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={cardsRef}>
        <Cards />
      </div>
      <div ref={achievementsRef}>
        <Achievements />
      </div>
      <div ref={aboutmeRef}>
        <Aboutme />
      </div>
      {showSocialMedia && (
        <div className="fixed right-0 top-[290px] z-20">
          <SocialMedia />
        </div>
      )}
    </div>
  );
});

export default Home;
