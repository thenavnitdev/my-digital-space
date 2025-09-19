import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Code, Database, Globe, Smartphone, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Full-stack Web Development",
      description: "Complete web applications using MERN stack with modern design patterns and best practices.",
      features: ["Custom Web Applications", "E-commerce Platforms", "Content Management Systems", "Progressive Web Apps"],
      price: "Starting at $20/hour",
      color: "bg-blue-500",
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Seamless integration of third-party APIs and development of custom RESTful APIs.",
      features: ["REST API Development", "Third-party Integrations", "Payment Gateway Setup", "Authentication Systems"],
      price: "Starting at $20/hour",
      color: "bg-green-500",
    },
    {
      icon: Smartphone,
      title: "Responsive UI Design",
      description: "Mobile-first, responsive user interfaces that work perfectly across all devices.",
      features: ["Mobile-First Design", "Cross-browser Compatibility", "Interactive Components", "Performance Optimization"],
      price: "Starting at $20/hour",
      color: "bg-purple-500",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient database design, optimization, and management for your applications.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
      price: "Starting at $20/hour",
      color: "bg-orange-500",
    },
  ];

  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-3 rounded-lg ${service.color}`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl">{service.title}</h3>
                      <Badge variant="outline" className="mt-1">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className={`w-2 h-2 rounded-full ${service.color} mr-3 flex-shrink-0`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full group"
                    variant="outline"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have a unique project in mind? Let's discuss your requirements and create a tailored solution 
            that perfectly fits your needs and budget.
          </p>
          <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700">
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}