import { Social } from '../components/Social';

export default function Hero() {
  return (
    <div
      className="flex h-screen flex-col place-content-center place-items-center gap-y-4"
      id="#"
    >
      <h1 className="-mt-7 text-center text-4xl font-extrabold leading-[130%] text-primary md:font-semibold lg:mt-0 lg:text-6xl lg:font-semibold lg:leading-[128%]">
        Hey! <br />I am Busari Kiran Kumar
        <span className="text-secondary">.</span>
      </h1>
      <p className="-mt-[140px] h-[256px] w-[3px] rotate-90 rounded-full bg-secondary"></p>
      <div className="-mt-[125px] text-[20px] text-primary1 lg:leading-[140%]">
        <p className="text-balance text-center">
          A passionate Web Developer and AI-ML enthusiast. <br /> I&apos;m
          fueled by a passion for building clean and functional website.
        </p>
      </div>
      <Social />
      <div className="mt-[150px] animate-bounce">
        <a href="#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            version="1.1"
            width="21.33333396911621"
            height="21.33333396911621"
            viewBox="0 0 21.33333396911621 21.33333396911621"
          >
            <g transform="matrix(0,-1,1,0,-21.33333396911621,21.33333396911621)">
              <path
                d="M10.6667,33.33333396911621L10.6667,42.66663396911621L0,32.00003396911621L10.6667,21.33333396911621L10.6667,30.66666396911621L21.3333,30.66666396911621L21.3333,33.33333396911621L10.6667,33.33333396911621Z"
                fill="#1B1B1E"
                fillOpacity="1"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
