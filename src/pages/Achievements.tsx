import { motion } from 'framer-motion';

interface Achievement {
  year: string;
  title: string;
  description: string;
  category: 'award' | 'certification' | 'education' | 'work' | 'price money';
}

const achievements: Achievement[] = [
  {
    year: '2023',
    title: 'Full Stack Developer Certification',
    description:
      'Completed advanced web development certification with expertise in modern frameworks and best practices.',
    category: 'certification',
  },
  {
    year: '2023',
    title: 'WAVE-23 Hackathon - 3rd Place',
    description:
      'Developed a Learning Management System using MERN stack at the State Level Annual Hackathon, BEC Bagalkot.',
    category: 'award',
  },
  {
    year: '2024',
    title: 'HACKB-24 Hackathon - 4th Place',
    description:
      'Built a Doctor Appointment System using MERN stack, featuring OpenCV-powered facial recognition for secure authentication.',
    category: 'award',
  },
  {
    year: '2024',
    title: 'HACKB-24 2.0 Hackathon - 1st Place',
    description:
      'Created a Video Conferencing Application using Next.js, TypeScript, and PostgreSQL. Implemented innovative Chat-with -PDF feature using Generative AI at BITM Ballari State Level Inter-college Hackathon.',
    category: 'award',
  },
];

const Achievements = () => {
  return (
    <div className="min-h-auto w-full pt-28 text-primary" id="achievements">
      <div className="mb-12">
        <h1 className="text-5xl font-medium tracking-wide">
          Achievements
          <span className="text-secondary">.</span>
        </h1>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 h-full w-0.5 bg-secondary md:left-1/2"></div>

        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-12 flex flex-col gap-8 md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 mt-1.5 h-4 w-4 -translate-x-2 transform rounded-full bg-secondary md:left-1/2"></div>

            {/* Content */}
            <div className="ml-12 p-4 md:ml-0 md:w-1/2">
              <div className="rounded-lg border border-secondary bg-bg p-6 shadow-lg">
                <span className="font-bold text-secondary">
                  {achievement.year}
                </span>
                <h3 className="mt-2 text-xl font-bold">{achievement.title}</h3>
                <p className="mt-2 text-gray-500">{achievement.description}</p>
                <span className="mt-3 inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm capitalize text-primary">
                  {achievement.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
