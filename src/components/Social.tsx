import { CSSProperties, MouseEvent } from 'react';

interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
}

interface HoverColors {
  [platform: string]: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    platform: 'Github',
    url: 'https://github.com/KIRAN-BUSARI',
    icon: 'fab fa-github',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/shashidharby.design/',
    icon: 'fab fa-instagram',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shashidharby/',
    icon: 'fab fa-linkedin-in',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/+919900485461',
    icon: 'fab fa-whatsapp',
  },
];

const hoverColors: HoverColors = {
  Behance: '#1769ff',
  Instagram: '#E4405F',
  LinkedIn: '#0A66C2',
  WhatsApp: '#25D366',
};
export const Social = () => {
  const handleMouseEnter =
    (platform: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      (e.currentTarget.style as CSSProperties).color = hoverColors[platform];
    };

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    (e.currentTarget.style as CSSProperties).color = '';
  };
  return (
    <div className="mb-3 mt-0 flex justify-center space-x-[28px] lg:justify-start">
      {socialMediaLinks.map((social) => (
        <a
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition duration-300"
          aria-label={social.platform}
          style={{
            transition: 'color 0.3s',
          }}
          onMouseEnter={handleMouseEnter(social.platform)}
          onMouseLeave={handleMouseLeave}
        >
          <i className={`${social.icon} text-3xl`}></i>
        </a>
      ))}
    </div>
  );
};
