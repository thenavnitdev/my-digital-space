import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/4f262f9f30e3da9fa8cd841069a7691115dd68de.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 mx-auto md:mx-0"
              >
                <ImageWithFallback
                  src={profileImage}
                  alt="Navnit Kumar Profile"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </motion.div>
              <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 hover:bg-green-600 text-white">
                Available for Hire
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-4">Hello! I'm Navnit Kumar</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A passionate MERN Stack Developer with expertise in building scalable web applications. 
                I love creating efficient, user-friendly solutions that solve real-world problems. 
                Currently pursuing B.Tech while actively working on exciting projects and delivering 
                quality freelance services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p>2+ Years</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hourly Rate</p>
                    <p>$20/hour</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-lg">
                    <Calendar className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                    <p>15+ Completed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <h4 className="mb-3">Quick Facts</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Full-Stack Developer</Badge>
                <Badge variant="secondary">Freelancer</Badge>
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Player</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}