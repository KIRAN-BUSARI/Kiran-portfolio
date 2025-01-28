import { cn } from '@/lib/utils';
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiAppwrite,
  SiTypescript,
  SiShadcnui,
  SiGithubactions,
  SiHono,
  SiClerk,
  SiFirebase,
  SiCloudinary,
  SiJavascript,
  SiPrisma,
  SiAuth0,
} from 'react-icons/si';
import { Badge } from './ui/badge';

interface Tag {
  name: string;
  icon: React.ElementType;
  color: string;
}

const tags: Tag[] = [
  {
    name: 'react',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'nextjs',
    icon: SiNextdotjs,
    color: '#000000',
  },
  {
    name: 'tailwindcss',
    icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    name: 'mongodb',
    icon: SiMongodb,
    color: '#4DB33D',
  },
  {
    name: 'nodejs',
    icon: SiNodedotjs,
    color: '#3c873a',
  },
  {
    name: 'express',
    icon: SiExpress,
    color: '#000000',
  },
  {
    name: 'framer-motion',
    icon: SiFramer,
    color: '#000000',
  },
  {
    name: 'typescript',
    icon: SiTypescript,
    color: '#007ACC',
  },
  {
    name: 'appwrite',
    icon: SiAppwrite,
    color: '#FD366E',
  },
  {
    name: 'shadcn-ui',
    icon: SiShadcnui,
    color: '#000000',
  },
  {
    name: 'github-actions',
    icon: SiGithubactions,
    color: '#2088FF',
  },
  {
    name: 'hono',
    icon: SiHono,
    color: '#E36002',
  },
  {
    name: 'clerk',
    icon: SiClerk,
    color: '#1b1b1e',
  },
  {
    name: 'firebase',
    icon: SiFirebase,
    color: '#FF9100',
  },
  {
    name: 'cloudinary',
    icon: SiCloudinary,
    color: '#0000FF',
  },
  {
    name: 'javascript',
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    name: 'prisma',
    icon: SiPrisma,
    color: '#f1f1f1',
  },
  {
    name: 'auth0',
    icon: SiAuth0,
    color: '#EB5424',
  },
];

interface TagProps {
  names: string[];
}

const Tag = ({ names }: TagProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {names.map((name) => {
        const tag = tags.find((tag) => tag.name === name);
        if (!tag) return null;

        return (
          <Badge
            key={tag.name}
            className={cn(
              'gap-1 border-none font-medium transition-colors duration-200',
            )}
            variant={'outline'}
            style={{ backgroundColor: `${tag.color}20`, color: `` }}
            aria-label={`Technology: ${tag.name}`}
          >
            <tag.icon
              className="h-3.5 w-3.5"
              style={{
                color: `${tag.color}`,
              }}
            />
            <p className="text-sm capitalize">{tag.name}</p>
          </Badge>
        );
      })}
    </div>
  );
};

export default Tag;
