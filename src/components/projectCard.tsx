import { Link } from 'react-router-dom';
import Tag from './Tag';

interface ZoomCardProps {
  title: string;
  image: string;
  link: string;
  description: string;
  stacks: string[];
}

const ZoomCard = ({
  title,
  image,
  description,
  link,
  stacks,
}: ZoomCardProps) => {
  return (
    <article className="group overflow-hidden rounded bg-bg bg-card shadow-sm transition-all duration-300 hover:shadow-md">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project`}
      >
        <figure className="overflow-hidden rounded-t-[4px]">
          <img
            src={image}
            alt={`Screenshot of ${title} project`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = '/fallback-image.png';
            }}
            className="h-auto w-full transform object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </figure>
        <div className="flex flex-col space-y-2 p-4">
          <h2 className="text-center text-lg font-medium tracking-tight text-primary lg:text-start">
            {title}
          </h2>
          <p className="text-center text-sm text-muted-foreground lg:text-start">
            {description}
          </p>
          <div className="w-full grid-cols-4 gap-8 space-y-4 md:grid">
            <div className="col-span-4">
              <Tag names={stacks} />
            </div>
            {/* <div className="col-span-1">
              <Button size={'sm'} className="w-full hover:opacity-90">
                View Project
              </Button>
            </div> */}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ZoomCard;
