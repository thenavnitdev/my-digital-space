import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ExternalLink, Github, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "CRUD Application",
      description: "Full-featured CRUD application with user authentication, real-time updates, and responsive design built with MERN stack.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgyMTEwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Weather Application",
      description: "Dynamic weather app with location-based forecasts, interactive maps, and beautiful UI animations.",
      image: "https://images.unsplash.com/photo-1653022056328-913942485324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODEyNDkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "API Integration", "Tailwind", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "MedMind AI Assistant",
      description: "AI-powered medical assistant providing intelligent health recommendations and symptom analysis.",
      image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBhc3Npc3RhbnQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MjIwNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "AI/ML", "Node.js", "Python"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "Samsung Campus Project",
      description: "Enterprise-level campus management system with advanced features and scalable architecture.",
      image: "https://images.unsplash.com/photo-1696041756125-257354c459a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwdGVjaG5vbG9neSUyMHByb2plY3R8ZW58MXx8fHwxNzU4MjIwNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["MERN Stack", "Redux", "AWS", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with dark mode, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgyMTEwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Tailwind", "Motion", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`h-full ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden group">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
                      <Zap className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader className="pb-4">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1 group">
                      <Github className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 group">
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more projects or collaborate on something amazing?
          </p>
          <Button variant="outline" size="lg" className="group">
            <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
