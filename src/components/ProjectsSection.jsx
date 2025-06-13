import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const projects = [
  {
    id: 1,
    title: "AG Grid Integration in ERP Software",
    description:
      "Integrated AG Grid into an ERP system to enhance data interaction, including custom views, sorting/filtering, dynamic charts, and export functionality.",
    image: "/projects/project1.gif",
    tags: ["React", "Bootstrap", "AG Grid", "PHP", "CSS", "Babel"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Map and Chart Dashboard with AG Grid",
    description:
      "Developed an interactive dashboard combining AG Grid with map visualization and dynamic charting for geospatial insights.",
    image: "/projects/project2.png",
    tags: ["React", "AG Grid", "Bootstrap", "PHP", "Database", "SVG"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "dbPortal - Database Management Platform",
    description:
      "Designed and managed a portal for ERP-integrated database administration with SQL formatting, automation, and performance optimizations.",
    image: "/projects/project3.jpg",
    tags: ["React", "SQL", "HTML", "CSS", "Bootstrap", "Database", "Ag Grid"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Chandra Classes - Online tution plateform",
    description:
      "A Online and offline tution class for the kids and working professionals",
    image: "/projects/Preview.png",
    tags: ["HTML", "CSS", "Bootstrap", "JS", "EmailJS"],
    demoUrl: "https://chandra-classes.vercel.app/",
    githubUrl: "#",
  }
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my latest projects—carefully designed to blend functionality, speed, and an exceptional user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover group relative transition-all duration-300"
            >
              {/* Title */}
              <div className="text-left mb-2">
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>

              {/* Image with hover effect */}
              <div className="w-full h-40 mb-4 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-1">
                {project.description}
              </p>

              {/* Optional links (uncomment if needed) */}

              {project.demoUrl !== "#" ? <div className="flex justify-start space-x-3 mt-3">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} className="text-foreground/80 hover:text-primary transition-colors" />
                </a>
                {/* <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Github size={20} className="text-foreground/80 hover:text-primary transition-colors" />
        </a> */}
              </div> : null}

            </div>
          ))}
        </div>


        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
