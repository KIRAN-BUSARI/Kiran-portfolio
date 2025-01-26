import rightImage from '../assets/profile.png';
import { Social } from '@/components/Social';

export default function Aboutme() {
  return (
    <div className="min-h-[85vh] w-full place-content-center" id="about">
      <div className="flex flex-col-reverse items-center justify-between lg:flex-row lg:items-start">
        <div className="h-auto w-full place-content-center lg:h-[490px] lg:w-[650px] lg:xl:pr-6 xl:w-[650px]">
          <div className="mb-2 mt-10 flex w-full flex-col items-center justify-center space-y-5 text-pretty text-base leading-[170%] text-primary1 md:mt-0 lg:items-start lg:text-[16px]">
            <h1 className="text-center text-[38px] font-extrabold text-primary lg:text-left lg:text-5xl lg:font-medium">
              All about me
              <span className="text-secondary">.</span>
            </h1>
            <p className="text-center text-primary1 lg:text-left">
              Currently, I am based in Ballari, India, pursuing by B.E in{' '}
              <span className="text-primary">AI-ML</span> at Ballari Institute
              of Technology And Management
            </p>
            <p className="text-center text-primary1 lg:text-left">
              I completed my{' '}
              <span className="text-primary">
                post-graduation in UI/UX Design
              </span>{' '}
              from Wiztoonz College of Media & Design, certified under Jain
              University.
            </p>
            <p className="text-center text-primary1 lg:text-left">
              My focus is predominantly on product design, but I also dabble in
              visual design, logo design, and costume design! I believe in
              continuously learning and upgrading my skills, which always
              excites me. Minimalist design is key for me, as I approach
              functional, clean, and intuitive design
            </p>
            <p className="text-center text-primary1 lg:text-left">
              If you would like to reach me, or perhaps meet for coffee, you can
              email me at{' '}
              <span className="text-primary">
                <a href="#">kiranbusari.dev@gmail.com</a>
              </span>{' '}
              or reach out to me via WhatsApp at{' '}
              <span className="text-primary">
                <a href="https://wa.me/9900485461">+91 99004 85461</a>
              </span>
              .
            </p>
            <Social />
          </div>
        </div>
        <div className="relative -mt-6 mb-5 h-52 w-52 place-content-center rounded-[8px] lg:ml-0 lg:mt-0 lg:rounded-[4px] xl:w-[424px]">
          <img
            src={rightImage}
            className="h-60 w-52 rounded-[8px] object-cover lg:h-[482px] lg:w-full lg:rounded-[4px]"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
