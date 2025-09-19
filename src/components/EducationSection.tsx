import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { GraduationCap, Calendar } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Engineering College",
      duration: "2023 - 2026",
      status: "Pursuing",
      description: "Focusing on Computer Science and Engineering with specialization in web technologies.",
      color: "bg-blue-500",
    },
    {
      degree: "Diploma in Engineering",
      institution: "Polytechnic Institute",
      duration: "2022",
      status: "Completed",
      description: "Comprehensive foundation in engineering principles and programming fundamentals.",
      color: "bg-green-500",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${edu.color} rounded-full border-4 border-background z-10`}
                ></motion.div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                    <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${edu.color}`}>
                              <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <Badge 
                              variant={edu.status === "Completed" ? "default" : "secondary"}
                              className={edu.status === "Completed" ? "bg-green-500 hover:bg-green-600" : ""}
                            >
                              {edu.status}
                            </Badge>
                          </div>
                        </div>

                        <h3 className="text-xl mb-2">{edu.degree}</h3>
                        <p className="text-muted-foreground mb-3">{edu.institution}</p>
                        
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.duration}
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-0">
            <CardContent className="p-6">
              <h3 className="text-lg mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Always exploring new technologies and frameworks to stay current
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Online Courses</Badge>
                <Badge variant="outline">Tech Conferences</Badge>
                <Badge variant="outline">Open Source</Badge>
                <Badge variant="outline">Community</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
