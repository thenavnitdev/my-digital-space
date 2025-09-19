import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function SkillsSection() {
  const skills = [
    { 
      name: "React.js", 
      icon: "⚛️", 
      level: 90,
      color: "bg-blue-500",
      description: "Building dynamic UIs"
    },
    { 
      name: "Node.js", 
      icon: "🟢", 
      level: 85,
      color: "bg-green-500",
      description: "Server-side development"
    },
    { 
      name: "Express.js", 
      icon: "⚡", 
      level: 88,
      color: "bg-yellow-500",
      description: "RESTful APIs"
    },
    { 
      name: "MongoDB", 
      icon: "🍃", 
      level: 82,
      color: "bg-green-600",
      description: "NoSQL database"
    },
    { 
      name: "Redux", 
      icon: "🔄", 
      level: 78,
      color: "bg-purple-500",
      description: "State management"
    },
    { 
      name: "API Integration", 
      icon: "🔗", 
      level: 85,
      color: "bg-indigo-500",
      description: "Third-party services"
    },
    { 
      name: "Git/GitHub", 
      icon: "📚", 
      level: 90,
      color: "bg-gray-700",
      description: "Version control"
    },
    { 
      name: "Tailwind CSS", 
      icon: "🎨", 
      level: 88,
      color: "bg-cyan-500",
      description: "Utility-first CSS"
    },
    { 
      name: "Bootstrap", 
      icon: "🅱️", 
      level: 85,
      color: "bg-purple-600",
      description: "CSS framework"
    },
    { 
      name: "Postman", 
      icon: "📮", 
      level: 80,
      color: "bg-orange-500",
      description: "API testing"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl mb-4"
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-lg mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {skill.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full`}
                      />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}% Proficiency
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Always learning and staying updated with latest technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">MySQL</Badge>
            <Badge variant="outline">AWS</Badge>
            <Badge variant="outline">Docker</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
