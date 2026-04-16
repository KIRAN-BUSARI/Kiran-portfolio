import { Link } from 'react-router-dom';
import Tag from './Tag';
import { FaExternalLinkAlt } from 'react-icons/fa';
import LinkPreviewDemo from './link-preview-demo';

interface ZoomCardProps {
  title: string;
  image: string;
  link: string;
  description: string;
  stacks: string[];
  useLivePreview?: boolean;
}

const ZoomCard = ({
  title,
  image,
  description,
  link,
  stacks,
  useLivePreview = true,
}: ZoomCardProps) => {
  return (
    <article className="group container overflow-hidden rounded bg-bg bg-card shadow-sm drop-shadow-md transition-all duration-300 hover:drop-shadow-xl">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project`}
      >
        <figure>
          <LinkPreviewDemo
            url={link}
            title={title}
            fallbackImageSrc={image}
            useLivePreview={useLivePreview}
          />
        </figure>
        <div className="flex flex-col space-y-2 p-4">
          <div className="flex justify-between">
            <h2 className="text-center text-lg font-medium tracking-tight text-primary lg:text-start">
              {title}
            </h2>
            <p>
              <FaExternalLinkAlt size={18} />
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="w-full grid-cols-4 gap-8 space-y-4 md:grid">
            <div className="group col-span-4">
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
